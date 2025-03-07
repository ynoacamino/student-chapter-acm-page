import { Metadata } from 'next';

const metadataConfig: Metadata = {
  title: 'ACM UNSA | Capítulo Estudiantil',
  description: 'Página web oficial del capítulo estudiantil de la ACM de la Universidad Nacional de San Agustín.',
  authors: [
    { name: 'Yenaro Joel Noa Camino', url: 'https://github.com/ynoacamino' },
    { name: 'Luis Gustavo Sequeiros Condori', url: 'https://github.com/gustadev24' },
  ],
  creator: 'Yenaro Joel Noa Camino and Luis Gustavo Sequeiros Condori',
  publisher: 'ACM UNSA | Capítulo Estudiantil',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://acm.ynoacamino.site/',
    title: 'ACM UNSA | Capítulo Estudiantil',
    description: 'Página web oficial del capítulo estudiantil de la ACM de la Universidad Nacional de San Agustín.',
    images: [
      {
        url: 'https://ynoa-uploader.ynoacamino.site/uploads/1741376258_2025-03-07_14-36.webp',
        width: 700,
        height: 398,
        alt: 'ACM UNSA | Capítulo Estudiantil',
      },
    ],
    siteName: 'ACM UNSA',
  },
  twitter: {
    creator: '@ynoacamino @gustadev24',
    site: 'https://acm.ynoacamino.site',
    description: 'Página web oficial del capítulo estudiantil de la ACM de la Universidad Nacional de San Agustín.',
    images: [
      {
        url: 'https://ynoa-uploader.ynoacamino.site/uploads/1741376258_2025-03-07_14-36.webp',
        width: 700,
        height: 398,
        alt: 'ACM UNSA | Capítulo Estudiantil',
      },
    ],
    title: 'ACM UNSA | Capítulo Estudiantil',
  },
  metadataBase: new URL('https://acm.ynoacamino.site/'),
};

export default metadataConfig;
