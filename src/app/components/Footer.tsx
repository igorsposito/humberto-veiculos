import Link from 'next/link';
import { Camera, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const instaUrl = "https://www.instagram.com/humberto.veiculosofc/";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Coluna 1: Logo, Descrição e Redes */}
          <div className={`${styles.col} ${styles.colBrand}`}>
            <img src="/logo.png" alt="Humberto Veículos" className={styles.footerLogoImg} />
            <p className={styles.description}>
              20 anos de experiência oferecendo veículos 100% selecionados, com procedência e transparência em Sorocaba - SP.
            </p>
            <a 
              href={instaUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIconBtn}
              title="Siga no Instagram"
            >
              <Camera size={20} />
            </a>
          </div>

          {/* Coluna 2: Navegação */}
          <div className={`${styles.col} ${styles.colNavegacao}`}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linksList}>
              <li><Link href="/">Estoque de Carros</Link></li>
              <li><Link href="/quem-somos">Quem Somos</Link></li>
              <li><Link href="/contato">Fale Conosco</Link></li>
              <li><Link href="/vender">Quero Vender Meu Carro</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Atendimento</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={18} className={styles.contactIcon} />
                <span>(15) 99754-6994</span>
              </li>
              <li>
                <MapPin size={18} className={styles.contactIcon} />
                <span>Rua Fernando de Camargo, 193 - Sorocaba/SP</span>
              </li>
              <li>
                <Camera size={18} className={styles.contactIcon} />
                <a 
                  href={instaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.instaLink}
                >
                  @humberto.veiculosofc
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© 2026 Humberto Veículos. Todos os direitos reservados.</p>
          <div className={styles.devBrand}>
            <span>Desenvolvido por</span>
            <a 
              href="https://www.agavelab.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.agaveLink}
            >
              <img src="/logo-agave.png" alt="Agave Lab" className={styles.agaveLogoImg} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}