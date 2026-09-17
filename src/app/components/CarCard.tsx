import Link from 'next/link';
import { MessageCircle, Gauge, Calendar } from 'lucide-react';
import { Carro } from '../data/carros';
import styles from './CarCard.module.css';

interface CarCardProps {
  carro: Carro;
}

export default function CarCard({ carro }: CarCardProps) {
  // Mensagem condicional do WhatsApp direcionada ao Humberto
  const textoWhats = carro.vendido
    ? `Olá Humberto! Vi que o ${carro.nome} (CÓD: ${carro.codigo}) no seu site consta como vendido. Você tem algum modelo similar disponível no estoque?`
    : `Olá Humberto! Tenho interesse no ${carro.nome} (${carro.ano}) de R$ ${carro.preco.toLocaleString('pt-BR')} (CÓD: ${carro.codigo}) que vi no seu site.`;

  const whatsMsg = encodeURIComponent(textoWhats);

  return (
    <div className={`${styles.card} ${carro.vendido ? styles.cardVendido : ''}`}>
      {/* Tarja de Vendido ou Destaque */}
      {carro.vendido ? (
        <span className={styles.vendidoBadge}>VENDIDO</span>
      ) : (
        carro.destaque && <span className={styles.destaqueTag}>DESTAQUE</span>
      )}

      <div className={styles.imageContainer}>
        <img 
          src={carro.fotos[0]} 
          alt={carro.nome} 
          className={`${styles.image} ${carro.vendido ? styles.imgVendido : ''}`} 
        />
        {carro.vendido && <div className={styles.overlayVendido}>VENDIDO</div>}
      </div>

      <div className={styles.content}>
        <div className={styles.headerGroup}>
          <span className={styles.marca}>{carro.marca}</span>
          <span className={styles.codigo}>CÓD: {carro.codigo}</span>
        </div>

        <h3 className={styles.nome}>{carro.nome}</h3>

        <div className={styles.precoContainer}>
          <p className={styles.preco}>
            {carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
          <span className={styles.aVista}>(à vista)</span>
        </div>

        <div className={styles.specs}>
          <span><Calendar size={14} /> {carro.ano}</span>
          <span><Gauge size={14} /> {carro.km} km</span>
          <span>{carro.cambio}</span>
        </div>

        <div className={styles.actions}>
          <Link href={`/carro/${carro.id}`} className={styles.detalhesBtn}>
            Ver Detalhes
          </Link>
          <a
            href={`https://wa.me/5515997546994?text=${whatsMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsBtn}
            title={carro.vendido ? "Consultar similares no WhatsApp" : "Tenho interesse no WhatsApp"}
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}