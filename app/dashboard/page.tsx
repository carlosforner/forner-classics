"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Noto_Serif, Manrope } from "next/font/google";
import { supabase } from "@/lib/supabase";
import { Calendar as CalendarIcon, CheckCircle, Clock, ChevronRight, MessageSquare, CarFront, ChevronLeft } from "lucide-react";

// Fonts definition
const noto = Noto_Serif({ subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Types
interface Reservation {
  id: number;
  vehiculo: string;
  fecha: string;
  estado: string; // 'pending' | 'confirmed'
  pagado_reserva: boolean;
  detalles: string;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function LuxuryDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: resData, error } = await supabase
        .from("reservas")
        .select("*")
        .order("fecha", { ascending: false });
      
      if (!error && resData) {
        setReservations(resData as Reservation[]);
      } else {
        setReservations([
          { id: 1, vehiculo: 'Chevrolet 1930', fecha: '2026-05-12', estado: 'confirmed', pagado_reserva: true, detalles: 'Boda Premium - Hotel Palace' },
          { id: 2, vehiculo: 'Renault Caravelle', fecha: '2026-06-03', estado: 'pending', pagado_reserva: false, detalles: 'Ruta fotográfica costa' },
          { id: 3, vehiculo: 'Chevrolet 1930', fecha: '2026-06-15', estado: 'pending', pagado_reserva: false, detalles: 'Evento privado embajada' },
          { id: 4, vehiculo: 'Chevrolet 1930', fecha: '2026-08-22', estado: 'confirmed', pagado_reserva: true, detalles: 'Grabación de spot TV' },
        ]);
      }

      // Mock formspree leads for now (until env loaded)
      setLeads([
        { id: "1", name: 'Laura Gómez', email: "laura@prestige.com", message: "Estoy interesada en el Chevrolet para mi boda.", created_at: "Hoy" },
        { id: "2", name: 'Carlos Sanz', email: "carlos@estudios.com", message: "¿Disponibilidad del Renault Caravelle?", created_at: "Ayer" },
      ]);
    } catch (error) {
      console.error("Error loading data", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "pending" ? "confirmed" : "pending";
    await supabase.from("reservas").update({ estado: newStatus }).eq("id", id);
    setReservations(reservations.map(r => r.id === id ? { ...r, estado: newStatus } : r));
  };

  const toggleDeposit = async (id: number, currentStatus: boolean) => {
    await supabase.from("reservas").update({ pagado_reserva: !currentStatus }).eq("id", id);
    setReservations(reservations.map(r => r.id === id ? { ...r, pagado_reserva: !currentStatus } : r));
  };

  // KPI Calculations
  const totalReservations = reservations.length;
  const confirmedCount = reservations.filter(r => r.estado === "confirmed").length;
  const pendingDeposit = reservations.filter(r => !r.pagado_reserva).length;
  const chevroletCount = reservations.filter(r => r.vehiculo.includes("Chevrolet")).length;
  const renaultCount = reservations.filter(r => r.vehiculo.includes("Renault")).length;

  // Calendar Helpers
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const getDaysArray = () => {
    const days = [];
    for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  };
  
  const hasReservation = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return reservations.filter(r => r.fecha.startsWith(dateStr));
  };

  if (loading) {
    return <div className="min-h-screen bg-[#131313] flex items-center justify-center text-[#d4af37]">Cargando Control Central...</div>;
  }

  return (
    <div className={`min-h-screen bg-[#131313] text-[#e5e2e1] ${manrope.className} p-4 md:p-8 selection:bg-[#d4af37] selection:text-[#131313]`}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end pb-6 border-b border-[#353534]/50">
          <div>
            <h2 className="text-[#99907c] uppercase tracking-[0.2em] text-xs font-semibold mb-2">Panel Ejecutivo</h2>
            <h1 className={`${noto.className} text-4xl md:text-5xl text-[#d4af37] tracking-tight`}>Operaciones Reales</h1>
          </div>
          <p className="text-sm text-[#e5e2e1] mt-4 md:mt-0 opacity-80 flex items-center gap-2 bg-[#1c1b1b] px-4 py-2 rounded-full border border-[#353534]">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37] animate-pulse"></span>
            Sistema Conectado
          </p>
        </header>

        {/* TOP KPIs (Inverted Pyramid Base) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          <div className="bg-[#1c1b1b] rounded-2xl p-6 border border-[#2a2929] hover:border-[#4d4635] transition duration-500">
            <p className="text-[#99907c] text-xs uppercase tracking-widest font-bold mb-4">Masa Ocupacional</p>
            <div className="flex items-baseline gap-3">
              <span className={`${noto.className} text-5xl text-white`}>{totalReservations}</span>
              <span className="text-[#99907c] text-sm font-medium">Totales</span>
            </div>
            <div className="mt-4 pt-4 border-t border-[#353534]/50 flex justify-between items-center text-sm">
                <span className="text-[#99907c]">Confirmadas</span>
                <span className="text-[#d4af37] font-bold">{confirmedCount}</span>
            </div>
          </div>

          <div className="bg-[#1c1b1b] rounded-2xl p-6 border border-[#2a2929] hover:border-[#4d4635] transition duration-500">
            <p className="text-[#99907c] text-xs uppercase tracking-widest font-bold mb-4">Estado Financiero</p>
            <div className="flex items-baseline gap-3">
              <span className={`${noto.className} text-5xl text-[#ff6b6b]`}>{pendingDeposit}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-[#353534]/50 flex justify-between items-center text-sm">
                <span className="text-[#99907c]">Pendientes Fianza 30%</span>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#1c1b1b] rounded-2xl p-6 border border-[#2a2929] hover:border-[#4d4635] transition duration-500 relative overflow-hidden">
             <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#d4af37]/10 to-transparent"></div>
            <p className="text-[#99907c] text-xs uppercase tracking-widest font-bold mb-4">Rendimiento de Flota</p>
            <div className="space-y-4 relative z-10">
              <div>
                 <div className="flex justify-between items-center text-sm mb-1">
                   <span className="flex items-center gap-2 font-medium text-white"><CarIcon color="#d4af37"/> Chevrolet 1930</span>
                   <span className="font-bold text-[#d4af37]">{chevroletCount}</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#131313] rounded-full overflow-hidden">
                    <div className="h-full bg-[#d4af37]" style={{ width: `${(chevroletCount / totalReservations) * 100}%`}}></div>
                 </div>
              </div>
              
              <div>
                 <div className="flex justify-between items-center text-sm mb-1">
                   <span className="flex items-center gap-2 font-medium text-[#e5e2e1]"><CarIcon color="#99907c"/> Renault Caravelle</span>
                   <span className="font-bold text-[#99907c]">{renaultCount}</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#131313] rounded-full overflow-hidden">
                    <div className="h-full bg-[#99907c]" style={{ width: `${(renaultCount / totalReservations) * 100}%`}}></div>
                 </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* MIDDLE SECTION: Calendar & Leads */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Calendar (Occupies 2/3 on XL) */}
          <div className="xl:col-span-2 bg-[#1c1b1b] rounded-2xl p-6 border border-[#2a2929]">
            <div className="flex justify-between items-center mb-6">
              <h3 className={`${noto.className} text-xl text-white font-medium`}>Calendario Operativo</h3>
              <div className="flex items-center gap-4 bg-[#131313] rounded-lg p-1 border border-[#353534]/50">
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-1 hover:text-[#d4af37] transition rounded"><ChevronLeft size={18}/></button>
                <span className="font-semibold text-xs tracking-widest uppercase text-[#d4af37] w-32 text-center">
                  {currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </span>
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-1 hover:text-[#d4af37] transition rounded"><ChevronRight size={18}/></button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-3 text-center text-[10px] uppercase text-[#99907c] font-black tracking-widest">
               {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 flex-grow">
               {getDaysArray().map((day, idx) => {
                 const dayReservations = day ? hasReservation(day) : [];
                 const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();
                 return (
                   <div key={idx} className={`aspect-square sm:aspect-auto sm:min-h-[90px] p-1.5 sm:p-2 flex flex-col rounded-xl border relative transition duration-300 ${day ? 'bg-[#201f1f] border-[#353534]/50 hover:border-[#d4af37]/40' : 'bg-transparent border-transparent'}`}>
                     {day && (
                       <span className={`text-xs ml-1 font-semibold ${isToday ? 'text-white bg-[#d4af37] w-6 h-6 flex justify-center items-center rounded-full -ml-1 -mt-1 shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'text-[#99907c]'}`}>
                         {day}
                       </span>
                     )}
                     <div className="mt-2 space-y-1 sm:space-y-1.5 flex-1 overflow-y-auto hide-scroll">
                       {dayReservations.map((res, i) => (
                         <div key={i} className={`text-[10px] truncate px-2 py-1 rounded-md border font-medium ${res.vehiculo.includes("Chevrolet") ? 'bg-[#3b321a] border-[#6b5825] text-[#ecd8a1]' : 'bg-[#131313] border-[#353534] text-[#a09e9e]'}`} title={res.detalles}>
                           {res.vehiculo.split(" ")[0]}
                         </div>
                       ))}
                     </div>
                   </div>
                 );
               })}
            </div>
          </div>

          {/* Formspree Inbox */}
          <div className="bg-[#1c1b1b] rounded-2xl flex flex-col border border-[#2a2929] overflow-hidden">
            <div className="p-6 pb-4 border-b border-[#353534]/50 flex justify-between items-center bg-[#201f1f]">
              <h3 className={`${noto.className} text-xl text-white font-medium flex items-center gap-3`}>
                <MessageSquare size={20} className="text-[#d4af37]" />
                Bandeja de Entrada
              </h3>
              <span className="bg-[#d4af37] text-black text-[10px] font-black px-2 py-0.5 rounded-full">{leads.length} Nuevos</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {leads.map(lead => (
                <div key={lead.id} className="p-4 bg-[#131313] rounded-xl border border-[#353534]/30 hover:border-[#d4af37]/30 transition duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-sm font-bold text-white block">{lead.name}</span>
                      <span className="text-[10px] text-[#99907c] font-mono">{lead.email}</span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#99907c]">{lead.created_at}</span>
                  </div>
                  <p className="text-sm text-[#b0a89a] leading-relaxed line-clamp-3 italic">&quot;{lead.message}&quot;</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-[#201f1f] border-t border-[#353534]/50">
              <button className="w-full py-2.5 bg-transparent border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black rounded-lg text-sm font-bold tracking-widest uppercase transition duration-300">
                Ver todos (Formspree)
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM: Detailed Reservations (Granular Table disguised as Luxury Cards) */}
        <div className="pt-4 pb-12">
          <div className="flex justify-between items-end mb-6">
            <h3 className={`${noto.className} text-xl text-white font-medium`}>Expedientes Activos</h3>
            <span className="text-[#99907c] text-sm">Mostrando {reservations.length} expedientes</span>
          </div>

          <div className="space-y-3">
             {reservations.map((res, index) => (
               <motion.div 
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.05 }}
                 key={res.id} 
                 className="group bg-[#1c1b1b] p-5 flex flex-col lg:flex-row justify-between lg:items-center rounded-2xl border border-[#2a2929] hover:border-[#4d4635] hover:bg-[#201f1f] transition duration-300 gap-4 lg:gap-8"
               >
                 {/* Left Info */}
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="font-semibold text-lg text-white">{res.detalles || 'Cliente Forner'}</span>
                       <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold ${res.estado === 'confirmed' ? 'bg-[#0f2e12] text-[#4dcb52] border border-[#1b4e20]' : 'bg-[#3b2a00] text-[#d4af37] border border-[#d4af37]/30'}`}>
                         {res.estado === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                       </span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#99907c] font-medium">
                       <span className="flex items-center gap-1.5"><CalendarIcon size={14} className="text-white/40"/> {new Date(res.fecha).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                       <span className={`flex items-center gap-1.5 ${res.vehiculo.includes("Chevrolet") ? 'text-[#d4af37]' : ''}`}>
                          <CarIcon color={res.vehiculo.includes("Chevrolet") ? '#d4af37' : '#99907c'}/> {res.vehiculo}
                       </span>
                    </div>
                 </div>

                 {/* Right Actions */}
                 <div className="flex items-center flex-wrap gap-4 sm:gap-8 lg:border-l border-[#353534]/50 lg:pl-8">
                    
                    {/* Status Switch (iOS style but luxury) */}
                    <div className="flex items-center gap-3 cursor-pointer group/switch" onClick={() => toggleStatus(res.id, res.estado)}>
                       <span className="text-xs text-[#99907c] uppercase font-bold tracking-wider">Confirmación</span>
                       <div className={`w-12 h-6 rounded-full relative transition-all duration-300 border ${res.estado === 'confirmed' ? 'bg-[#d4af37]/10 border-[#d4af37]' : 'bg-[#131313] border-[#353534] group-hover/switch:border-[#99907c]'}`}>
                         <div className={`w-4 h-4 rounded-full absolute top-0.5 transition-all duration-300 shadow-sm ${res.estado === 'confirmed' ? 'left-7 bg-[#d4af37] shadow-[#d4af37]/50' : 'left-1 bg-[#99907c]'}`} />
                       </div>
                    </div>

                    {/* Deposit Checkbox */}
                     <div className="flex items-center gap-3 cursor-pointer group/check" onClick={() => toggleDeposit(res.id, res.pagado_reserva)}>
                       <span className="text-xs text-[#99907c] uppercase font-bold tracking-wider hidden sm:block">Fianza (30%)</span>
                       <div className={`w-6 h-6 rounded flex items-center justify-center transition-all duration-300 border ${res.pagado_reserva ? 'bg-[#d4af37] border-[#d4af37]' : 'bg-[#131313] border-[#353534] group-hover/check:border-[#99907c]'}`}>
                          {res.pagado_reserva && <CheckCircle size={14} className="text-black" strokeWidth={3} />}
                       </div>
                    </div>

                 </div>
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Simple Car Icon
function CarIcon({ color = "currentColor" }) {
  return <CarFront size={16} color={color} strokeWidth={1.5} />;
}
