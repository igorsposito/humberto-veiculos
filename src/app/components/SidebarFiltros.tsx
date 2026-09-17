'use client';

import { useState } from 'react';
import { Search, RotateCcw, X, SlidersHorizontal } from 'lucide-react';
import styles from './SidebarFiltros.module.css';

interface SidebarProps {
  filtros: {
    busca: string;
    marca: string;
    categoria: string;
    cambio: string;
    combustivel: string;
    anoMin: string;
    precoMin: string;
    precoMax: string;
  };
  setFiltros: React.Dispatch<React.SetStateAction<any>>;
  marcasDisponiveis: string[];
  limparFiltros: () => void;
}

export default function SidebarFiltros({
  filtros,
  setFiltros,
  marcasDisponiveis,
  limparFiltros,
}: SidebarProps) {
  const [modalAberto, setModalAberto] = useState(false);

  const handleChange = (campo: string, valor: string) => {
    setFiltros((prev: any) => ({ ...prev, [campo]: valor }));
  };

  const removerFiltro = (campo: string, valorPadrao: string = '') => {
    setFiltros((prev: any) => ({ ...prev, [campo]: valorPadrao }));
  };

  const temFiltroAtivo =
    filtros.busca !== '' ||
    filtros.marca !== 'Todas' ||
    filtros.categoria !== 'Todas' ||
    filtros.cambio !== 'Todos' ||
    filtros.combustivel !== 'Todos' ||
    filtros.anoMin !== '' ||
    filtros.precoMin !== '' ||
    filtros.precoMax !== '';

  const anosAtalhos = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];
  const categorias = ['Todas', 'SUV', 'Sedan', 'Hatch', 'Picape'];

  return (
    <>
      {/* RÉGUA HORIZONTAL EXCLUSIVA DO MOBILE (ESTILO WEBMOTORS) */}
      <div className={styles.mobileFilterBar}>
        <div className={styles.scrollContainer}>
          {/* Botão de abrir filtros */}
          <button
            type="button"
            className={`${styles.mobilePill} ${temFiltroAtivo ? styles.mobilePillActive : ''}`}
            onClick={() => setModalAberto(true)}
          >
            <SlidersHorizontal size={14} />
            Filtros {temFiltroAtivo && '•'}
          </button>

          {/* Seletor rápido de marca */}
          <select
            value={filtros.marca}
            onChange={(e) => handleChange('marca', e.target.value)}
            className={styles.mobileSelectPill}
          >
            <option value="Todas">Marca</option>
            {marcasDisponiveis.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {/* Seletor rápido de categoria */}
          <select
            value={filtros.categoria}
            onChange={(e) => handleChange('categoria', e.target.value)}
            className={styles.mobileSelectPill}
          >
            <option value="Todas">Categoria</option>
            {categorias.filter(c => c !== 'Todas').map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Seletor rápido de câmbio */}
          <select
            value={filtros.cambio}
            onChange={(e) => handleChange('cambio', e.target.value)}
            className={styles.mobileSelectPill}
          >
            <option value="Todos">Câmbio</option>
            <option value="Automático">Automático</option>
            <option value="Manual">Manual</option>
          </select>

          {/* Pílulas de Filtros Ativos com X no Mobile */}
          {filtros.marca !== 'Todas' && (
            <span className={styles.mobileActiveTag}>
              {filtros.marca}
              <button onClick={() => removerFiltro('marca', 'Todas')}><X size={12} /></button>
            </span>
          )}

          {filtros.categoria !== 'Todas' && (
            <span className={styles.mobileActiveTag}>
              {filtros.categoria}
              <button onClick={() => removerFiltro('categoria', 'Todas')}><X size={12} /></button>
            </span>
          )}

          {filtros.busca && (
            <span className={styles.mobileActiveTag}>
              "{filtros.busca}"
              <button onClick={() => removerFiltro('busca')}><X size={12} /></button>
            </span>
          )}
        </div>
      </div>

      {/* PAINEL SIDEBAR (DESKTOP FIXO E MOBILE DRAWER/MODAL) */}
      <aside className={`${styles.sidebar} ${modalAberto ? styles.sidebarOpen : ''}`}>
        <div className={styles.header}>
          <h3>Filtros de Busca</h3>
          <div className={styles.headerActions}>
            {temFiltroAtivo && (
              <button onClick={limparFiltros} className={styles.btnLimpar}>
                <RotateCcw size={14} /> Limpar
              </button>
            )}
            <button className={styles.closeMobileBtn} onClick={() => setModalAberto(false)}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PÍLULAS ATIVAS NO DESKTOP */}
        {temFiltroAtivo && (
          <div className={styles.activeFiltersSection}>
            <span className={styles.activeFiltersTitle}>Filtros Selecionados</span>
            <div className={styles.activeBadgesList}>
              {filtros.busca && (
                <span className={styles.activeTag}>
                  "{filtros.busca}"
                  <button onClick={() => removerFiltro('busca')}><X size={12} /></button>
                </span>
              )}
              {filtros.marca !== 'Todas' && (
                <span className={styles.activeTag}>
                  {filtros.marca}
                  <button onClick={() => removerFiltro('marca', 'Todas')}><X size={12} /></button>
                </span>
              )}
              {filtros.categoria !== 'Todas' && (
                <span className={styles.activeTag}>
                  {filtros.categoria}
                  <button onClick={() => removerFiltro('categoria', 'Todas')}><X size={12} /></button>
                </span>
              )}
              {filtros.cambio !== 'Todos' && (
                <span className={styles.activeTag}>
                  {filtros.cambio}
                  <button onClick={() => removerFiltro('cambio', 'Todos')}><X size={12} /></button>
                </span>
              )}
              {filtros.combustivel !== 'Todos' && (
                <span className={styles.activeTag}>
                  {filtros.combustivel}
                  <button onClick={() => removerFiltro('combustivel', 'Todos')}><X size={12} /></button>
                </span>
              )}
              {filtros.anoMin && (
                <span className={styles.activeTag}>
                  {filtros.anoMin}+
                  <button onClick={() => removerFiltro('anoMin')}><X size={12} /></button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Busca por texto */}
        <div className={styles.filterSection}>
          <label>Buscar Modelo/Código</label>
          <div className={styles.searchInput}>
            <Search size={16} color="#64748b" />
            <input
              type="text"
              placeholder="Ex: Toro, HB20, HV-001..."
              value={filtros.busca}
              onChange={(e) => handleChange('busca', e.target.value)}
            />
          </div>
        </div>

        {/* Carroceria */}
        <div className={styles.filterSection}>
          <label>Carroceria</label>
          <div className={styles.categoryGrid}>
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                className={filtros.categoria === cat ? styles.catBtnActive : styles.catBtn}
                onClick={() => handleChange('categoria', cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Marca */}
        <div className={styles.filterSection}>
          <label>Marca</label>
          <select
            value={filtros.marca}
            onChange={(e) => handleChange('marca', e.target.value)}
            className={styles.select}
          >
            <option value="Todas">Todas as Marcas</option>
            {marcasDisponiveis.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Faixa de Preço */}
        <div className={styles.filterSection}>
          <label>Faixa de Preço (R$)</label>
          <div className={styles.rangeInputs}>
            <input
              type="number"
              placeholder="Mínimo"
              value={filtros.precoMin}
              onChange={(e) => handleChange('precoMin', e.target.value)}
            />
            <span>até</span>
            <input
              type="number"
              placeholder="Máximo"
              value={filtros.precoMax}
              onChange={(e) => handleChange('precoMax', e.target.value)}
            />
          </div>
        </div>

        {/* Ano */}
        <div className={styles.filterSection}>
          <label>Ano Mínimo</label>
          <div className={styles.yearPills}>
            {anosAtalhos.map((ano) => (
              <button
                key={ano}
                type="button"
                className={filtros.anoMin === ano ? styles.pillActive : styles.pill}
                onClick={() => handleChange('anoMin', filtros.anoMin === ano ? '' : ano)}
              >
                {ano}+
              </button>
            ))}
          </div>
        </div>

        {/* Câmbio */}
        <div className={styles.filterSection}>
          <label>Câmbio</label>
          <div className={styles.radioGroup}>
            {['Todos', 'Automático', 'Manual'].map((item) => (
              <label key={item} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="cambio"
                  checked={filtros.cambio === item}
                  onChange={() => handleChange('cambio', item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Botão de aplicar no mobile */}
        <button
          className={styles.applyMobileBtn}
          onClick={() => setModalAberto(false)}
        >
          Ver Veículos
        </button>
      </aside>
    </>
  );
}