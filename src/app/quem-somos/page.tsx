'use client';

import Link from 'next/link';
import Header from '../components/Header';
import { ShieldCheck, Award, Users, Car, ArrowRight } from 'lucide-react';
import styles from './quem-somos.module.css';

export default function QuemSomos() {
  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Tradição e Confiança</span>
          <h1>Conheça a VM Veículos</h1>
          <p>Sua referência na compra e venda de veículos selecionados em Vitória da Conquista e região.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.containerGrid}>
          {/* Lado Esquerdo: História */}
          <div className={styles.textBlock}>
            <h2>Paixão por carros e compromisso com você</h2>
            <p>
              A <strong>VM Veículos</strong> nasceu com um propósito claro: transformar a experiência de comprar e vender veículos seminovos em Vitória da Conquista. Sabemos que a aquisição de um carro vai muito além de um negócio — é a realização de um sonho ou uma conquista da família.
            </p>
            <p>
              Por isso, sob a liderança de <strong>Vitor Matos</strong>, trabalhamos exclusivamente com estoque de alta qualidade, garantindo veículos com procedência checada, históricos transparentes e revisões em dia.
            </p>
            <p>
              Esqueça a burocracia e as incertezas das vendas informais. Na VM Veículos, cada cliente recebe um atendimento personalizado, seguro e ágil do primeiro contato à entrega das chaves.
            </p>

            <div className={styles.ctaBox}>
              <Link href="/" className={styles.btnEstoque}>
                Ver Nosso Estoque <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Lado Direito: Destaque visual/Stats */}
          <div className={styles.statsCard}>
            <div className={styles.statItem}>
              <Car className={styles.statIcon} size={32} />
              <div>
                <h3>Estoque Selecionado</h3>
                <p>Veículos inspecionados com laudo e procedência.</p>
              </div>
            </div>

            <div className={styles.statItem}>
              <ShieldCheck className={styles.statIcon} size={32} />
              <div>
                <h3>Segurança Total</h3>
                <p>Negociações transparentes sem surpresas ou pegadinhas.</p>
              </div>
            </div>

            <div className={styles.statItem}>
              <Users className={styles.statIcon} size={32} />
              <div>
                <h3>Clientes Satisfeitos</h3>
                <p>Atendimento direto e focado na melhor escolha para o seu perfil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção dos Pilares */}
      <section className={styles.pilaresSection}>
        <div className={styles.container}>
          <h2 className={styles.pilaresTitle}>Nossos Compromissos</h2>
          
          <div className={styles.pilaresGrid}>
            <div className={styles.pilarCard}>
              <Award className={styles.pilarIcon} size={28} />
              <h4>Qualidade Rigorosa</h4>
              <p>Só entram no nosso estoque veículos que passam pelos nossos critérios exigentes de conservação e mecânica.</p>
            </div>

            <div className={styles.pilarCard}>
              <ShieldCheck className={styles.pilarIcon} size={28} />
              <h4>Transparência</h4>
              <p>Informações claras sobre quilometragem, estado do veículo, histórico e documentação pronta para transferência.</p>
            </div>

            <div className={styles.pilarCard}>
              <Users className={styles.pilarIcon} size={28} />
              <h4>Parceria de Longo Prazo</h4>
              <p>Nosso objetivo não é fazer apenas uma venda, mas ser a sua loja de confiança para todas as suas trocas de carro.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}