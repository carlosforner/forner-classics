'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check, Send, Loader2, Car, CalendarDays, ClipboardList, CheckCircle2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

// ── Datos de vehículos ──────────────────────────────────────────────────
const vehicles = [
  {
    id: 'chevrolet-1930',
    name: 'Chevrolet International AC',
    year: '1930',
    image: '/images/chevrolet.webp.png',
    pax: '4 pasajeros',
    color: 'Negro & Caoba',
    tag: 'El más solicitado',
    available: true,
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '680€' },
      { tipo: 'Rodajes: Sesión Set', precio: '320€' },
      { tipo: 'Turismo: Ruta Safor', precio: '175€' },
    ],
  },
  {
    id: 'renault-caravelle-1962',
    name: 'Renault Caravelle',
    year: '1962',
    image: '/images/carav.webp.png',
    pax: '2 pasajeros',
    color: 'Rojo Burdeos',
    tag: 'El más fotogénico',
    available: true,
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '550€' },
      { tipo: 'Rodajes: Sesión Set', precio: '250€' },
      { tipo: 'Turismo: Ruta Safor', precio: '100€' },
    ],
  },
  {
    id: 'seat-850-1968',
    name: 'SEAT 850',
    year: '1968',
    image: '/images/seat850i.jpg.png',
    pax: '4 pasajeros',
    color: 'Verde Menta',
    tag: 'El más encantador',
    available: false,
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '440€' },
      { tipo: 'Rodajes: Sesión Set', precio: '200€' },
      { tipo: 'Turismo: Ruta Safor', precio: '80€' },
    ],
  },
  {
    id: 'renault-4-1982',
    name: 'Renault 4',
    year: '1982',
    image: '/images/renault4.webp.png',
    pax: '4 pasajeros',
    color: 'Amarillo Sol',
    tag: 'El más alegre',
    available: false,
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '350€' },
      { tipo: 'Rodajes: Sesión Set', precio: '160€' },
      { tipo: 'Turismo: Ruta Safor', precio: '65€' },
    ],
  },
];

// ── Tipos de evento y segmentos ────────────────────────────────────────
const eventTypes = [
  {
    value: 'bodas',
    label: 'Bodas & Celebraciones',
    segments: ['Paquete Único: Gran Reserva', 'Requisitos personalizados (a consultar)'],
  },
  {
    value: 'turismo',
    label: 'Turismo & Experiencias',
    segments: ['Paquete Ruta Safor', 'Requisitos personalizados (a consultar)'],
  },
  {
    value: 'rodajes',
    label: 'Rodajes & Fotografía',
    segments: ['Paquete Sesión Set', 'Requisitos personalizados (a consultar)'],
  },
  {
    value: 'otro',
    label: 'Otro evento',
    segments: ['Evento corporativo', 'Pedida de mano', 'Aniversario', 'Otro (indicar en notas)'],
  },
];

// ── Nombres de meses y días ────────────────────────────────────────────
const MONTH_NAMES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAY_NAMES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

// ── Componente Calendario ──────────────────────────────────────────────
function BookingCalendar({ selectedDate, onSelect, reservedDates = [] }: { selectedDate: Date | null; onSelect: (d: Date) => void; reservedDates?: string[] }) {
  const today = useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }, []);
  const [current, setCurrent] = useState(() => { const d = new Date(); d.setDate(1); d.setHours(0, 0, 0, 0); return d; });

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDayOfWeek = ((new Date(year, month, 1).getDay() + 6) % 7); // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrent(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrent(new Date(year, month + 1, 1));

  const isPast = (day: number) => new Date(year, month, day) < today;
  const isSelected = (day: number) =>
    selectedDate?.getFullYear() === year && selectedDate?.getMonth() === month && selectedDate?.getDate() === day;

  const formatSelected = () => {
    if (!selectedDate) return '';
    return selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div>
      {/* Calendar */}
      <div style={{ background: 'var(--surface-card)', border: '1px solid rgba(77,70,55,0.4)', padding: '1.75rem' }}>
        {/* Month nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <button onClick={prevMonth} style={{ background: 'none', border: '1px solid rgba(77,70,55,0.5)', color: '#A09070', cursor: 'pointer', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.5)'; (e.currentTarget as HTMLElement).style.color = '#A09070'; }}>
            <ChevronLeft size={14} />
          </button>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#E8D5A3', letterSpacing: '0.05em' }}>
            {MONTH_NAMES[month]} {year}
          </span>
          <button onClick={nextMonth} style={{ background: 'none', border: '1px solid rgba(77,70,55,0.5)', color: '#A09070', cursor: 'pointer', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.5)'; (e.currentTarget as HTMLElement).style.color = '#A09070'; }}>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.25rem', marginBottom: '0.5rem' }}>
          {DAY_NAMES.map(d => (
            <div key={d} style={{ textAlign: 'center', fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.1em', color: '#6B5C40', textTransform: 'uppercase', padding: '0.4rem 0' }}>
              {d}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.25rem' }}>
          {Array.from({ length: firstDayOfWeek }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const past = isPast(day);
            const sel = isSelected(day);
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const reserved = reservedDates.includes(dateStr);
            const disabled = past || reserved;

            return (
              <button
                key={day}
                onClick={() => !disabled && onSelect(new Date(year, month, day))}
                disabled={disabled}
                style={{
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85rem',
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  background: sel ? '#C9A84C' : 'transparent',
                  color: disabled ? '#2E2820' : sel ? '#1A1200' : '#A09070',
                  border: sel ? 'none' : '1px solid transparent',
                  transition: 'all 0.15s ease',
                  fontWeight: sel ? 700 : 400,
                  textDecoration: reserved ? 'line-through' : 'none',
                }}
                onMouseEnter={e => { if (!disabled && !sel) { (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; } }}
                onMouseLeave={e => { if (!disabled && !sel) { (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#A09070'; } }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected date display */}
      {selectedDate && (
        <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Check size={16} color="#C9A84C" />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#C9A84C', textTransform: 'capitalize' }}>
            {formatSelected()}
          </span>
        </div>
      )}

      {/* Legend */}
      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: 14, height: 14, background: '#C9A84C' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: '#6B5C40' }}>Fecha seleccionada</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: 14, height: 14, background: '#2E2820' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: '#6B5C40' }}>No disponible</span>
        </div>
      </div>
    </div>
  );
}

// ── Tipo de datos del formulario ───────────────────────────────────────
type FormData = {
  nombre: string;
  telefono: string;
  email: string;
  tipoEvento: string;
  segmento: string;
  horaInicio: string;
  horaFin: string;
  notas: string;
};

const emptyForm: FormData = { nombre: '', telefono: '', email: '', tipoEvento: '', segmento: '', horaInicio: '', horaFin: '', notas: '' };

// ── Step indicators ────────────────────────────────────────────────────
const STEPS = [
  { icon: Car, label: 'Vehículo' },
  { icon: CalendarDays, label: 'Fecha' },
  { icon: ClipboardList, label: 'Sus datos' },
  { icon: CheckCircle2, label: 'Confirmación' },
];

// ── Componente principal ───────────────────────────────────────────────
export default function ReservaSection() {
  const [step, setStep] = useState(0); // 0=vehicle, 1=calendar, 2=form, 3=success
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [reservedDates, setReservedDates] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (!selectedVehicle) {
      setReservedDates([]);
      return;
    }
    const fetchReservations = async () => {
      const { data, error } = await supabase
        .from('reservas')
        .select('dia_del_evento')
        .eq('coche', selectedVehicle.id)
        .neq('estado', 'cancelada');
        
      if (!error && data) {
        setReservedDates(data.map(r => r.dia_del_evento));
      }
    };
    fetchReservations();
  }, [selectedVehicle]);

  const currentSegments = eventTypes.find(e => e.value === formData.tipoEvento)?.segments ?? [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value, ...(name === 'tipoEvento' ? { segmento: '' } : {}) }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!formData.nombre.trim()) errs.nombre = 'El nombre es obligatorio';
    if (!formData.telefono.trim()) errs.telefono = 'El teléfono es obligatorio';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Introduzca un correo válido';
    if (!formData.tipoEvento) errs.tipoEvento = 'Seleccione el tipo de evento';
    if (!formData.segmento) errs.segmento = 'Seleccione el segmento';
    if (!formData.horaInicio) errs.horaInicio = 'Indique la hora de inicio';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);

    const fechaStr = selectedDate
      ? selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : 'No especificada';

    const payload = {
      _subject: `Nueva Reserva: ${selectedVehicle?.name} - ${fechaStr} - ${formData.nombre}`,
      _replyto: formData.email,
      '01. Datos del Cliente': `Nombre: ${formData.nombre} | Email: ${formData.email} | Teléfono: ${formData.telefono}`,
      '02. Vehículo Elegido': `${selectedVehicle?.name} (${selectedVehicle?.year})`,
      '03. Información de Fecha y Hora': `Fecha: ${fechaStr} | Horario: de ${formData.horaInicio} a ${formData.horaFin || 'No especificada'}`,
      '04. Detalles del Evento': `Tipo: ${eventTypes.find(e => e.value === formData.tipoEvento)?.label ?? formData.tipoEvento} | Categoría: ${formData.segmento}`,
      '05. Peticiones o Notas Adicionales': formData.notas || 'No se han dejado notas adicionales.',
    };

    try {
      let currentPrice = 'A consultar';
      // 1. Guardar reserva en Supabase (Bloquea fecha)
      if (selectedVehicle && selectedDate) {
        const isoDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
        // Buscar el precio basado en el tipo de evento
        const eventLabel = eventTypes.find(e => e.value === formData.tipoEvento)?.label || '';
        
        // Mapeo simple de segmento -> tipo de tarifa
        let lookupType = '';
        if (formData.tipoEvento === 'bodas') lookupType = 'Bodas: Gran Reserva';
        else if (formData.tipoEvento === 'turismo') lookupType = 'Turismo: Ruta Safor';
        else if (formData.tipoEvento === 'rodajes') lookupType = 'Rodajes: Sesión Set';
        
        const priceObj = selectedVehicle.tarifas.find(t => t.tipo === lookupType);
        if (priceObj) currentPrice = priceObj.precio;

        const { error: supaError } = await supabase.from('reservas').insert([{
          coche: selectedVehicle.id,
          dia_del_evento: isoDate,
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          segmento: formData.segmento,
          precio: currentPrice,
          estado: 'pendiente'
        }]);

        if (supaError) {
          console.error("⛔ [DEBUG] Error de Supabase:", supaError);
        }

        // 2. Enviar notificación por email usando Formspree
        const endpoint = "https://formspree.io/f/xnjogglj";
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }

        // 3. Enviar email de confirmación automático al cliente (NUEVO)
        try {
          await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nombre: formData.nombre,
              email: formData.email,
              telefono: formData.telefono,
              vehiculo: selectedVehicle.name,
              fecha: fechaStr,
              fechaRaw: selectedDate.toISOString(),
              segmento: formData.segmento,
              precio: currentPrice,
              mensaje: formData.notas
            }),
          });
        } catch (emailErr) {
          console.error("Error al disparar el email automático:", emailErr);
        }
      }
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setSubmitError(true);
      setSending(false);
      return;
    }


    setSending(false);
    setStep(3);
    const resSection = document.getElementById('reserva');
    if (resSection) {
      const y = resSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const reset = () => { setStep(0); setSelectedVehicle(null); setSelectedDate(null); setFormData(emptyForm); setErrors({}); setSubmitError(false); };

  // ── Render ─────────────────────────────────────────────────────────
  return (
    <section id="reserva" style={{ background: 'var(--surface-low)', padding: '6rem 0' }}>
      <div className="container-luxury">

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">— Iniciar su experiencia —</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 300, color: '#E8D5A3', marginBottom: '0.75rem' }}>
            Solicitar Reserva
          </h2>
          <p style={{ color: '#A09070', maxWidth: '500px', margin: '0 auto', fontSize: '0.9rem' }}>
            Complete los pasos a continuación. Responderemos con una propuesta personalizada en menos de 24 horas.
          </p>
        </div>

        {/* Step indicators */}
        {step < 3 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '3rem' }}>
            {STEPS.slice(0, 3).map((s, i) => {
              const Icon = s.icon;
              const done = step > i;
              const active = step === i;
              return (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{
                      width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: done ? '#C9A84C' : active ? 'transparent' : 'transparent',
                      border: `1px solid ${done || active ? '#C9A84C' : 'rgba(77,70,55,0.5)'}`,
                      transition: 'all 0.3s ease',
                    }}>
                      {done ? <Check size={16} color="#1A1200" /> : <Icon size={16} color={active ? '#C9A84C' : '#4D4637'} />}
                    </div>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: done || active ? '#C9A84C' : '#4D4637' }}>
                      {s.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div style={{ width: 'clamp(2rem, 8vw, 5rem)', height: '1px', background: step > i ? '#C9A84C' : 'rgba(77,70,55,0.4)', margin: '0 0.75rem', marginBottom: '1.4rem', transition: 'background 0.3s ease' }} />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── STEP 0: Selección de vehículo ── */}
        {step === 0 && (
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 300, color: '#E8D5A3', marginBottom: '1.75rem', textAlign: 'center' }}>
              Seleccione su vehículo
            </h3>
            {/* Available vehicles */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(77,70,55,0.25)', marginBottom: '2rem' }}>
              {vehicles.filter(v => v.available).map(v => (
                <button
                  key={v.id}
                  onClick={() => { setSelectedVehicle(v); setStep(1); }}
                  style={{
                    background: 'var(--surface-card)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.04)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--surface-card)'}
                >
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#0a0a0a' }}>
                    <Image src={v.image} alt={v.name} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 65%)' }} />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', background: '#C9A84C', color: '#1A1200', padding: '0.2rem 0.6rem' }}>Disponible</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, color: '#E8D5A3' }}>{v.name}</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(201,168,76,0.8)', letterSpacing: '0.1em' }}>{v.year} · {v.pax}</div>
                    </div>
                  </div>
                  <div style={{ padding: '1rem 1.25rem' }}>
                    {v.tarifas.map((t, i) => (
                      <div key={t.tipo} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0', borderBottom: i < v.tarifas.length - 1 ? '1px solid rgba(77,70,55,0.25)' : 'none' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#6B5C40' }}>{t.tipo}</span>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 500, color: '#C9A84C' }}>{t.precio}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem', color: '#C9A84C' }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Seleccionar</span>
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Upcoming vehicles */}
            <div style={{ borderTop: '1px solid rgba(77,70,55,0.3)', paddingTop: '1.5rem' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4D4637', textAlign: 'center', marginBottom: '1rem' }}>
                — Flota en expansión —
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(77,70,55,0.15)', opacity: 0.55 }}>
                {vehicles.filter(v => !v.available).map(v => (
                  <div key={v.id} style={{ background: 'var(--surface-card)', padding: 0 }}>
                    <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#0a0a0a', filter: 'grayscale(0.7)' }}>
                      <Image src={v.image} alt={v.name} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 65%)' }} />
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', background: '#333', color: '#888', padding: '0.2rem 0.6rem', border: '1px solid rgba(255,255,255,0.1)' }}>Próximamente</span>
                      </div>
                      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 300, color: '#A09070' }}>{v.name}</div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(160,144,112,0.6)', letterSpacing: '0.1em' }}>{v.year}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 1: Selección de fecha ── */}
        {step === 1 && selectedVehicle && (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            {/* Selected vehicle chip */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1.25rem', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', marginBottom: '2rem' }}>
              <div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5C40', display: 'block', marginBottom: '0.2rem' }}>Vehículo elegido</span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#C9A84C' }}>{selectedVehicle.name} · {selectedVehicle.year}</span>
              </div>
              <button onClick={() => { setSelectedVehicle(null); setStep(0); }} style={{ background: 'none', border: '1px solid rgba(77,70,55,0.5)', color: '#6B5C40', cursor: 'pointer', padding: '0.35rem 0.75rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.5)'; (e.currentTarget as HTMLElement).style.color = '#6B5C40'; }}>
            Cambiar
          </button>
            </div>

            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 300, color: '#E8D5A3', marginBottom: '1.5rem', textAlign: 'center' }}>
              Seleccione la fecha del evento
            </h3>

            <BookingCalendar selectedDate={selectedDate} onSelect={setSelectedDate} reservedDates={reservedDates} />

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button onClick={() => { setSelectedDate(null); setStep(0); }} className="btn-ghost" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>
                ← Atrás
              </button>
              <button disabled={!selectedDate} onClick={() => setStep(2)} className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.75rem', opacity: selectedDate ? 1 : 0.4, cursor: selectedDate ? 'pointer' : 'not-allowed' }}>
                Continuar →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Datos del cliente ── */}
        {step === 2 && selectedVehicle && selectedDate && (
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            {/* Summary chips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(77,70,55,0.3)', marginBottom: '2.5rem' }}>
              {[
                { label: 'Vehículo', value: `${selectedVehicle.name} · ${selectedVehicle.year}` },
                { label: 'Fecha', value: selectedDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) },
              ].map(item => (
                <div key={item.label} style={{ background: 'var(--surface-card)', padding: '0.875rem 1.25rem' }}>
                  <span style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5C40', marginBottom: '0.2rem' }}>{item.label}</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#C9A84C', textTransform: 'capitalize' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

              {/* Nombre */}
              <Field label="Nombre completo *" error={errors.nombre}>
                <input className="input-luxury" name="nombre" type="text" placeholder="Su nombre y apellidos" required value={formData.nombre} onChange={handleChange} />
              </Field>

              {/* Teléfono + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid-2">
                <Field label="Teléfono de contacto *" error={errors.telefono}>
                  <input className="input-luxury" name="telefono" type="tel" placeholder="+34 600 000 000" required value={formData.telefono} onChange={handleChange} />
                </Field>
                <Field label="Correo electrónico *" error={errors.email}>
                  <input className="input-luxury" name="email" type="email" placeholder="su@email.com" required value={formData.email} onChange={handleChange} />
                </Field>
              </div>

              {/* Tipo de evento */}
              <Field label="Tipo de evento *" error={errors.tipoEvento}>
                <select className="input-luxury" name="tipoEvento" required value={formData.tipoEvento} onChange={handleChange}>
                  <option value="">Seleccione el tipo de evento...</option>
                  {eventTypes.map(e => <option key={e.value} value={e.value}>{e.label}</option>)}
                </select>
              </Field>

              {/* Segmento */}
              {formData.tipoEvento && (
                <Field label="Segmento del evento *" error={errors.segmento}>
                  <select className="input-luxury" name="segmento" required value={formData.segmento} onChange={handleChange}>
                    <option value="">Seleccione el segmento...</option>
                    {currentSegments.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
              )}

              {/* Horario */}
              <div>
                <label style={labelStyle}>Horario del servicio *</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid-2">
                  <Field label="Hora de inicio *" error={errors.horaInicio}>
                    <input className="input-luxury" name="horaInicio" type="time" required value={formData.horaInicio} onChange={handleChange} style={{ colorScheme: 'dark' }} />
                  </Field>
                  <Field label="Hora de fin (aprox.)">
                    <input className="input-luxury" name="horaFin" type="time" value={formData.horaFin} onChange={handleChange} style={{ colorScheme: 'dark' }} />
                  </Field>
                </div>
              </div>

              {/* Notas */}
              <Field label="Información adicional">
                <textarea className="input-luxury" name="notas" rows={4} placeholder="Cualquier detalle relevante: ubicación, peticiones especiales, número de personas, decoración, etc." value={formData.notas} onChange={handleChange} style={{ resize: 'vertical', minHeight: '100px' }} />
              </Field>

              {/* Aviso RGPD */}
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', color: '#4D4637', lineHeight: 1.6 }}>
                🔒 Sus datos se utilizarán exclusivamente para gestionar su solicitud de reserva y no serán cedidos a terceros. Puede ejercer sus derechos RGPD contactando con nosotros.
              </p>

              {/* Botones */}
              {submitError && (
                <div role="alert" style={{ background: 'rgba(180,50,50,0.12)', border: '1px solid rgba(180,50,50,0.4)', padding: '0.75rem 1rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#e07070', marginBottom: '0.5rem' }}>
                  Ha ocurrido un error al enviar la solicitud. Por favor, inténtelo de nuevo o contáctenos por WhatsApp.
                </div>
              )}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setStep(1)} className="btn-ghost" style={{ padding: '0.875rem 1.5rem', fontSize: '0.75rem' }}>
                  ← Atrás
                </button>
                <button type="submit" className="btn-primary" id="submit-reserva" disabled={sending} style={{ padding: '0.875rem 2rem', fontSize: '0.8rem', opacity: sending ? 0.7 : 1 }}>
                  {sending ? <><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Enviando...</> : <><Send size={15} /> Enviar solicitud</>}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── STEP 3: Confirmación ── */}
        {step === 3 && (
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem', background: 'var(--surface-card)', border: '1px solid rgba(201,168,76,0.25)' }}>
            <div style={{ width: 68, height: 68, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <CheckCircle2 size={32} color="#C9A84C" />
            </div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 300, color: '#E8D5A3', marginBottom: '0.75rem' }}>
              Solicitud recibida
            </h3>
            <div style={{ height: '1px', width: '50px', background: '#C9A84C', margin: '0 auto 1.5rem' }} />
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', color: '#A09070', lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Gracias, <strong style={{ color: '#E8D5A3' }}>{formData.nombre}</strong>. Hemos recibido su solicitud para el{' '}
              <strong style={{ color: '#C9A84C' }}>{selectedVehicle?.name} ({selectedVehicle?.year})</strong>.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', color: '#A09070', lineHeight: 1.8, marginBottom: '2rem' }}>
              Le hemos enviado una confirmación a <strong style={{ color: '#E8D5A3' }}>{formData.email}</strong>. Nos pondremos en contacto con usted en las próximas <strong style={{ color: '#C9A84C' }}>24 horas</strong> para confirmar todos los detalles.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <a
                href={`https://wa.me/34601329162?text=Hola,%20acabo%20de%20enviar%20una%20solicitud%20de%20reserva%20por%20la%20web%20de%20Forner%20Classics.%20Mi%20nombre%20es%20${encodeURIComponent(formData.nombre)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ textAlign: 'center', fontSize: '0.75rem', padding: '0.75rem 1rem', whiteSpace: 'normal', lineHeight: 1.4, maxWidth: '100%' }}
              >
                También puede escribirnos por WhatsApp
              </a>
              <button onClick={reset} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#4D4637', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'underline' }}>
                Realizar otra solicitud
              </button>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}

// ── Sub-componente Field ───────────────────────────────────────────────
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
      {error && <span style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', color: '#C44B4B', marginTop: '0.35rem' }}>{error}</span>}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.62rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  color: '#6B5C40',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
};
