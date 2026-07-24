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
  poster: string
  layout: 'wide' | 'tall'
}

export const selectedWorks = {
  eyebrow: 'PORTFÓLIO',
  titleLine: 'Histórias',
  emphasisWord: 'Contadas',
  subtext: '',
  items: [
    { id: 'casal', video: '/media/portfolio/casal.mp4', poster: '/media/portfolio/casal-poster.jpg', layout: 'wide' },
    { id: 'jantar-noivado', video: '/media/portfolio/jantar-noivado.mp4', poster: '/media/portfolio/jantar-noivado-poster.jpg', layout: 'tall' },
    { id: 'madrinhas', video: '/media/portfolio/madrinhas.mp4', poster: '/media/portfolio/madrinhas-poster.jpg', layout: 'tall' },
    { id: 'making-of-nathalia', video: '/media/portfolio/making-of-nathalia.mp4', poster: '/media/portfolio/making-of-nathalia-poster.jpg', layout: 'wide' },
    { id: 'reel-05', video: '/media/portfolio/reel-05.mp4', poster: '/media/portfolio/reel-05-poster.jpg', layout: 'tall' },
    { id: 'noivos', video: '/media/portfolio/noivos.mp4', poster: '/media/portfolio/noivos-poster.jpg', layout: 'tall' },
    { id: 'quinze-anos', video: '/media/portfolio/quinze-anos.mp4', poster: '/media/portfolio/quinze-anos-poster.jpg', layout: 'tall' },
    { id: 'noivado', video: '/media/portfolio/noivado.mp4', poster: '/media/portfolio/noivado-poster.jpg', layout: 'tall' },
    { id: 'batizado-joaquim', video: '/media/portfolio/batizado-joaquim.mp4', poster: '/media/portfolio/batizado-joaquim-poster.jpg', layout: 'wide' },
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

export const portfolioReels = selectedWorks.items.map((item) => ({
  video: item.video,
  poster: item.poster,
}))

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
      title: 'Casamento civil',
      description: 'Cobertura íntima e sensível do momento em que a união se torna oficial.',
      extra: '',
      media: '/media/casamento-01.mp4',
      poster: '/media/casamento-01-poster.jpg',
    },
    {
      number: '03',
      title: 'Noivado',
      description: 'O registro do início dessa nova história, com leveza e espontaneidade.',
      extra: '',
      media: '/media/evento-01.mp4',
      poster: '/media/evento-01-poster.jpg',
    },
    {
      number: '04',
      title: '15 anos',
      description:
        'O dia em que uma menina se torna mulher, com todo brilho, emoção e sonhos de uma nova fase guardados para sempre.',
      extra: '',
      media: '/media/evento-01.mp4',
      poster: '/media/evento-01-poster.jpg',
    },
    {
      number: '05',
      title: 'Batizados',
      description: 'A emoção em família registrada de forma delicada e verdadeira.',
      extra: '',
      media: '/media/marca-01.mp4',
      poster: '/media/marca-01-poster.jpg',
    },
    {
      number: '06',
      title: 'Chá de casa nova',
      description: 'A alegria de um novo lar, registrada com carinho e espontaneidade.',
      extra: '',
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
  titleLine: 'Quem',
  emphasisWord: 'sou eu',
  paragraphs: [
    'Prazer, eu sou Amanda, Storymaker especializada em casamentos, 15 anos e celebrações especiais.',
    'Minha história nessa profissão começou de um jeito muito pessoal.',
    'Em outubro de 2024, minha mãe se casou e, depois do grande dia, ficou com a sensação de que o vídeo não conseguiu transmitir toda a emoção que ela viveu. Aquilo me fez perceber o quanto um registro pode influenciar a forma como lembramos dos momentos mais importantes da nossa vida.',
    'Foi essa experiência que despertou em mim o desejo de fazer diferente.',
    'Estudei, me preparei e, em julho de 2025, registrei meu primeiro casamento. Desde então, venho aperfeiçoando meu olhar para contar histórias de forma leve, espontânea e verdadeira.',
    'Mais do que gravar vídeos, meu compromisso é fazer com que cada casal e cada debutante revivam a emoção do seu dia exatamente como ela aconteceu.',
    'Meu diferencial está na proximidade com cada cliente, na atenção aos detalhes e na cobertura em tempo real, registrando cada sorriso, cada abraço e cada momento que muitas vezes passa despercebido. Não acredito em limitar memórias: quanto mais momentos especiais forem registrados, melhor será a lembrança que ficará para sempre.',
    'Porque, no fim das contas, o que eu entrego não são apenas vídeos.',
    'São lembranças que poderão ser revividas por muitos anos.',
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
