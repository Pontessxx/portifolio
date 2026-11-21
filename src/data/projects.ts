export type Project = {
  title: string
  description: string
  tags: string[]
  image?: string // capa do card (ex.: '/projects/axion-green.jpg' dentro de public/); sem ela, usa um degradê
  to?: string // rota interna
  href?: string // link externo (ex.: repositório)
}

// Projetos em destaque (aparecem no carrossel da Home)
export const featuredProjects: Project[] = [
  {
    title: 'Axion Green',
    description:
      'Dispositivo IoT com ESP8266 que lê um sensor de poluição e publica via MQTT, sinalizando a qualidade do ar com um LED RGB. Selecionado pela IBM para a FIAP NEXT.',
    tags: ['C/C++', 'MQTT', 'Python'],
    to: '/projetos',
  },
  {
    title: 'Análise de FIIs',
    description:
      'Regressão logística que classifica 267 fundos imobiliários de 14 setores, com 98% de acurácia no teste, e um filtro que monta carteiras para pequenos aportes.',
    tags: ['Python', 'Machine Learning'],
    to: '/projetos',
  },
  {
    title: 'Wallet',
    description:
      'App de finanças pessoais com carteiras e categorias. API em ASP.NET Core com PostgreSQL e frontend em React e TypeScript.',
    tags: ['.NET', 'PostgreSQL', 'React'],
    to: '/projetos',
  },
]
