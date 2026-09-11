'use client';

import { useState } from 'react';
import Header from '../components/Header';
import { MapPin, Phone, Camera, Clock, MessageCircle, Send } from 'lucide-react';
import styles from './contato.module.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá Vitor! Meu nome é ${formData.nome} (${formData.telefone}).%0A%0A*Mensagem:* ${formData.mensagem}`;
    window.open(`https://wa.me/5573981436039?text=${texto}`, '_blank');
  };

  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Atendimento</span>
          <h1>Fale com a VM Veículos</h1>
          <p>Tire suas dúvidas, agende uma visita ou venha tomar um café conosco.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.containerGrid}>
          {/* Lado Esquerdo: Cards de Informações */}
          <div className={styles.infoSide}>
            <h2>Informações de Contato</h2>
            <p className={styles.sub}>Estamos prontos para te atender com total transparência.</p>

            <div className={styles.cardsList}>
              <div className={styles.infoCard}>
                <Phone className={styles.icon} size={24} />
                <div>
                  <h4>WhatsApp / Telefone</h4>
                  <p>(73) 98143-6039</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <MapPin className={styles.icon} size={24} />
                <div>
                  <h4>Localização</h4>
                  <p>Vitória da Conquista - BA</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Camera className={styles.icon} size={24} />
                <div>
                  <h4>Instagram</h4>
                  <p>@vm.veiculos_vitormatos</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Clock className={styles.icon} size={24} />
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 08h às 18h<br />Sábado: 08h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário de Mensagem */}
          <div className={styles.formCard}>
            <h2>Envie uma Mensagem</h2>
            <p className={styles.sub}>Preencha abaixo para iniciar o atendimento direto no WhatsApp.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Seu Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Matheus Oliveira"
                  value={formData.nome}
                  onChange={e => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Seu Telefone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: (77) 99999-8888"
                  value={formData.telefone}
                  onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Como podemos te ajudar?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ex: Gostaria de saber mais sobre as condições de financiamento do Corolla..."
                  value={formData.mensagem}
                  onChange={e => setFormData({ ...formData, mensagem: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.btnSubmit}>
                <MessageCircle size={20} />
                Iniciar Conversa no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Seção do Mapa Provisório (Centro de Conquista) */}
      <section className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <h2>Nossa Localização</h2>
          <p>Venha conhecer nosso estoque de perto em Vitória da Conquista</p>
        </div>
        
        <div className={styles.mapWrapper}>
          <iframe
            title="Localização VM Veículos"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.943187213812!2d-40.8447!3d-14.8661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b2046fa4bfb%3A0x6b801a6b0c2a2656!2sCentro%2C%20Vit%C3%B3ria%20da%20Conquista%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}