# Amanda Cristina Storymaker — Site

Site institucional em React + TypeScript + Vite para Amanda Cristina, Storymaker e
Videomaker Mobile em Campo Grande — MS.

## Como rodar o projeto

Pré-requisito: Node.js instalado (versão 18 ou superior).

```bash
npm install       # instala as dependências
npm run dev        # roda o site em ambiente de desenvolvimento (http://localhost:5173)
npm run build      # gera a versão de produção na pasta dist/
npm run preview    # visualiza a versão de produção localmente
```

## Onde editar os textos do site

Todo o conteúdo textual (títulos, parágrafos, botões, itens de menu etc.) está
centralizado em um único arquivo:

```
src/data/content.ts
```

Basta editar os textos entre aspas nesse arquivo — não é necessário mexer nos
componentes React para trocar uma frase, um título ou um rótulo de botão.

## Onde colocar os arquivos de mídia (fotos e vídeos)

Os arquivos reais (vídeos e fotos) devem ser colocados em:

```
public/media/
```

Um arquivo `public/media/README.txt` já está dentro dessa pasta listando,
nome por nome, quais arquivos o site espera encontrar (ex.: `hero-video.mp4`,
`amanda-retrato.jpg`, `casamento-01.mp4`, `instagram-01.jpg` até
`instagram-06.jpg`, etc.). Basta enviar os arquivos com esses nomes exatos
para a pasta que o site passa a exibi-los automaticamente — não é necessário
alterar nenhum código.

## Como atualizar telefone/WhatsApp e Instagram

No arquivo `src/data/content.ts`, no objeto `site` no topo do arquivo:

```ts
export const site = {
  whatsappNumber: '5567982005322',       // número no formato internacional, só dígitos
  whatsappMessage: '...',                 // mensagem pré-preenchida do WhatsApp
  instagramHandle: '@amanda.storymakercg',
  instagramUrl: 'https://www.instagram.com/amanda.storymakercg',
  location: 'Campo Grande — MS',
}
```

O link do botão flutuante de WhatsApp e o botão "Solicitar orçamento" são
gerados automaticamente a partir desses valores.

## Como substituir os 3 depoimentos (testimonials)

No mesmo arquivo `src/data/content.ts`, procure o objeto `testimonials`.
Cada item tem `name`, `project` e `quote`. Basta substituir os textos de
placeholder pelos depoimentos reais autorizados pelos clientes:

```ts
export const testimonials = {
  items: [
    { name: 'Nome do cliente', project: 'Tipo de cobertura', quote: '...' },
    ...
  ],
}
```

Enquanto não forem substituídos, os cartões exibem uma etiqueta discreta
"Espaço reservado — depoimento em breve" para deixar claro (para a Amanda,
não para o visitante) que aquele conteúdo ainda é um placeholder.

## Como atualizar cores e fontes da marca

As cores estão definidas como variáveis CSS no topo do arquivo:

```
src/index.css
```

```css
:root {
  --color-black: #0B0B0A;
  --color-ivory: #F2EFE8;
  --color-white: #FAF9F6;
  --color-warmgray: #AAA69E;
  --color-brown: #3B3029;
  --color-gold: #A68159;
}
```

Alterar esses valores atualiza a cor em todo o site automaticamente. As
fontes (Instrument Serif para títulos, Manrope para textos) são carregadas
via Google Fonts no `index.html` e referenciadas nas variáveis
`--font-display` e `--font-body` no mesmo arquivo `src/index.css`.

## Como atualizar o domínio/SEO

No arquivo `index.html`, o domínio usado nas tags de SEO (canonical, Open
Graph, Twitter Card e no JSON-LD de dados estruturados) está como
placeholder: `https://amandastorymaker.com.br`. Quando o domínio definitivo
estiver definido, substitua todas as ocorrências desse endereço em
`index.html`, além dos arquivos `public/robots.txt` e `public/sitemap.xml`.

## Estrutura de componentes

Cada seção do site é um componente independente em `src/components/`:
`Header`, `Hero`, `Statement`, `SelectedWorks`, `Services`, `About`,
`Process`, `Realtime`, `Testimonials`, `Instagram`, `FinalCTA`, `Footer`,
`VideoModal` e `WhatsAppButton`. Eles são montados, em ordem, em `src/App.tsx`.

## Observações técnicas

- Sem bibliotecas de UI prontas (Bootstrap, Material UI, carrosséis) — todo
  o layout e as animações (framer-motion) foram feitos sob medida.
- Vídeos fora da tela são pausados automaticamente (IntersectionObserver)
  para economizar recursos.
- O modal de vídeo (`VideoModal`) só é carregado quando o visitante clica em
  "assistir história" (lazy loading).
- Animações respeitam a preferência do sistema por "movimento reduzido"
  (`prefers-reduced-motion`).
