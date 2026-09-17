'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Camera, Clock, MessageCircle } from 'lucide-react';
import styles from './contato.module.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá Humberto! Meu nome é ${formData.nome} (${formData.telefone}).%0A%0A*Mensagem:* ${formData.mensagem}`;
    window.open(`https://wa.me/5515997546994?text=${texto}`, '_blank');
  };

  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Atendimento</span>
          <h1>Fale com o Humberto Veículos</h1>
          <p>Tire suas dúvidas, agende uma visita ou venha conhecer nossos veículos selecionados.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.containerGrid}>
          {/* Lado Esquerdo: Cards de Informações */}
          <div className={styles.infoSide}>
            <h2>Informações de Contato</h2>
            <p className={styles.sub}>Estamos prontos para te atender com total transparência e 20 anos de experiência.</p>

            <div className={styles.cardsList}>
              <div className={styles.infoCard}>
                <Phone className={styles.icon} size={24} />
                <div>
                  <h4>WhatsApp / Telefone</h4>
                  <p>(15) 99754-6994</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <MapPin className={styles.icon} size={24} />
                <div>
                  <h4>Localização</h4>
                  <p>Rua Fernando de Camargo, 193 - Jardim Santa Cecília, Sorocaba/SP</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Camera className={styles.icon} size={24} />
                <div>
                  <h4>Instagram</h4>
                  <p>@humberto.veiculosofc</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Clock className={styles.icon} size={24} />
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 08h às 18h<br />Sábado: 08h às 13h</p>
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
                  placeholder="Ex: (15) 99999-8888"
                  value={formData.telefone}
                  onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Como podemos te ajudar?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ex: Gostaria de saber mais sobre as opções de financiamento e modelos disponíveis..."
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

      {/* Seção do Mapa (Rua Fernando de Camargo, 193 - Sorocaba) */}
      <section className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <h2>Nossa Localização</h2>
          <p>Venha nos fazer uma visita em Sorocaba - SP</p>
        </div>
        
        <div className={styles.mapWrapper}>
          <iframe
            title="Localização Humberto Veículos"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.2223841893355!2d-47.472111!3d-23.488052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58ab26330ad3d%3A0x6b7444b05a621c17!2sR.%20Fernando%20de%20Camargo%2C%20193%20-%20Jardim%20Santa%20Cecilia%2C%20Sorocaba%20-%20SP%2C%2018074-777!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}