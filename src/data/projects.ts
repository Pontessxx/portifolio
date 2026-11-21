import axionGreen from '../Assets/AxionGreen.png'
import fiis from '../Assets/Fiis.png'
import iviInvest from '../Assets/IviInvest.png'
import jat from '../Assets/JAT.png'
import wallet from '../Assets/Wallet.png'

export type Project = {
  title: string
  description: string
  tags: string[]
  image?: string // capa do projeto (import de src/Assets); sem ela, o carrossel usa um degradê e a lista mostra um placeholder
  to?: string // rota interna
  href?: string // link externo (ex.: repositório)
  categories?: string[] // filtros da página Projetos (ver projectFilters)
  status?: string // ex.: 'Em construção'; aparece como etiqueta com um ponto colorido
  actionLabel?: string // texto do botão (padrão: 'GitHub')
}

// Filtros da página Projetos ('Todos' mostra tudo)
export const projectFilters = ['Todos', '.NET', 'Java', 'Python', 'IoT', 'Design']

// Projetos em destaque (aparecem no carrossel da Home)
export const featuredProjects: Project[] = [
  {
    title: 'Axion Green',
    description:
      'Dispositivo IoT com ESP8266 que lê um sensor de poluição e publica via MQTT, sinalizando a qualidade do ar com um LED RGB. Selecionado pela IBM para a FIAP NEXT.',
    tags: ['C/C++', 'MQTT', 'Python'],
    image: axionGreen,
    to: '/projetos',
  },
  {
    title: 'Análise de FIIs',
    description:
      'Regressão logística que classifica 267 fundos imobiliários de 14 setores, com 98% de acurácia no teste, e um filtro que monta carteiras para pequenos aportes.',
    tags: ['Python', 'Machine Learning'],
    image: fiis,
    to: '/projetos',
  },
  {
    title: 'Wallet',
    description:
      'API de finanças pessoais com carteiras e categorias, em ASP.NET Core com PostgreSQL.',
    tags: ['.NET', 'PostgreSQL'],
    image: wallet,
    to: '/projetos',
  },
]

// Todos os projetos (página Projetos)
export const projects: Project[] = [
  {
    title: 'Axion Green',
    description:
      'Dispositivo IoT com ESP8266 que lê um sensor de poluição e publica as leituras em tempo real via MQTT, sinalizando a qualidade do ar com um LED RGB. Uma aplicação em Python (Pandas, NumPy, Matplotlib) usa o método de Newton para prever quando as metas de qualidade do ar seriam atingidas. Selecionado pela IBM, entre 30 equipes, para a FIAP NEXT.',
    tags: ['C/C++', 'ESP8266', 'MQTT', 'Python'],
    categories: ['IoT', 'Python'],
    image: axionGreen,
    href: 'https://github.com/Pontessxx/Esp8266-IBM',
  },
  {
    title: 'Análise de FIIs',
    description:
      'Modelo de regressão logística que classifica fundos imobiliários pelo potencial de retorno, treinado com 267 fundos de 14 setores e 98% de acurácia no teste. Um filtro por dividend yield, preço e P/VP monta carteiras diversificadas para simular aportes pequenos.',
    tags: ['Python', 'Regressão logística'],
    categories: ['Python'],
    image: fiis,
    href: 'https://github.com/Pontessxx/Fundos-imob_projeto-python',
  },
  {
    title: 'Wallet',
    description:
      'API de finanças pessoais com carteiras, transações e categorias. Feita em ASP.NET Core com clean architecture, PostgreSQL e autenticação JWT com refresh token em cookie HttpOnly.',
    tags: ['.NET', 'PostgreSQL', 'JWT', 'Docker'],
    categories: ['.NET'],
    image: wallet,
    href: 'https://github.com/Pontessxx/my-wallet-api',
  },
  {
    title: 'IviInvest',
    description:
      'Projeto de investimento em startups, desenvolvido como case da XP para Quality Design e UX/UI.',
    tags: ['Java', 'UX/UI'],
    categories: ['Java', 'Design'],
    image: iviInvest,
    href: 'https://github.com/Pontessxx/Api_iviinvest',
  },
  {
    title: 'Encurtador de links',
    description:
      'Microsserviço próprio de encurtador de links, para não depender de serviços de terceiros. Fica atrás da API e não é acessado direto pelo cliente.',
    tags: ['.NET', 'PostgreSQL'],
    categories: ['.NET'],
    image: wallet, // mesma ilustração .NET do Wallet
    status: 'Em construção',
  },
  {
    title: 'JAT - Job Application Tracking',
    description:
      'Kanban para acompanhar candidaturas de emprego, com colunas por etapa do processo, drag and drop e tags coloridas com padrões para daltonismo. Já existe um protótipo desktop no Figma.',
    tags: ['Kanban', 'Acessibilidade', 'Figma'],
    categories: ['Design'],
    image: jat,
    status: 'Em construção',
  },
]
