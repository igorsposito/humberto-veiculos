'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
  const defaultMsg = encodeURIComponent(
    "Olá Vitor! Estou no site da VM Veículos e gostaria de tirar umas dúvidas."
  );

  return (
    <a
      href={`https://wa.me/5573981436039?text=${defaultMsg}`}
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