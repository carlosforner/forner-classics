'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionLink = motion(Link);

export default function HeroSection() {
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Subtle parallax mapping (reduced range to avoid showing edges with less zoom)
  const imageX = useTransform(springX, [0, 1920], [10, -10]);
  const imageY = useTransform(springY, [0, 1080], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Background with subtle Parallax and no extra scale/zoom */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          inset: '-20px', // Small overflow just for the subtle movement
          x: imageX,
          y: imageY,
        }}
      >
        <Image
          src="/images/hero-principal.jpg.png"
          alt="Forner Classics — Coches clásicos con chófer en Gandía"
          fill
          priority
          quality={95}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 70%',
            filter: 'brightness(0.5) contrast(1.1)',
          }}
        />
      </motion.div>

      {/* Static Vignette Layer - More aggressive for legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 45%, rgba(0,0,0,0.9) 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Art Déco frame */}
      <div style={{
        position: 'absolute',
        top: '2rem', right: '2rem', bottom: '2rem', left: '2rem',
        pointerEvents: 'none',
        zIndex: 3,
        boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.08)',
      }} />

      {/* Content */}
      <div
        className="container-luxury hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          minHeight: '100svh',
          paddingBottom: '5rem',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          marginTop: '-8vh',
        }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: 'relative', width: 'clamp(220px, 30vw, 440px)', height: '120px' }}
          >
            <Image
              src="/images/logo-principal.png"
              alt="Forner Classics"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            style={{
              height: '1px',
              width: 'clamp(60px, 12vw, 120px)',
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)',
              transformOrigin: 'center',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}
          >
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(0.85rem, 1.8vw, 1.2rem)',
              fontWeight: 400,
              color: '#E8D5A3',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              margin: 0,
              textShadow: '0 2px 20px rgba(0,0,0,0.9)',
            }}>
              Alquiler de Coches Clásicos
            </h1>

            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(0.62rem, 1.1vw, 0.78rem)',
              fontWeight: 300,
              color: 'rgba(201,168,76,0.75)',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              margin: 0,
            }}>
              Con chófer incluido · Gandía
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            style={{ marginTop: '0.75rem' }}
          >
            <MotionLink
              href="/reserva"
              onMouseEnter={() => setIsHoveringButton(true)}
              onMouseLeave={() => setIsHoveringButton(false)}
              whileHover={{
                scale: 1.04,
                borderColor: 'rgba(201,168,76,0.9)',
                boxShadow: '0 0 40px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.05)',
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                position: 'relative',
                background: 'rgba(0,0,0,0.35)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#E8D5A3',
                padding: '0.85rem 3rem',
                fontSize: '0.7rem',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                backdropFilter: 'blur(16px)',
                textDecoration: 'none',
                display: 'inline-block',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
            >
              <motion.div
                initial={{ x: '-110%' }}
                whileHover={{ x: '110%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(232,213,163,0.18), transparent)',
                  pointerEvents: 'none',
                }}
              />
              <span style={{ position: 'relative', zIndex: 1 }}>Reservar</span>
            </MotionLink>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
          }}>Descubrir</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '30px',
              background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
