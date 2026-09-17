'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
  const defaultMsg = encodeURIComponent(
    "Olá Humberto! Estou no seu site e gostaria de tirar algumas dúvidas."
  );

  return (
    <a
      href={`https://wa.me/5515997546994?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatBtn}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Fale Conosco</span>
    </a>
  );
}