
'use client';

import { useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import styles from './MarcasCarousel.module.css';

interface MarcasCarouselProps {
  marcas?: string[];
  marcaSelecionada: string;
  onSelecionarMarca: (marca: string) => void;
}

const marcasVitrine = [
  { nome: 'Chevrolet', logo: 'chevrolet' },
  { nome: 'Volkswagen', logo: 'volkswagen' },
  { nome: 'Fiat', logo: 'fiat' },
  { nome: 'Ford', logo: 'ford' },
  { nome: 'Toyota', logo: 'toyota' },
  { nome: 'Honda', logo: 'honda' },
  { nome: 'Hyundai', logo: 'hyundai' },
  { nome: 'Jeep', logo: 'jeep' },
  { nome: 'Renault', logo: 'renault' },
  { nome: 'Nissan', logo: 'nissan' },
  { nome: 'Peugeot', logo: 'peugeot' },
  { nome: 'Citroën', logo: 'citroen' },
  { nome: 'Mitsubishi', logo: 'mitsubishi' },
  { nome: 'Kia', logo: 'kia' },
  { nome: 'BMW', logo: 'bmw' },
  { nome: 'Mercedes-Benz', logo: 'mercedesbenz' },
  { nome: 'Audi', logo: 'audi' },
  { nome: 'Volvo', logo: 'volvo' },
  { nome: 'BYD', logo: 'byd' },
  { nome: 'Suzuki', logo: 'suzuki' },
  { nome: 'Porsche', logo: 'porsche' },
  { nome: 'Mini', logo: 'mini' },
  { nome: 'Kawasaki', logo: 'kawasaki' },
  { nome: 'Yamaha', logo: 'yamaha' },
];

function MarcaCard({
  nome,
  logo,
  selecionada,
  onClick,
}: {
  nome: string;
  logo: string;
  selecionada: boolean;
  onClick: () => void;
}) {
  const [erroImagem, setErroImagem] = useState(false);

  return (
    <button
      type="button"
      className={`${styles.brand} ${
        selecionada ? styles.brandActive : ''
      }`}
      onClick={onClick}
      aria-label={`Buscar veículos ${nome}`}
      aria-pressed={selecionada}
    >
      {!erroImagem ? (
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/${logo}.svg`}
          alt=""
          loading="lazy"
          onError={() => setErroImagem(true)}
        />
      ) : (
        <span className={styles.brandFallback}>
          {nome}
        </span>
      )}

      <span className={styles.brandName}>
        {nome}
      </span>
    </button>
  );
}

export default function MarcasCarousel({
  marcas = [],
  marcaSelecionada,
  onSelecionarMarca,
}: MarcasCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const nomesVitrine = new Set(
    marcasVitrine.map((marca) =>
      marca.nome.toLocaleLowerCase('pt-BR')
    )
  );

  const marcasExtras = marcas
    .filter(
      (marca) =>
        !nomesVitrine.has(
          marca.toLocaleLowerCase('pt-BR')
        )
    )
    .map((marca) => ({
      nome: marca,
      logo: '',
    }));

  const todasMarcas = [
    ...marcasVitrine,
    ...marcasExtras,
  ];

  const mover = (direcao: number) => {
    scrollRef.current?.scrollBy({
      left: direcao * 440,
      behavior: 'smooth',
    });
  };

  const selecionar = (marca: string) => {
    const marcaCadastrada = marcas.find(
      (item) =>
        item.toLocaleLowerCase('pt-BR') ===
        marca.toLocaleLowerCase('pt-BR')
    );

    const valorMarca = marcaCadastrada ?? marca;

    onSelecionarMarca(valorMarca);

    document.getElementById('estoque')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      className={styles.section}
      aria-label="Explore veículos por marca"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h2>Explore por marca</h2>
            <p>Encontre o veículo ideal para você.</p>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label="Marcas anteriores"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => mover(1)}
              aria-label="Próximas marcas"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className={styles.scrollArea}
          ref={scrollRef}
        >
          <div className={styles.track}>
            {todasMarcas.map((marca) => (
              <MarcaCard
                key={marca.nome}
                nome={marca.nome}
                logo={marca.logo}
                selecionada={
                  marcaSelecionada.toLocaleLowerCase('pt-BR') ===
                  marca.nome.toLocaleLowerCase('pt-BR')
                }
                onClick={() => selecionar(marca.nome)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
