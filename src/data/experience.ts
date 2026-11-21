export type ExperienceEntry = {
  id: string
  year: string
  period: string
  title: string
  organization: string
  highlights: string[]
  current?: boolean // o ano fica em destaque (cor cheia)
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'casas-bahia',
    year: '2026',
    period: 'mar 2026 — atual',
    title: 'Estágio em Engenharia de Software',
    organization: 'Grupo Casas Bahia',
    current: true,
    highlights: [
      'Squad de Onboarding: 6 microsserviços, 5 funcionalidades e 4 correções em C# e .NET',
      'Squad de CRM: 8 microsserviços, com linguagens como C# .NET, TypeScript, React e Node.js',
      'Módulo de custos e orçamentos (.NET 10 e TypeScript) que economiza 3 a 4 horas por dia',
      'CI/CD github actions com Backstage em repositórios e segredos no Azure Key Vault',
      'Jira e Confluence para gestão de tarefas, documentação e reuniões diárias'
    ],
  },
  {
    id: 'bradesco',
    year: '2024',
    period: 'jan 2024 — jan 2026',
    title: 'Estágio em Engenharia de Infraestrutura',
    organization: 'Banco Bradesco S.A.',
    highlights: [
      'Algoritmo em Python que cortou a busca de OS de fibra óptica de 5 para 1 minuto (80%)',
      'ServiceNow e IMVision Comscope no cabeamento lógico, com automações em Python e SQL',
      'Atuação em projetos de infraestrutura, com foco em cabeamento lógico estruturado',
    ],
  },
  {
    id: 'fiap',
    year: '2023',
    period: 'jan 2023 — dez 2026',
    title: 'Bacharelado em Engenharia de Software',
    organization: 'FIAP',
    highlights: [
      'Axion Green: selecionado pela IBM, entre 30 equipes, para a FIAP NEXT',
      'Ivinvest: projeto de investimento em startups, case da XP para Quality Desing e UX/UI',
      'Certificações em Cloud (Solution Architect) e Big Data & Analytics',
      'Certificações pela FIAP e Alura'
    ],
  },
]