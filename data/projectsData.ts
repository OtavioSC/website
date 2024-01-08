type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'Learn4Elixir',
      description: `Open source project to teach the Brazilian programming language Elixir with 4 pull requests.`,
      imgSrc: '/static/images/learn4elixir.png',
      href: 'https://github.com/Universidade-Livre/Learn4Elixir',
    },
  ],
  pt: [
    {
      title: 'Learn4Elixir',
      description: `Projeto open source para ensinar a linguagem de programação brasileira Elixir com 4 pull requests`,
      imgSrc: '/static/images/learn4elixir.png',
      href: 'https://github.com/Universidade-Livre/Learn4Elixir',
    },
  ],
}

export default projectsData
