
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import styles from './HeroSlider.module.css';

interface Slide {
  id: number;
  titulo: string;
  descricao: string;
  btnText: string;
  btnLink: string;
  bgImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    titulo: 'Seu próximo carro está aqui',
    descricao:
      'Veículos 100% selecionados, revisados e com a procedência e garantia de quem tem 20 anos de tradição.',
    btnText: 'Ver Estoque Completo',
    btnLink: '#estoque',
    bgImage:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=85&w=1920&auto=format&fit=crop',
  },
  {
    id: 2,
    titulo: 'Quer vender seu veículo?',
    descricao:
      'A melhor avaliação da região com pagamento imediato e sem burocracia.',
    btnText: 'Avaliar Meu Carro',
    btnLink: '/vender',
    bgImage:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=1920&auto=format&fit=crop',
  },
  {
    id: 3,
    titulo: 'As melhores taxas de Sorocaba',
    descricao:
      'Entrada facilitada no cartão de crédito em até 18x e financiamento em até 60x.',
    btnText: 'Falar no WhatsApp',
    btnLink: 'https://wa.me/5515997546994',
    bgImage:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=85&w=1920&auto=format&fit=crop',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [paused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className={styles.sliderContainer}
      aria-label="Destaques Humberto Veículos"
      aria-roledescription="carrossel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setPaused(false);
        }
      }}
    >
      {slides.map((slide, index) => {
        const active = index === current;

        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              active ? styles.slideActive : ''
            }`}
            aria-hidden={!active}
            inert={!active}
          >
            <div
              className={styles.slideImage}
              style={{
                backgroundImage: `url("${slide.bgImage}")`,
              }}
            />

            <div className={styles.overlay} />

            <div className={styles.container}>
              <div className={styles.content}>
                <h1>{slide.titulo}</h1>

                <p>{slide.descricao}</p>

                <Link
                  href={slide.btnLink}
                  className={styles.heroBtn}
                  tabIndex={active ? 0 : -1}
                  target={
                    slide.btnLink.startsWith('https://')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    slide.btnLink.startsWith('https://')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {slide.btnText}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={prevSlide}
        className={`${styles.navBtn} ${styles.prevBtn}`}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className={`${styles.navBtn} ${styles.nextBtn}`}
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={`${styles.dot} ${
              index === current ? styles.dotActive : ''
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}
