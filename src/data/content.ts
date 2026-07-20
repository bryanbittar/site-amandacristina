// Todo o texto do site vive aqui. Para atualizar qualquer copy, edite este arquivo.

export const site = {
  brandName: 'Amanda Cristina',
  brandSuffix: 'Storymaker',
  tagline: 'Eternizando momentos através de histórias.',
  positioning: 'O instante passa. A história permanece.',
  whatsappNumber: '5567982005322',
  whatsappDisplay: '+55 67 8200-5322',
  whatsappMessage:
    'Olá, Amanda! Conheci seu trabalho pelo site e gostaria de conversar sobre uma cobertura.',
  instagramHandle: '@amanda.storymakercg',
  instagramUrl: 'https://www.instagram.com/amanda.storymakercg',
  location: 'Campo Grande — MS',
}

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const hero = {
  videos: ['/media/hero-video-1.mp4', '/media/hero-video-2.mp4', '/media/hero-video-3.mp4'],
  poster: '/media/hero-poster.jpg',
  titleLines: ['O instante passa.', 'A história permanece.'],
  emphasisWord: 'permanece',
  subtext:
    'Cobertura em tempo real para casamentos, eventos e marcas que desejam transformar momentos reais em conteúdo memorável.',
  identity: ['AMANDA CRISTINA', 'STORYMAKER & VIDEOMAKER MOBILE', 'CAMPO GRANDE — MS'],
  primaryCta: { label: 'Solicitar orçamento' },
  secondaryCta: { label: 'Ver serviços', target: '#trabalhos' },
}

export const statement = {
  lineOne: 'Não se trata apenas de registrar o que aconteceu.',
  lineTwoEmphasis: 'Trata-se de fazer você sentir tudo outra vez.',
  paragraph:
    'Com um olhar atento aos detalhes, aos bastidores e às emoções espontâneas, cada cobertura é construída para preservar a essência do momento.',
}

export interface SelectedWork {
  id: string
  video: string
  layout: 'wide' | 'tall'
}

export const selectedWorks = {
  eyebrow: 'PORTFÓLIO',
  titleLine: 'Histórias',
  emphasisWord: 'Contadas',
  subtext: '',
  items: [
    { id: 'reel-01', video: '/media/portfolio/reel-01.mp4', layout: 'wide' },
    { id: 'reel-02', video: '/media/portfolio/reel-02.mp4', layout: 'tall' },
    { id: 'reel-03', video: '/media/portfolio/reel-03.mp4', layout: 'tall' },
    { id: 'reel-04', video: '/media/portfolio/reel-04.mp4', layout: 'wide' },
    { id: 'reel-05', video: '/media/portfolio/reel-05.mp4', layout: 'tall' },
    { id: 'reel-06', video: '/media/portfolio/reel-06.mp4', layout: 'tall' },
  ] as SelectedWork[],
}

export interface ServiceItem {
  number: string
  title: string
  description: string
  extra: string
  media: string
  poster: string
}

export const portfolioReels = [
  '/media/portfolio/reel-01.mp4',
  '/media/portfolio/reel-02.mp4',
  '/media/portfolio/reel-03.mp4',
  '/media/portfolio/reel-04.mp4',
  '/media/portfolio/reel-05.mp4',
  '/media/portfolio/reel-06.mp4',
]

export const services = {
  title: 'Cada história pede um olhar diferente.',
  cta: 'Conversar sobre meu projeto',
  items: [
    {
      number: '01',
      title: 'Casamentos',
      description:
        'Os bastidores, os encontros, a ansiedade, os detalhes e as emoções que acontecem antes, durante e depois do sim.',
      extra: '',
      media: '/media/casamento-01.mp4',
      poster: '/media/casamento-01-poster.jpg',
    },
    {
      number: '02',
      title: 'Eventos',
      description:
        'Cobertura dinâmica para aniversários, celebrações, formaturas, encontros corporativos e experiências especiais.',
      extra: 'Registro ágil, acompanhando o ritmo real de cada celebração.',
      media: '/media/evento-01.mp4',
      poster: '/media/evento-01-poster.jpg',
    },
    {
      number: '03',
      title: 'Marcas',
      description:
        'Conteúdo estratégico e autêntico para marcas que desejam mostrar sua rotina, seus processos, seus lançamentos e sua personalidade.',
      extra: 'Produção pensada para comunicar identidade com naturalidade.',
      media: '/media/marca-01.mp4',
      poster: '/media/marca-01-poster.jpg',
    },
    {
      number: '04',
      title: 'Conteúdo para Instagram',
      description:
        'Reels, stories, bastidores e vídeos verticais pensados para gerar presença, conexão e consistência.',
      extra: 'Formatos verticais prontos para publicar, com identidade visual coesa.',
      media: '/media/bastidores-vertical.mp4',
      poster: '/media/hero-poster.jpg',
    },
  ] as ServiceItem[],
}

export interface AboutBadge {
  icon: 'camera' | 'heart' | 'bolt' | 'film'
  label: string
}

export const about = {
  portrait: '/media/amanda-retrato.jpg',
  titleLine: 'Mais que registrar.',
  emphasisWord: 'Contar uma história.',
  paragraphs: [
    'Sou Amanda Cristina, Storymaker e Videomaker Mobile em Campo Grande. Acompanho momentos reais com sensibilidade, agilidade e um olhar atento a tudo o que quase ninguém percebe.',
    'Cada cobertura é feita de forma próxima, discreta e personalizada, respeitando a identidade de cada pessoa, evento ou marca.',
  ],
  badges: [
    { icon: 'camera', label: 'Cobertura em tempo real' },
    { icon: 'heart', label: 'Olhar sensível' },
    { icon: 'bolt', label: 'Agilidade nos bastidores' },
    { icon: 'film', label: 'Edição com identidade' },
  ] as AboutBadge[],
  signature: ['Amanda Cristina', 'Storymaker & Videomaker Mobile', 'Campo Grande — MS'],
  cta: 'Conheça meu Instagram',
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const process = {
  title: 'Uma experiência leve, do primeiro contato à entrega.',
  steps: [
    {
      number: '01',
      title: 'Conversa inicial',
      description: 'Entendo o evento, a marca, o momento e o tipo de conteúdo que você precisa.',
    },
    {
      number: '02',
      title: 'Planejamento',
      description:
        'Definimos horários, referências, prioridades e os principais acontecimentos da cobertura.',
    },
    {
      number: '03',
      title: 'Cobertura',
      description: 'Registro os bastidores e os momentos importantes de forma natural e discreta.',
    },
    {
      number: '04',
      title: 'Seleção e edição',
      description: 'O material é organizado e editado de acordo com a proposta definida.',
    },
    {
      number: '05',
      title: 'Entrega',
      description: 'Você recebe os conteúdos preparados para guardar, compartilhar ou publicar.',
    },
  ] as ProcessStep[],
}

export const realtime = {
  video: '/media/bastidores-vertical.mp4',
  title: 'Enquanto o momento acontece, a história já começa a ser contada.',
  paragraph:
    'A cobertura Storymaker permite compartilhar a experiência de forma rápida, espontânea e próxima, sem perder a emoção do que está acontecendo.',
  blocks: [
    {
      mark: '01',
      title: 'BASTIDORES',
      description: 'Momentos que normalmente não aparecem nas produções tradicionais.',
    },
    {
      mark: '02',
      title: 'AGILIDADE',
      description: 'Conteúdo pensado para acompanhar o ritmo do evento.',
    },
    {
      mark: '03',
      title: 'NATURALIDADE',
      description: 'Registros espontâneos, sem interromper a experiência.',
    },
  ],
}

export const testimonials = {
  eyebrow: 'DEPOIMENTOS',
  titleLine: 'Quem viveu,',
  emphasisWord: 'recomenda',
  images: [
    '/media/depoimentos/depoimento-01.jpg',
    '/media/depoimentos/depoimento-02.jpg',
    '/media/depoimentos/depoimento-03.jpg',
    '/media/depoimentos/depoimento-04.jpg',
    '/media/depoimentos/depoimento-05.jpg',
    '/media/depoimentos/depoimento-06.jpg',
    '/media/depoimentos/depoimento-07.jpg',
    '/media/depoimentos/depoimento-08.jpg',
    '/media/depoimentos/depoimento-09.jpg',
    '/media/depoimentos/depoimento-10.jpg',
    '/media/depoimentos/depoimento-11.jpg',
    '/media/depoimentos/depoimento-12.jpg',
    '/media/depoimentos/depoimento-13.jpg',
  ],
}

export const instagram = {
  title: 'Acompanhe as histórias enquanto elas acontecem.',
  paragraph: 'Bastidores, trabalhos recentes e um pouco do olhar por trás de cada produção.',
  images: [
    '/media/instagram-01.jpg',
    '/media/instagram-02.jpg',
    '/media/instagram-03.jpg',
    '/media/instagram-04.jpg',
    '/media/instagram-05.jpg',
    '/media/instagram-06.jpg',
  ],
}

export const finalCta = {
  bgVideo: '/media/final-cta-bg.mp4',
  titleLine: 'Vamos transformar seu momento em algo',
  emphasisWord: 'inesquecível.',
  paragraph: 'Vagas limitadas por mês para garantir qualidade e exclusividade em cada projeto. Entre em contato agora.',
  primaryCta: 'Falar agora no WhatsApp',
}

export const footer = {
  brand: 'AMANDA CRISTINA / STORYMAKER',
  tagline: site.tagline,
  copyright: `© 2026 Amanda Cristina Storymaker. Todos os direitos reservados.`,
  devLine: 'Site desenvolvido por [nome da empresa]',
}
