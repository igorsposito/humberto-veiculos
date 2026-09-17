export interface Carro {
  id: string;
  codigo: string;
  nome: string;
  marca: string;
  categoria: 'SUV' | 'Sedan' | 'Hatch' | 'Picape';
  ano: string;
  km: string;
  cambio: string;
  combustivel: string;
  preco: number;
  destaque: boolean;
  vendido?: boolean;
  imagem: string; // Para compatibilidade com o CarCard
  fotos: string[];
  opcionais: string[];
}

// Função auxiliar para gerar fotos por padrão de cada pasta
const gerarFotos = (pasta: string, quantidade: number = 5): string[] => {
  return Array.from({ length: quantidade }, (_, i) => `/carros/${pasta}/${i + 1}.jpg`);
};

export const carrosData: Carro[] = [
  {
    id: "hv-001-hb20-2017",
    codigo: "HV-001",
    nome: "Hyundai HB20 1.0 Comfort Plus",
    marca: "Hyundai",
    categoria: "Hatch",
    ano: "2017",
    km: "174.170",
    cambio: "Manual",
    combustivel: "Flex",
    preco: 48900,
    destaque: true,
    imagem: "/carros/hv-001-hb20-2017/1.jpg",
    fotos: gerarFotos("hv-001-hb20-2017", 5),
    opcionais: [
      "Único dono",
      "Motor 1.0 Flex",
      "Vistoria aprovada",
      "Ar Condicionado",
      "Direção Hidráulica",
      "Excelente opção para o dia a dia"
    ]
  },
  {
    id: "hv-002-ecosport-2019",
    codigo: "HV-002",
    nome: "Ford EcoSport Freestyle 1.5",
    marca: "Ford",
    categoria: "SUV",
    ano: "2019",
    km: "92.470",
    cambio: "Manual",
    combustivel: "Flex",
    preco: 69900,
    destaque: true,
    imagem: "/carros/hv-002-ecosport-2019/1.jpg",
    fotos: gerarFotos("hv-002-ecosport-2019", 8),
    opcionais: [
      "Versão Freestyle",
      "Motor 1.5",
      "Revisada",
      "Central Multimídia",
      "Rodas de Liga Leve",
      "Ótimo para cidade e viagem"
    ]
  },
  {
    id: "hv-003-idea-2013",
    codigo: "HV-003",
    nome: "Fiat Idea Adventure 1.8",
    marca: "Fiat",
    categoria: "Hatch",
    ano: "2013",
    km: "170.000",
    cambio: "Manual",
    combustivel: "Flex",
    preco: 39900,
    destaque: true,
    imagem: "/carros/hv-003-idea-2013/1.jpg",
    fotos: gerarFotos("hv-003-idea-2013", 7),
    opcionais: [
      "Versão Adventure",
      "Motor 1.8",
      "Excelente espaço interno",
      "Ótima opção para família",
      "Ar Condicionado",
      "Único dono",
      "Direção Hidráulica"
    ]
  },
  {
    id: "hv-004-onix-2025",
    codigo: "HV-004",
    nome: "Chevrolet Onix Premier",
    marca: "Chevrolet",
    categoria: "Hatch",
    ano: "2024/2025",
    km: "43.463",
    cambio: "Automático",
    combustivel: "Flex",
    preco: 92900,
    destaque: true,
    imagem: "/carros/hv-004-onix-2025/1.jpg",
    fotos: gerarFotos("hv-004-onix-2025", 1),
    opcionais: [
      "Único dono",
      "Versão Premier (Mais completa)",
      "Bancos em Couro",
      "Central Multimídia MyLink",
      "Sensor de Estacionamento",
      "Câmera de ré"
    ]
  }
];