'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, Award, Users, Car, ArrowRight, Building2 } from 'lucide-react';
import styles from './quem-somos.module.css';

export default function QuemSomos() {
  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Tradição e Autoridade</span>
          <h1>Conheça a Humberto Veículos</h1>
          <p>Mais de 20 anos de experiência e know-how de concessionária na seleção dos melhores veículos em Sorocaba/SP.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.containerGrid}>
          {/* Lado Esquerdo: História */}
          <div className={styles.textBlock}>
            <h2>A bagagem de quem entende o mercado de verdade</h2>
            <p>
              A <strong>Humberto Veículos</strong> nasceu do desejo de oferecer em Sorocaba um atendimento verdadeiramente diferenciado na compra e venda de seminovos.
            </p>
            <p>
              À frente do negócio está <strong>Humberto Freitas</strong>, profissional com <strong>20 anos de experiência no setor automotivo e ex-gerente da Fiat</strong>. Essa bagagem de liderança em concessionária oficial trouxe o mais alto rigor técnico na avaliação, precificação e seleção dos carros que entram em nosso estoque.
            </p>
            <p>
              Como ex-gerente da Fiat, o Humberto aplica em seu próprio showroom os mesmos padrões de exigência e vistoria das grandes concessionárias, garantindo veículos 100% selecionados, com procedência comprovada e histórico transparente.
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
              <Building2 className={styles.statIcon} size={32} />
              <div>
                <h3>Ex-Gerente Fiat</h3>
                <p>Anos de experiência na gestão e liderança de concessionária oficial.</p>
              </div>
            </div>

            <div className={styles.statItem}>
              <Award className={styles.statIcon} size={32} />
              <div>
                <h3>20 Anos no Mercado</h3>
                <p>Duas décadas de tradição e negociações transparentes em Sorocaba.</p>
              </div>
            </div>

            <div className={styles.statItem}>
              <Car className={styles.statIcon} size={32} />
              <div>
                <h3>Veículos Selecionados</h3>
                <p>Rigoroso padrão de vistoria mecânica e laudo cautelar.</p>
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
              <h4>Padrão Concessionária</h4>
              <p>Critérios rigorosos de inspeção inspirados no padrão de fábrica da Fiat em cada carro do estoque.</p>
            </div>

            <div className={styles.pilarCard}>
              <ShieldCheck className={styles.pilarIcon} size={28} />
              <h4>Procedência Checada</h4>
              <p>Histórico transparente, laudo cautelar e documentação 100% em dia para sua total tranquilidade.</p>
            </div>

            <div className={styles.pilarCard}>
              <Users className={styles.pilarIcon} size={28} />
              <h4>Consultoria Direta</h4>
              <p>Atendimento exclusivo feito diretamente pelo Humberto, focado em encontrar a solução perfeita para você.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}