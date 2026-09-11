export interface Carro {
  id: string;
  codigo: string;
  nome: string;
  marca: string;
  ano: string;
  km: string;
  cambio: string;
  combustivel: string;
  preco: number;
  destaque: boolean;
  vendido?: boolean;
  fotos: string[];
  opcionais: string[];
}

// Função auxiliar para gerar 10 fotos por padrão de cada pasta
const gerarFotos = (pasta: string, quantidade: number = 10): string[] => {
  return Array.from({ length: quantidade }, (_, i) => `/carros/${pasta}/${i + 1}.jpg`);
};

export const carrosData: Carro[] = [
  {
    id: "vm-001-hb20s-2015",
    codigo: "VM-001",
    nome: "Hyundai HB20S 1.6",
    marca: "Hyundai",
    ano: "2015/2015",
    km: "129.000",
    cambio: "Automático",
    combustivel: "Flex",
    preco: 57900,
    destaque: true,
    fotos: gerarFotos("vm-001-hb20s-2015", 9),
    opcionais: ["Câmbio Automático", "Financiamento em até 60x", "Cartão até 18x", "Ar Condicionado", "Direção Hidráulica"]
  },
  {
    id: "vm-002-toro-2019",
    codigo: "VM-002",
    nome: "Fiat Toro 2.0 Diesel 4x4 Volcano",
    marca: "Fiat",
    ano: "2018/2019",
    km: "108.000",
    cambio: "Automático",
    combustivel: "Diesel",
    preco: 98000,
    destaque: true,
    fotos: gerarFotos("vm-002-toro-2019", 12),
    opcionais: ["Tração 4x4", "Toda Original", "Sem Retoques", "100% Revisada", "Financiamento até 60x", "Cartão até 18x"]
  },
  {
    id: "vm-003-corolla-2021",
    codigo: "VM-003",
    nome: "Toyota Corolla 2.0 XEi",
    marca: "Toyota",
    ano: "2020/2021",
    km: "118.000",
    cambio: "Automático",
    combustivel: "Flex",
    preco: 123000,
    destaque: true,
    fotos: gerarFotos("vm-003-corolla-2021", 10),
    opcionais: ["Banco em Couro", "IPVA 2026 PAGO", "Central Multimídia", "Finacnio até 60x", "Cartão até 18x"]
  },
  {
    id: "vm-004-creta-2024",
    codigo: "VM-004",
    nome: "Hyundai Creta Action 1.6 2024",
    marca: "Hyundai",
    ano: "2024",
    km: "134.000",
    cambio: "Automático",
    combustivel: "Flex",
    preco: 96900,
    destaque: true,
    fotos: gerarFotos("vm-004-creta-2024", 10),
    opcionais: ["Cautelar 100% aprovado", "Financiamento até 60x", "Cartão até 18x"]
  },
  {
    id: "vm-005-jetta-2023",
    codigo: "VM-005",
    nome: "Volkswagen Jetta GLI 2.0 Turbo",
    marca: "Volkswagen",
    ano: "2023",
    km: "34.000",
    cambio: "Automático",
    combustivel: "Gasolina",
    preco: 189999,
    destaque: false,
    vendido: true,
    fotos: gerarFotos("vm-005-jetta-2023", 10),
    opcionais: ["Teto Solar Panorâmico", "Painel Digital TFT", "Bancos Dianteiros com Ventilação", "Financiamento até 60x", "Cartão até 18x"]
  },
  {
    id: "vm-006-hb20x-2016",
    codigo: "VM-006",
    nome: "Hyundai HB20X 1.6 Premium",
    marca: "Hyundai",
    ano: "2016",
    km: "63.000",
    cambio: "Automático",
    combustivel: "Flex",
    preco: 67900,
    destaque: false,
    fotos: gerarFotos("vm-006-hb20x-2016", 10),
    opcionais: ["Bancos em Couro", "Segundo dono", "Muito Conservado", "Financiamento até 60x", "Cartão até 18x"]
  },
  {
    id: "vm-007-sandero-2017",
    codigo: "VM-007",
    nome: "Renault Sandero 1.6 Expression",
    marca: "Renault",
    ano: "2017/2017",
    km: "95.000",
    cambio: "Manual",
    combustivel: "Flex",
    preco: 44900,
    destaque: false,
    fotos: gerarFotos("vm-007-sandero-2017", 10),
    opcionais: ["Completo", "Motor 1.6", "Central Media NAV", "Excelente Espaço Interno", "Financiamento até 60x", "Cartão até 18x"]
  }
];