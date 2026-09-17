'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { carrosData } from '../../data/carros';
import { 
  Gauge, Calendar, Fuel, CheckCircle, ArrowLeft, MessageCircle, 
  X, ChevronLeft, ChevronRight, ShieldCheck, CreditCard, Sparkles, Share2, Check 
} from 'lucide-react';
import styles from './detalhes.module.css';

export default function DetalhesCarro() {
  const params = useParams();
  const carro = carrosData.find((c) => c.id === params.id);
  const [fotoAtiva, setFotoAtiva] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!carro || isModalOpen || isPaused || carro.fotos.length <= 1) return;

    const interval = setInterval(() => {
      setFotoAtiva((prev) => (prev + 1) % carro.fotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carro, isModalOpen, isPaused]);

  if (!carro) {
    return (
      <main>
        <Header />
        <div className={styles.container}>
          <p className={styles.naoEncontrado}>Veículo não encontrado.</p>
          <Link href="/" className={styles.voltarLink}>Voltar para o estoque</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const proximaFoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFotoAtiva((prev) => (prev + 1) % carro.fotos.length);
  };

  const fotoAnterior = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFotoAtiva((prev) => (prev - 1 + carro.fotos.length) % carro.fotos.length);
  };

  const handleCompartilhar = async () => {
    const shareData = {
      title: `${carro.nome} - Humberto Veículos`,
      text: `Olha esse ${carro.nome} (${carro.ano}) que encontrei na Humberto Veículos!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Compartilhamento cancelado.', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    }
  };

  const whatsMsg = encodeURIComponent(`Olá Humberto! Tenho interesse no ${carro.nome} (${carro.ano}) de R$ ${carro.preco.toLocaleString('pt-BR')} (CÓD: ${carro.codigo}) que vi no seu site.`);

  return (
    <main>
      <Header />

      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <Link href="/" className={styles.voltarLink}>
            <ArrowLeft size={18} /> Voltar para o estoque
          </Link>

          <div className={styles.gridMain}>
            {/* Galeria */}
            <div className={styles.galeriaSection}>
              <div 
                className={styles.fotoPrincipal} 
                onClick={() => setIsModalOpen(true)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <img 
                  key={fotoAtiva}
                  src={carro.fotos[fotoAtiva]} 
                  alt={carro.nome} 
                  className={styles.fadeImg}
                />

                {carro.fotos.length > 1 && (
                  <>
                    <button 
                      className={`${styles.cardNavBtn} ${styles.cardPrevBtn}`} 
                      onClick={fotoAnterior}
                      title="Foto anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      className={`${styles.cardNavBtn} ${styles.cardNextBtn}`} 
                      onClick={proximaFoto}
                      title="Próxima foto"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <div className={styles.expandOverlay}>
                  <Sparkles size={16} /> Clique para ampliar
                </div>
              </div>

              {/* Miniaturas */}
              <div className={styles.miniaturas}>
                {carro.fotos.map((foto, index) => (
                  <button
                    key={index}
                    onClick={() => setFotoAtiva(index)}
                    className={`${styles.thumbBtn} ${fotoAtiva === index ? styles.activeThumb : ''}`}
                  >
                    <img src={foto} alt={`${carro.nome} thumb ${index}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Informações */}
            <div className={styles.infoSection}>
              <div className={styles.badgingGroup}>
                <span className={styles.marcaBadge}>{carro.marca}</span>
                <span className={styles.codigoBadge}>CÓD: {carro.codigo}</span>
                {carro.vendido && <span className={styles.vendidoTag}>VENDIDO</span>}

                <button 
                  onClick={handleCompartilhar} 
                  className={styles.shareBtn}
                  title="Compartilhar este veículo"
                >
                  {copiado ? (
                    <>
                      <Check size={14} color="#25d366" /> Link Copiado!
                    </>
                  ) : (
                    <>
                      <Share2 size={14} /> Compartilhar
                    </>
                  )}
                </button>
              </div>

              <h1 className={styles.titulo}>{carro.nome}</h1>
              
              <div className={styles.precoContainer}>
                <p className={styles.preco}>
                  {carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
                <span className={styles.aVista}>(à vista)</span>
              </div>

              <div className={styles.specsGrid}>
                <div className={styles.specBox}>
                  <Calendar size={20} className={styles.specIcon} />
                  <div>
                    <small>Ano</small>
                    <strong>{carro.ano}</strong>
                  </div>
                </div>

                <div className={styles.specBox}>
                  <Gauge size={20} className={styles.specIcon} />
                  <div>
                    <small>Quilometragem</small>
                    <strong>{carro.km} km</strong>
                  </div>
                </div>

                <div className={styles.specBox}>
                  <Fuel size={20} className={styles.specIcon} />
                  <div>
                    <small>Câmbio</small>
                    <strong>{carro.cambio}</strong>
                  </div>
                </div>
              </div>

              <div className={styles.opcionaisSection}>
                <h3>Destaques & Equipamentos</h3>
                <ul className={styles.opcionaisList}>
                  {carro.opcionais.map((item, index) => (
                    <li key={index}>
                      <CheckCircle size={16} color="#25d366" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/5515997546994?text=${whatsMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsBtnGrande}
              >
                <MessageCircle size={22} />
                Tenho Interesse nesse Veículo
              </a>

              <div className={styles.trustCards}>
                <div className={styles.trustItem}>
                  <ShieldCheck size={20} className={styles.trustIcon} />
                  <span>Procedência e laudo inspecionados</span>
                </div>
                <div className={styles.trustItem}>
                  <CreditCard size={20} className={styles.trustIcon} />
                  <span>Financiamento bancário em até 60x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Lightbox */}
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
              <X size={28} />
            </button>

            {carro.fotos.length > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={fotoAnterior}>
                  <ChevronLeft size={36} />
                </button>
                <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={proximaFoto}>
                  <ChevronRight size={36} />
                </button>
              </>
            )}

            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <img src={carro.fotos[fotoAtiva]} alt={carro.nome} />
              <div className={styles.modalCounter}>
                {fotoAtiva + 1} / {carro.fotos.length}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}