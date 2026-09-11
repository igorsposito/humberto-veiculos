'use client';

import { useState } from 'react';
import Header from './components/Header';
import CarCard from './components/CarCard';
import { carrosData } from './data/carros';
import { Search } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const [busca, setBusca] = useState('');
  const [cambioFiltro, setCambioFiltro] = useState('Todos');

  const carrosFiltrados = carrosData.filter(carro => {
    const termoBusca = busca.toLowerCase();
    const combinaBusca = 
      carro.nome.toLowerCase().includes(termoBusca) || 
      carro.marca.toLowerCase().includes(termoBusca) ||
      carro.codigo.toLowerCase().includes(termoBusca);

    const combinaCambio = cambioFiltro === 'Todos' || carro.cambio === cambioFiltro;

    return combinaBusca && combinaCambio;
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
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.gridHeader}>
            <h2>Veículos em Destaque <span>({carrosFiltrados.length})</span></h2>
          </div>

          {carrosFiltrados.length > 0 ? (
            <div className={styles.grid}>
              {carrosFiltrados.map(carro => (
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
    </main>
  );
}