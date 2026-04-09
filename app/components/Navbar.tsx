'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, MessageCircle, Phone, Instagram, Mail } from 'lucide-react';

const navLinks = [
  { label: 'La Flota', href: '#flota' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contacto', href: '#reserva' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownServiciosOpen, setDropdownServiciosOpen] = useState(false);
  const [dropdownContactoOpen, setDropdownContactoOpen] = useState(false);
  const [hoveredVehicle, setHoveredVehicle] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<{img: string, pack: string} | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'flota', 'servicios', 'historia', 'faq', 'reserva'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setDropdownOpen(false);
    setDropdownServiciosOpen(false);
    setDropdownContactoOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const contactOptions = [
    { name: 'WhatsApp', href: 'https://wa.me/34601329162', icon: <MessageCircle size={14} /> },
    { name: 'Llamar por teléfono', href: 'tel:+34601329162', icon: <Phone size={14} /> },
    { name: 'Instagram', href: 'https://instagram.com/fornerclassics', icon: <Instagram size={14} /> },
    { name: 'Correo electrónico', href: 'mailto:hola@fornerclassics.com', icon: <Mail size={14} /> },
  ];

  return (
    <nav
      className="navbar-luxury"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.80)',
      }}
    >
      <div className="container-luxury">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 0' }}>
          {/* Logo */}
          <a
            href="/"
            aria-label="Forner Classics - Ir al inicio"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Image
                src="/images/logo-navbar.png.jpg"
                alt="Forner Classics Logo Horizontal"
                width={220}
                height={65}
                priority
                style={{
                  height: '65px',
                  maxWidth: '220px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.1))',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'}
                onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              if (link.label === 'La Flota') {
                return (
                  <div 
                    key={link.href} 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => {
                      setDropdownOpen(false);
                      setHoveredVehicle(null);
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isActive || dropdownOpen ? '#C9A84C' : '#A09070',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        padding: '1.5rem 0',
                        borderBottom: isActive ? '1px solid #C9A84C' : '1px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      {link.label}
                      <span style={{ 
                        fontSize: '0.5rem', 
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        display: 'inline-block'
                      }}>▼</span>
                    </button>

                    {/* Dropdown Menu - La Flota */}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-2rem',
                      width: '480px',
                      background: 'rgba(10,10,10,0.98)',
                      backdropFilter: 'blur(25px)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      opacity: dropdownOpen ? 1 : 0,
                      visibility: dropdownOpen ? 'visible' : 'hidden',
                      transform: dropdownOpen ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 1000,
                      boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                      overflow: 'hidden'
                    }}>
                      {/* List Column */}
                      <div style={{ 
                        flex: '0 0 240px', 
                        padding: '1.25rem 0',
                        borderRight: '1px solid rgba(201,168,76,0.1)'
                      }}>
                        {[
                          { name: 'Chevrolet International (1930)', id: '#chevrolet-1930', img: '/images/chevrolet.webp.png' },
                          { name: 'Renault Caravelle (1962)', id: '#renault-caravelle-1962', img: '/images/carav.webp.png' },
                          { name: 'SEAT 850 (1968)', id: '#seat-850-1968', img: '/images/seat850i.jpg.png' },
                          { name: 'Renault 4 (1982)', id: '#renault-4-1982', img: '/images/renault4.webp.png' },
                        ].map((v) => (
                          <button
                            key={v.id}
                            onClick={() => handleNavClick(v.id)}
                            style={{
                              display: 'block',
                              width: '100%',
                              padding: '0.85rem 1.5rem',
                              textAlign: 'left',
                              border: 'none',
                              color: hoveredVehicle === v.img ? '#C9A84C' : '#A09070',
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '0.65rem',
                              fontWeight: 500,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              background: hoveredVehicle === v.img ? 'rgba(201,168,76,0.08)' : 'none',
                              paddingLeft: hoveredVehicle === v.img ? '2rem' : '1.5rem',
                            }}
                            onMouseEnter={() => setHoveredVehicle(v.img)}
                          >
                            {v.name}
                          </button>
                        ))}
                      </div>

                      {/* Preview Column */}
                      <div style={{ 
                        flex: 1, 
                        position: 'relative',
                        background: '#050505',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {hoveredVehicle ? (
                          <div key={hoveredVehicle} style={{ width: '100%', height: '100%', position: 'relative', animation: 'fadeIn 0.5s ease forwards' }}>
                             <Image 
                               src={hoveredVehicle} 
                               alt="Vista previa flota" 
                               fill
                               sizes="240px"
                               style={{ objectFit: 'cover' }}
                             />
                             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 25%)' }} />
                          </div>
                        ) : (
                          <div style={{ color: 'rgba(201,168,76,0.2)', fontFamily: 'serif', fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>
                            Descubre nuestra<br/>flota exclusiva
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Servicios') {
                return (
                  <div 
                    key={link.href} 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownServiciosOpen(true)}
                    onMouseLeave={() => {
                      setDropdownServiciosOpen(false);
                      setHoveredService(null);
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isActive || dropdownServiciosOpen ? '#C9A84C' : '#A09070',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        padding: '1.5rem 0',
                        borderBottom: isActive ? '1px solid #C9A84C' : '1px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      {link.label}
                      <span style={{ 
                        fontSize: '0.5rem', 
                        transform: dropdownServiciosOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        display: 'inline-block'
                      }}>▼</span>
                    </button>

                    {/* Dropdown Menu - Servicios */}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-1rem',
                      width: '480px',
                      background: 'rgba(10,10,10,0.98)',
                      backdropFilter: 'blur(25px)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      opacity: dropdownServiciosOpen ? 1 : 0,
                      visibility: dropdownServiciosOpen ? 'visible' : 'hidden',
                      transform: dropdownServiciosOpen ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 1000,
                      boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                      overflow: 'hidden'
                    }}>
                      {/* List Column */}
                      <div style={{ 
                        flex: '0 0 240px', 
                        padding: '1.25rem 0',
                        borderRight: '1px solid rgba(201,168,76,0.1)'
                      }}>
                        {[
                          { name: 'Bodas & Celebraciones', id: '#servicio-bodas', img: '/images/service-bodas.png.jpg', pack: 'Gran Reserva' },
                          { name: 'Turismo & Experiencias', id: '#servicio-turismo', img: '/images/service-turismo.png.jpg', pack: 'Ruta Safor' },
                          { name: 'Rodajes & Fotografía', id: '#servicio-rodajes', img: '/images/service-rodajes.png.jpg', pack: 'Sesión Set' },
                        ].map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleNavClick(s.id)}
                            style={{
                              display: 'block',
                              width: '100%',
                              padding: '0.85rem 1.5rem',
                              textAlign: 'left',
                              border: 'none',
                              color: hoveredService?.img === s.img ? '#C9A84C' : '#A09070',
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '0.65rem',
                              fontWeight: 500,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              background: hoveredService?.img === s.img ? 'rgba(201,168,76,0.08)' : 'none',
                              paddingLeft: hoveredService?.img === s.img ? '2rem' : '1.5rem',
                            }}
                            onMouseEnter={() => setHoveredService({ img: s.img, pack: s.pack })}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>

                      {/* Preview Column */}
                      <div style={{ 
                        flex: 1, 
                        position: 'relative',
                        background: '#050505',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {hoveredService ? (
                          <div key={hoveredService.img} style={{ width: '100%', height: '100%', position: 'relative', animation: 'fadeIn 0.5s ease forwards' }}>
                             <Image 
                               src={hoveredService.img} 
                               alt="Vista previa servicio" 
                               fill
                               sizes="240px"
                               style={{ objectFit: 'cover', opacity: 0.6 }}
                             />
                             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 25%)' }} />
                             <div style={{ 
                               position: 'absolute', 
                               bottom: '1.5rem', 
                               left: '1.5rem', 
                               right: '1.5rem',
                               borderLeft: '2px solid #C9A84C',
                               paddingLeft: '1rem'
                             }}>
                               <div style={{ color: '#C9A84C', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.2rem' }}>Pack Recomendado</div>
                               <div style={{ color: '#FFF', fontSize: '0.8rem', fontFamily: 'serif', fontStyle: 'italic' }}>{hoveredService.pack}</div>
                             </div>
                          </div>
                        ) : (
                          <div style={{ color: 'rgba(201,168,76,0.2)', fontFamily: 'serif', fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>
                            Experiencias<br/>a medida
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Contacto') {
                return (
                  <div 
                    key={link.href} 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownContactoOpen(true)}
                    onMouseLeave={() => setDropdownContactoOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isActive || dropdownContactoOpen ? '#C9A84C' : '#A09070',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        padding: '1.5rem 0',
                        borderBottom: isActive ? '1px solid #C9A84C' : '1px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      {link.label}
                      <span style={{ 
                        fontSize: '0.5rem', 
                        transform: dropdownContactoOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        display: 'inline-block'
                      }}>▼</span>
                    </button>

                    {/* Dropdown Menu - Contacto */}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: '-1rem',
                      width: '240px',
                      background: 'rgba(10,10,10,0.98)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      padding: '1rem 0',
                      opacity: dropdownContactoOpen ? 1 : 0,
                      visibility: dropdownContactoOpen ? 'visible' : 'hidden',
                      transform: dropdownContactoOpen ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 1000,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    }}>
                      {contactOptions.map((opt) => (
                        <a
                          key={opt.name}
                          href={opt.href}
                          target={opt.href.startsWith('http') ? '_blank' : undefined}
                          rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            width: '100%',
                            padding: '0.75rem 1.5rem',
                            textDecoration: 'none',
                            color: '#A09070',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.65rem',
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = '#C9A84C';
                            (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.05)';
                            (e.currentTarget as HTMLElement).style.paddingLeft = '1.75rem';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = '#A09070';
                            (e.currentTarget as HTMLElement).style.background = 'none';
                            (e.currentTarget as HTMLElement).style.paddingLeft = '1.5rem';
                          }}
                        >
                          <span style={{ opacity: 0.7 }}>{opt.icon}</span>
                          {opt.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isActive ? '#C9A84C' : '#A09070',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    padding: '1.5rem 0',
                    borderBottom: isActive ? '1px solid #C9A84C' : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#C9A84C' : '#A09070')}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('#reserva')}
              className="btn-primary"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}
            >
              Reservar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              color: '#C9A84C',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
            }}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'rgba(0,0,0,0.98)',
          borderTop: '1px solid rgba(77,70,55,0.4)',
          padding: '2rem 1.25rem',
        }}>
          {navLinks.map((link) => {
            if (link.label === 'La Flota') {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      color: '#E8D5A3',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      padding: '1rem 0',
                      borderBottom: '1px solid rgba(77,70,55,0.2)',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ 
                      fontSize: '0.6rem', 
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                      color: '#C9A84C'
                    }}>▼</span>
                  </button>
                  {dropdownOpen && (
                    <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                      {[
                        { name: 'Chevrolet International (1930)', id: '#chevrolet-1930' },
                        { name: 'Renault Caravelle (1962)', id: '#renault-caravelle-1962' },
                        { name: 'SEAT 850 (1968)', id: '#seat-850-1968' },
                        { name: 'Renault 4 (1982)', id: '#renault-4-1982' },
                      ].map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => handleNavClick(opt.id)}
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            padding: '0.875rem 1rem',
                            color: '#A09070',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.75rem',
                            letterSpacing: '0.05em',
                            borderLeft: '1px solid rgba(201,168,76,0.2)',
                            marginLeft: '0.5rem',
                            cursor: 'pointer'
                          }}
                        >
                          {opt.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.label === 'Servicios') {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setDropdownServiciosOpen(!dropdownServiciosOpen)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      color: '#E8D5A3',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      padding: '1rem 0',
                      borderBottom: '1px solid rgba(77,70,55,0.2)',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ 
                      fontSize: '0.6rem', 
                      transform: dropdownServiciosOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                      color: '#C9A84C'
                    }}>▼</span>
                  </button>
                  {dropdownServiciosOpen && (
                    <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                      {[
                        { name: 'Bodas & Celebraciones', id: '#servicio-bodas' },
                        { name: 'Turismo & Experiencias', id: '#servicio-turismo' },
                        { name: 'Rodajes & Fotografía', id: '#servicio-rodajes' },
                      ].map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => handleNavClick(opt.id)}
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            padding: '0.875rem 1rem',
                            color: '#A09070',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.75rem',
                            letterSpacing: '0.05em',
                            borderLeft: '1px solid rgba(201,168,76,0.2)',
                            marginLeft: '0.5rem',
                            cursor: 'pointer'
                          }}
                        >
                          {opt.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.label === 'Contacto') {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setDropdownContactoOpen(!dropdownContactoOpen)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      color: '#E8D5A3',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      padding: '1rem 0',
                      borderBottom: '1px solid rgba(77,70,55,0.2)',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ 
                      fontSize: '0.6rem', 
                      transform: dropdownContactoOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                      color: '#C9A84C'
                    }}>▼</span>
                  </button>
                  {dropdownContactoOpen && (
                    <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                      {contactOptions.map(opt => (
                        <a
                          key={opt.name}
                          href={opt.href}
                          target={opt.href.startsWith('http') ? '_blank' : undefined}
                          rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={() => setIsOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.875rem 1rem',
                            textDecoration: 'none',
                            color: '#A09070',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.75rem',
                            letterSpacing: '0.05em',
                            borderLeft: '1px solid rgba(201,168,76,0.2)',
                            marginLeft: '0.5rem'
                          }}
                        >
                          <span style={{ color: '#C9A84C' }}>{opt.icon}</span>
                          {opt.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  color: '#E8D5A3',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(77,70,55,0.2)',
                }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('#reserva')}
            className="btn-primary"
            style={{ width: '100%', marginTop: '1.5rem' }}
          >
            Solicitar Reserva
          </button>
        </div>
      )}

    </nav>
  );
}
