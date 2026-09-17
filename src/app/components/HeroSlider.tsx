'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShieldCheck, Car, KeyRound } from 'lucide-react';
import styles from './HeroSlider.module.css';

interface Slide {
  id: number;
  tag: string;
  titulo: string;
  descricao: string;
  btnText: string;
  btnLink: string;
  bgImage: string;
  icone: any;
}

const slides: Slide[] = [
  {
    id: 1,
    tag: 'Sorocaba - SP',
    titulo: 'Seu próximo carro está aqui',
    descricao: 'Veículos 100% selecionados, revisados e com a procedência e garantia de quem tem 20 anos de tradição.',
    btnText: 'Ver Estoque Completo',
    btnLink: '#estoque',
    bgImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600',
    icone: Car,
  },
  {
    id: 2,
    tag: 'Avaliação Justa & Rápida',
    titulo: 'Quer vender seu veículo?',
    descricao: 'A melhor avaliação da região com pagamento imediato e sem burocracia.',
    btnText: 'Avaliar Meu Carro',
    btnLink: '/vender',
    bgImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600',
    icone: KeyRound,
  },
  {
    id: 3,
    tag: 'Financiamento Facilitado',
    titulo: 'As melhores taxas de Sorocaba',
    descricao: 'Entrada facilitada no cartão de crédito em até 18x e financiamento em até 60x.',
    btnText: 'Falar no WhatsApp',
    btnLink: 'https://wa.me/5515997546994',
    bgImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600',
    icone: ShieldCheck,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className={styles.sliderContainer}>
      {slides.map((slide, index) => {
        const IconeSlide = slide.icone;
        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === current ? styles.slideActive : ''}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className={styles.overlay} />
            <div className={styles.container}>
              <span className={styles.heroTag}>
                <IconeSlide size={14} />
                {slide.tag}
              </span>
              <h1>{slide.titulo}</h1>
              <p>{slide.descricao}</p>
              <Link href={slide.btnLink} className={styles.heroBtn}>
                {slide.btnText}
              </Link>
            </div>
          </div>
        );
      })}

      {/* Controles Laterais */}
      <button onClick={prevSlide} className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Slide anterior">
        <ChevronLeft size={22} />
      </button>
      <button onClick={nextSlide} className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Próximo slide">
        <ChevronRight size={22} />
      </button>

      {/* Indicadores (Dots) */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para o slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}