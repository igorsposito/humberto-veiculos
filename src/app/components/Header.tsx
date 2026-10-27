
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.logoLink}
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Humberto Veículos"
            className={styles.logoImg}
          />

          <div className={styles.brandTextGroup}>
            <span className={styles.brandTitle}>
              HUMBERTO VEÍCULOS
            </span>
            <span className={styles.brandSubtitle}>
              SOROCABA - SP
            </span>
          </div>
        </Link>

        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${
            menuOpen ? styles.navOpen : ''
          }`}
          aria-label="Navegação principal"
        >
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/#estoque" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Estoque
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
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
