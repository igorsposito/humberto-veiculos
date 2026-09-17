'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, DollarSign, Clock, MessageCircle } from 'lucide-react';
import styles from './vender.module.css';

export default function VenderCarro() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    marca: '',
    modelo: '',
    versao: '',
    ano: '',
    km: '',
    preco: '',
    detalhes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá Humberto! Quero vender meu carro:%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Marca:* ${formData.marca}%0A` +
      `*Modelo:* ${formData.modelo}%0A` +
      `*Versão:* ${formData.versao || 'Não especificada'}%0A` +
      `*Ano:* ${formData.ano}%0A` +
      `*KM:* ${formData.km}%0A` +
      `*Valor Pretendido:* R$ ${formData.preco}%0A` +
      `*Observações:* ${formData.detalhes || 'Nenhuma'}`;

    window.open(`https://wa.me/5515997546994?text=${mensagem}`, '_blank');
  };

  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Avaliação Rápida</span>
          <h1>Venda ou Troque seu Carro sem Complicação</h1>
          <p>Receba uma proposta justa pelo seu veículo com quem entende do mercado em Sorocaba e região.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.containerGrid}>
          {/* Lado Esquerdo: Formulário */}
          <div className={styles.formCard}>
            <h2>Preencha os dados do veículo</h2>
            <p className={styles.formSub}>Leve menos de 1 minuto para enviar as informações.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Seu Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={formData.nome}
                    onChange={e => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (15) 99999-8888"
                    value={formData.telefone}
                    onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.row3}>
                <div className={styles.inputGroup}>
                  <label>Marca</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Fiat, Toyota..."
                    value={formData.marca}
                    onChange={e => setFormData({ ...formData, marca: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Modelo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Toro, Fastback..."
                    value={formData.modelo}
                    onChange={e => setFormData({ ...formData, modelo: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Versão</label>
                  <input
                    type="text"
                    placeholder="Ex: Volcano, Ultra, XEi..."
                    value={formData.versao}
                    onChange={e => setFormData({ ...formData, versao: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.row3}>
                <div className={styles.inputGroup}>
                  <label>Ano/Modelo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 2021/2022"
                    value={formData.ano}
                    onChange={e => setFormData({ ...formData, ano: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Quilometragem</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 45.000 km"
                    value={formData.km}
                    onChange={e => setFormData({ ...formData, km: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Valor Pretendido (R$)</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 85.000"
                    value={formData.preco}
                    onChange={e => setFormData({ ...formData, preco: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Detalhes / Opcionais (Opcional)</label>
                <textarea
                  rows={3}
                  placeholder="Ex: Único dono, teto solar, todas as revisões em concessionária..."
                  value={formData.detalhes}
                  onChange={e => setFormData({ ...formData, detalhes: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.btnSubmit}>
                <MessageCircle size={20} />
                Enviar para Avaliação no WhatsApp
              </button>
            </form>
          </div>

          {/* Lado Direito: Benefícios */}
          <div className={styles.benefitsSide}>
            <h3>Por que vender para a Humberto Veículos?</h3>

            <div className={styles.benefitBox}>
              <DollarSign className={styles.icon} size={24} />
              <div>
                <h4>Pagamento Seguro</h4>
                <p>Dinheiro na conta sem enrolação assim que fechar o negócio.</p>
              </div>
            </div>

            <div className={styles.benefitBox}>
              <ShieldCheck className={styles.icon} size={24} />
              <div>
                <h4>Zero Dor de Cabeça</h4>
                <p>Esqueça curiosos, golpistas de OLX ou ter que marcar visitas na sua casa.</p>
              </div>
            </div>

            <div className={styles.benefitBox}>
              <Clock className={styles.icon} size={24} />
              <div>
                <h4>Avaliação Agilizada</h4>
                <p>Analisamos sua proposta no mesmo dia pelo próprio WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}