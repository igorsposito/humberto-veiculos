
import { Clock3, Phone, MessageCircle } from 'lucide-react';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.hours}>
          <Clock3 size={15} aria-hidden="true" />
          <span>
            Atendimento: <strong>08h às 18h</strong>
          </span>
        </div>

        <div className={styles.contact}>
          <a href="tel:+5515997546994" className={styles.phone}>
            <Phone size={15} aria-hidden="true" />
            <strong>(15) 99754-6994</strong>
          </a>

          <span className={styles.divider} />

          <a
            href="https://wa.me/5515997546994"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
            aria-label="Fale conosco pelo WhatsApp"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Fale conosco</span>
          </a>
        </div>
      </div>
    </div>
  );
}
