'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CarCard from './components/CarCard';
import SidebarFiltros from './components/SidebarFiltros';
import HeroSlider from './components/HeroSlider';
import { carrosData } from './data/carros';
import { ArrowUpDown } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const initialFiltros = {
    busca: '',
    marca: 'Todas',
    categoria: 'Todas',
    cambio: 'Todos',
    combustivel: 'Todos',
    anoMin: '',
    precoMin: '',
    precoMax: '',
  };

  const [filtros, setFiltros] = useState(initialFiltros);
  const [ordenacao, setOrdenacao] = useState('padrao');

  const marcasDisponiveis = Array.from(new Set(carrosData.map((c) => c.marca)));

  const limparFiltros = () => setFiltros(initialFiltros);

  const carrosFiltrados = carrosData.filter((carro) => {
    const termoBusca = filtros.busca.toLowerCase();
    const combinaBusca =
      !filtros.busca ||
      carro.nome.toLowerCase().includes(termoBusca) ||
      carro.marca.toLowerCase().includes(termoBusca) ||
      carro.codigo.toLowerCase().includes(termoBusca);

    const combinaMarca = filtros.marca === 'Todas' || carro.marca === filtros.marca;
    const combinaCategoria = filtros.categoria === 'Todas' || carro.categoria === filtros.categoria;
    const combinaCambio = filtros.cambio === 'Todos' || carro.cambio === filtros.cambio;
    const combinaCombustivel = filtros.combustivel === 'Todos' || carro.combustivel === filtros.combustivel;
    const combinaPrecoMin = !filtros.precoMin || carro.preco >= Number(filtros.precoMin);
    const combinaPrecoMax = !filtros.precoMax || carro.preco <= Number(filtros.precoMax);
    const combinaAnoMin = !filtros.anoMin || Number(carro.ano.split('/')[0]) >= Number(filtros.anoMin);

    return (
      combinaBusca &&
      combinaMarca &&
      combinaCategoria &&
      combinaCambio &&
      combinaCombustivel &&
      combinaPrecoMin &&
      combinaPrecoMax &&
      combinaAnoMin
    );
  });

  const carrosOrdenados = [...carrosFiltrados].sort((a, b) => {
    if (ordenacao === 'menor-preco') return a.preco - b.preco;
    if (ordenacao === 'maior-preco') return b.preco - a.preco;
    return 0;
  });

  return (
    <main>
      <Header />

      {/* Hero Slider Interativo */}
      <HeroSlider />

      <section id="estoque" className={styles.gridSection}>
        <div className={styles.mainLayout}>
          <SidebarFiltros
            filtros={filtros}
            setFiltros={setFiltros}
            marcasDisponiveis={marcasDisponiveis}
            limparFiltros={limparFiltros}
          />

          <div className={styles.catalogArea}>
            <div className={styles.gridHeader}>
              <h2>
                Veículos Encontrados <span>({carrosOrdenados.length})</span>
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
        </div>
      </section>

      <Footer />
    </main>
  );
}