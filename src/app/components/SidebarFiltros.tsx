
'use client';

import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import {
  Search,
  RotateCcw,
  X,
  SlidersHorizontal,
  ChevronDown,
  CarFront,
  Check,
  ArrowRight,
} from 'lucide-react';
import styles from './SidebarFiltros.module.css';

interface Filtros {
  busca: string;
  marca: string;
  categoria: string;
  cambio: string;
  combustivel: string;
  anoMin: string;
  precoMin: string;
  precoMax: string;
}

interface SidebarProps {
  filtros: Filtros;
  setFiltros: Dispatch<SetStateAction<Filtros>>;
  marcasDisponiveis: string[];
  limparFiltros: () => void;
}

const categorias = [
  'Todas',
  'SUV',
  'Sedan',
  'Hatch',
  'Picape',
];

const anosAtalhos = [
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2020',
  '2018',
];

const combustiveis = [
  'Todos',
  'Flex',
  'Gasolina',
  'Diesel',
  'Etanol',
  'Elétrico',
  'Híbrido',
];

const valoresPadrao: Record<keyof Filtros, string> = {
  busca: '',
  marca: 'Todas',
  categoria: 'Todas',
  cambio: 'Todos',
  combustivel: 'Todos',
  anoMin: '',
  precoMin: '',
  precoMax: '',
};

export default function SidebarFiltros({
  filtros,
  setFiltros,
  marcasDisponiveis,
  limparFiltros,
}: SidebarProps) {
  const [modalAberto, setModalAberto] = useState(false);

  const handleChange = (
    campo: keyof Filtros,
    valor: string
  ) => {
    setFiltros((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const removerFiltro = (campo: keyof Filtros) => {
    handleChange(campo, valoresPadrao[campo]);
  };

  const filtrosAtivos = (
    Object.keys(valoresPadrao) as (keyof Filtros)[]
  ).filter(
    (campo) => filtros[campo] !== valoresPadrao[campo]
  );

  const quantidadeFiltros = filtrosAtivos.length;

  const nomeFiltro = (campo: keyof Filtros) => {
    switch (campo) {
      case 'busca':
        return `Busca: ${filtros.busca}`;
      case 'marca':
        return filtros.marca;
      case 'categoria':
        return filtros.categoria;
      case 'cambio':
        return filtros.cambio;
      case 'combustivel':
        return filtros.combustivel;
      case 'anoMin':
        return `A partir de ${filtros.anoMin}`;
      case 'precoMin':
        return `Mín. R$ ${Number(filtros.precoMin).toLocaleString('pt-BR')}`;
      case 'precoMax':
        return `Máx. R$ ${Number(filtros.precoMax).toLocaleString('pt-BR')}`;
    }
  };

  useEffect(() => {
    if (!modalAberto) return;

    const fecharEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalAberto(false);
      }
    };

    window.addEventListener('keydown', fecharEsc);
    return () => window.removeEventListener('keydown', fecharEsc);
  }, [modalAberto]);

  return (
    <>
      {/* CONTROLES RÁPIDOS MOBILE */}
      <div className={styles.mobileFilterBar}>
        <div className={styles.scrollContainer}>
          <button
            type="button"
            className={`${styles.mobilePill} ${
              quantidadeFiltros > 0
                ? styles.mobilePillActive
                : ''
            }`}
            onClick={() => setModalAberto(true)}
          >
            <SlidersHorizontal size={17} />
            Filtros
            {quantidadeFiltros > 0 && (
              <span className={styles.filterCount}>
                {quantidadeFiltros}
              </span>
            )}
          </button>

          <select
            aria-label="Filtrar por marca"
            value={filtros.marca}
            onChange={(e) =>
              handleChange('marca', e.target.value)
            }
            className={styles.mobileSelectPill}
          >
            <option value="Todas">Marca</option>
            {marcasDisponiveis.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>

          <select
            aria-label="Filtrar por carroceria"
            value={filtros.categoria}
            onChange={(e) =>
              handleChange('categoria', e.target.value)
            }
            className={styles.mobileSelectPill}
          >
            <option value="Todas">Carroceria</option>
            {categorias.slice(1).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            aria-label="Filtrar por câmbio"
            value={filtros.cambio}
            onChange={(e) =>
              handleChange('cambio', e.target.value)
            }
            className={styles.mobileSelectPill}
          >
            <option value="Todos">Câmbio</option>
            <option value="Automático">Automático</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {quantidadeFiltros > 0 && (
          <div className={styles.mobileActiveList}>
            {filtrosAtivos.map((campo) => (
              <span key={campo} className={styles.mobileActiveTag}>
                {nomeFiltro(campo)}
                <button
                  type="button"
                  onClick={() => removerFiltro(campo)}
                  aria-label={`Remover filtro ${nomeFiltro(campo)}`}
                >
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* FUNDO DO PAINEL MOBILE */}
      {modalAberto && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Fechar filtros"
          onClick={() => setModalAberto(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`${styles.sidebar} ${
          modalAberto ? styles.sidebarOpen : ''
        }`}
        aria-label="Filtros de veículos"
      >
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.headerIcon}>
              <SlidersHorizontal size={20} />
            </span>

            <div>
              <h3>Filtrar veículos</h3>
              <p>Refine sua busca</p>
            </div>
          </div>

          <button
            type="button"
            className={styles.closeMobileBtn}
            onClick={() => setModalAberto(false)}
            aria-label="Fechar painel"
          >
            <X size={22} />
          </button>
        </div>

        <div className={styles.sidebarBody}>
          {/* FILTROS ATIVOS */}
          {quantidadeFiltros > 0 && (
            <div className={styles.activeFiltersSection}>
              <div className={styles.activeFiltersHeader}>
                <span>
                  Filtros aplicados ({quantidadeFiltros})
                </span>

                <button
                  type="button"
                  className={styles.btnLimpar}
                  onClick={limparFiltros}
                >
                  <RotateCcw size={13} />
                  Limpar
                </button>
              </div>

              <div className={styles.activeBadgesList}>
                {filtrosAtivos.map((campo) => (
                  <span
                    key={campo}
                    className={styles.activeTag}
                  >
                    {nomeFiltro(campo)}

                    <button
                      type="button"
                      onClick={() => removerFiltro(campo)}
                      aria-label={`Remover ${nomeFiltro(campo)}`}
                    >
                      <X size={13} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* BUSCA */}
          <div className={styles.filterSection}>
            <label htmlFor="sidebar-busca">
              Buscar veículo
            </label>

            <div className={styles.searchInput}>
              <Search size={18} />
              <input
                id="sidebar-busca"
                type="search"
                placeholder="Modelo, nome ou código..."
                value={filtros.busca}
                onChange={(e) =>
                  handleChange('busca', e.target.value)
                }
              />
            </div>
          </div>

          {/* CARROCERIA */}
          <div className={styles.filterSection}>
            <div className={styles.sectionTitle}>
              <CarFront size={17} />
              <span>Carroceria</span>
            </div>

            <div className={styles.categoryGrid}>
              {categorias.map((categoria) => {
                const ativo =
                  filtros.categoria === categoria;

                return (
                  <button
                    key={categoria}
                    type="button"
                    className={`${styles.catBtn} ${
                      ativo ? styles.catBtnActive : ''
                    }`}
                    onClick={() =>
                      handleChange('categoria', categoria)
                    }
                    aria-pressed={ativo}
                  >
                    {categoria}
                    {ativo && <Check size={13} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MARCA */}
          <div className={styles.filterSection}>
            <label htmlFor="sidebar-marca">Marca</label>

            <div className={styles.selectWrap}>
              <select
                id="sidebar-marca"
                value={filtros.marca}
                onChange={(e) =>
                  handleChange('marca', e.target.value)
                }
                className={styles.select}
              >
                <option value="Todas">
                  Todas as marcas
                </option>
                {marcasDisponiveis.map((marca) => (
                  <option key={marca} value={marca}>
                    {marca}
                  </option>
                ))}
              </select>

              <ChevronDown size={17} />
            </div>
          </div>

          {/* PREÇO */}
          <div className={styles.filterSection}>
            <label>Faixa de preço</label>

            <div className={styles.rangeInputs}>
              <div className={styles.rangeField}>
                <span>De R$</span>
                <input
                  aria-label="Preço mínimo"
                  type="number"
                  min="0"
                  placeholder="Mínimo"
                  value={filtros.precoMin}
                  onChange={(e) =>
                    handleChange('precoMin', e.target.value)
                  }
                />
              </div>

              <span className={styles.rangeSeparator}>
                —
              </span>

              <div className={styles.rangeField}>
                <span>Até R$</span>
                <input
                  aria-label="Preço máximo"
                  type="number"
                  min="0"
                  placeholder="Máximo"
                  value={filtros.precoMax}
                  onChange={(e) =>
                    handleChange('precoMax', e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* ANO */}
          <div className={styles.filterSection}>
            <label htmlFor="sidebar-ano">
              Ano mínimo
            </label>

            <input
              id="sidebar-ano"
              className={styles.yearInput}
              type="number"
              min="1900"
              max={new Date().getFullYear() + 1}
              placeholder="Ex.: 2022"
              value={filtros.anoMin}
              onChange={(e) =>
                handleChange('anoMin', e.target.value)
              }
            />

            <div className={styles.yearPills}>
              {anosAtalhos.map((ano) => {
                const ativo = filtros.anoMin === ano;

                return (
                  <button
                    key={ano}
                    type="button"
                    className={`${styles.pill} ${
                      ativo ? styles.pillActive : ''
                    }`}
                    onClick={() =>
                      handleChange(
                        'anoMin',
                        ativo ? '' : ano
                      )
                    }
                    aria-pressed={ativo}
                  >
                    {ano}+
                  </button>
                );
              })}
            </div>
          </div>

          {/* CÂMBIO */}
          <div className={styles.filterSection}>
            <span className={styles.fieldLabel}>
              Câmbio
            </span>

            <div className={styles.radioGroup}>
              {['Todos', 'Automático', 'Manual'].map(
                (item) => (
                  <label
                    key={item}
                    className={styles.radioLabel}
                  >
                    <input
                      type="radio"
                      name="cambio"
                      checked={filtros.cambio === item}
                      onChange={() =>
                        handleChange('cambio', item)
                      }
                    />
                    <span>{item}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* COMBUSTÍVEL */}
          <div className={styles.filterSection}>
            <label htmlFor="sidebar-combustivel">
              Combustível
            </label>

            <div className={styles.selectWrap}>
              <select
                id="sidebar-combustivel"
                value={filtros.combustivel}
                onChange={(e) =>
                  handleChange(
                    'combustivel',
                    e.target.value
                  )
                }
                className={styles.select}
              >
                {combustiveis.map((item) => (
                  <option key={item} value={item}>
                    {item === 'Todos'
                      ? 'Todos os combustíveis'
                      : item}
                  </option>
                ))}
              </select>

              <ChevronDown size={17} />
            </div>
          </div>

          {/* AÇÕES */}
          <div className={styles.footerActions}>
            <button
              type="button"
              className={styles.resetBtn}
              onClick={limparFiltros}
            >
              <RotateCcw size={16} />
              Limpar filtros
            </button>

            <button
              type="button"
              className={styles.applyMobileBtn}
              onClick={() => setModalAberto(false)}
            >
              Ver veículos
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
