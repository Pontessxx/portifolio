# Henrique Portfólio

Meu portfólio pessoal: projetos, experiência e contato. Feito do zero, com design e código próprios.

Sou desenvolvedor backend .NET e também trabalho com React e TypeScript.

## Páginas

- **Home:** apresentação, projetos em destaque (carrossel), sobre, experiência e contato.
- **Projetos:** lista completa com filtros por tecnologia.
- **404:** tela para endereços que não existem.

## Tecnologias

- [React](https://react.dev) 19 e [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [React Router](https://reactrouter.com)
- [Sass](https://sass-lang.com) (SCSS com BEM)
- [lucide-react](https://lucide.dev) para ícones

## Como rodar

Precisa do [Node.js](https://nodejs.org) instalado.

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento (http://localhost:5173)
npm run build   # build de produção, na pasta dist
npm run preview # abre o build localmente
npm run lint    # verifica o código com o ESLint
```

## Estrutura

Os componentes seguem o Atomic Design:

```
src/
├── components/
│   ├── atoms/        # menores peças: PillLink, Tag, Circle, SectionLabel...
│   ├── molecules/    # combinações de atoms: TagList, ProjectCard, SocialLinks...
│   ├── organisms/    # blocos de página: Hero, About, Experience, Contact...
│   └── templates/    # MainLayout (header, conteúdo e rodapé)
├── pages/            # Home, Projetos, NotFound
├── data/             # conteúdo do site (projetos, experiência, links, contato)
├── styles/           # global.scss (variáveis) e mixins
├── hooks/            # useTheme (tema claro/escuro)
└── Assets/           # imagens dos projetos
```

O conteúdo vem de `src/data`: para trocar um texto, um link ou adicionar um projeto, não é preciso mexer nos componentes.

## Padrões de design

Todas as medidas e fontes vêm de variáveis em `src/styles/global.scss`:

- **Espaçamentos:** escala de 8px, de `--space-2xs` (4px) a `--space-7xl` (128px).
- **Fontes:** `--font-size-xs` a `--font-size-xl`, mais os tamanhos do título animado (`--font-size-tech-*`).
- **Tema:** claro e escuro, pelas variáveis de cor (`--bg`, `--fg`, `--g1`, `--line`...). A duração da troca fica em `--theme-duration`.

## Licença

Copyright (c) 2026 Henrique Pontes Oliveira. Todos os direitos reservados.

O código pode ser visualizado, mas não pode ser copiado, modificado ou reutilizado sem autorização por escrito. Veja o arquivo [LICENSE](./LICENSE).

## Contato

- GitHub: [Pontessxx](https://github.com/Pontessxx)
- LinkedIn: [henrique-pontes-oliveira](https://linkedin.com/in/henrique-pontes-oliveira)
