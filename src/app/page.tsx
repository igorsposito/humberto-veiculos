'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CarCard from './components/CarCard';
import { carrosData } from './data/carros';
import { Search, ArrowUpDown } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const [busca, setBusca] = useState('');
  const [cambioFiltro, setCambioFiltro] = useState('Todos');
  const [precoMax, setPrecoMax] = useState('Todos');
  const [ordenacao, setOrdenacao] = useState('padrao');

  // 1. Filtragem dos carros
  const carrosFiltrados = carrosData.filter((carro) => {
    const termoBusca = busca.toLowerCase();
    const combinaBusca =
      carro.nome.toLowerCase().includes(termoBusca) ||
      carro.marca.toLowerCase().includes(termoBusca) ||
      carro.codigo.toLowerCase().includes(termoBusca);

    const combinaCambio = cambioFiltro === 'Todos' || carro.cambio === cambioFiltro;
    const combinaPreco = precoMax === 'Todos' || carro.preco <= Number(precoMax);

    return combinaBusca && combinaCambio && combinaPreco;
  });

  // 2. Ordenação por Preço
  const carrosOrdenados = [...carrosFiltrados].sort((a, b) => {
    if (ordenacao === 'menor-preco') return a.preco - b.preco;
    if (ordenacao === 'maior-preco') return b.preco - a.preco;
    return 0;
  });

  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.heroTag}>Vitória da Conquista - BA</span>
          <h1>Seu próximo carro está aqui</h1>
          <p>Veículos selecionados, revisados e com procedência garantida.</p>

          <div className={styles.filterBox}>
            <div className={styles.searchInput}>
              <Search size={20} color="#64748b" />
              <input
                type="text"
                placeholder="Busque por modelo, marca ou código (ex: HB20, VM-001)..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className={styles.selectGroup}>
              <select
                value={cambioFiltro}
                onChange={(e) => setCambioFiltro(e.target.value)}
                className={styles.select}
              >
                <option value="Todos">Todos os Câmbios</option>
                <option value="Manual">Manual</option>
                <option value="Automático">Automático</option>
              </select>

              <select
                value={precoMax}
                onChange={(e) => setPrecoMax(e.target.value)}
                className={styles.select}
              >
                <option value="Todos">Qualquer Valor</option>
                <option value="50000">Até R$ 50.000</option>
                <option value="80000">Até R$ 80.000</option>
                <option value="120000">Até R$ 120.000</option>
                <option value="200000">Até R$ 200.000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          {/* Cabeçalho com o Título à esquerda e a Ordenação à direita */}
          <div className={styles.gridHeader}>
            <h2>
              Veículos em Destaque <span>({carrosOrdenados.length})</span>
            </h2>

            <div className={styles.ordenacaoContainer}>
              <ArrowUpDown size={16} color="#64748b" />
              <select
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                className={styles.selectOrdenacao}
              >
                <option value="padrao">Ordenar: Destaques</option>
                <option value="menor-preco">Menor Preço</option>
                <option value="maior-preco">Maior Preço</option>
              </select>
            </div>
          </div>

          {carrosOrdenados.length > 0 ? (
            <div className={styles.grid}>
              {carrosOrdenados.map((carro) => (
                <CarCard key={carro.id} carro={carro} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p>Nenhum veículo encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}