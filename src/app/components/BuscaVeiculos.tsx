
'use client';

import { FormEvent, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import styles from './BuscaVeiculos.module.css';

interface BuscaVeiculosProps {
  buscaAtual: string;
  marcaAtual: string;
  marcasDisponiveis: string[];
  onBuscar: (busca: string, marca: string) => void;
}

export default function BuscaVeiculos({
  buscaAtual,
  marcaAtual,
  marcasDisponiveis,
  onBuscar,
}: BuscaVeiculosProps) {
  const [busca, setBusca] = useState(buscaAtual);
  const [marca, setMarca] = useState(marcaAtual);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onBuscar(busca.trim(), marca);

    document.getElementById('estoque')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      className={styles.section}
      aria-label="Pesquisa de veículos"
    >
      <div className={styles.container}>
        <form className={styles.card} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h2>Encontre seu próximo veículo</h2>
            <p>Busque entre as opções disponíveis em nosso estoque.</p>
          </div>

          <div className={styles.fields}>
            <label className={styles.field}>
              <span>Qual veículo você procura?</span>
              <div className={styles.inputWrap}>
                <Search size={19} aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Nome, modelo ou código"
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                />
              </div>
            </label>

            <label className={styles.field}>
              <span>Marca</span>
              <div className={styles.inputWrap}>
                <SlidersHorizontal
                  size={19}
                  aria-hidden="true"
                />
                <select
                  value={marca}
                  onChange={(event) =>
                    setMarca(event.target.value)
                  }
                >
                  <option value="Todas">Todas as marcas</option>
                  {marcasDisponiveis.map((nome) => (
                    <option key={nome} value={nome}>
                      {nome}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <button className={styles.searchBtn} type="submit">
              <Search size={19} aria-hidden="true" />
              Buscar veículos
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
