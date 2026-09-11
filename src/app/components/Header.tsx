'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="VM Veículos" className={styles.logoImg} />
          <div className={styles.brandTextGroup}>
            <span className={styles.brandTitle}>VM VEÍCULOS</span>
            <span className={styles.brandSubtitle}>VITÓRIA DA CONQUISTA</span>
          </div>
        </Link>

        {/* Botão Hambúrguer para Celular */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Quem Somos
              </Link>
            </li>
            <li>
              <Link href="/contato" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>

          <Link 
            href="/vender" 
            className={styles.ctaBtn} 
            onClick={() => setMenuOpen(false)}
          >
            Quero Vender Meu Carro
          </Link>
        </nav>
      </div>
    </header>
  );
}