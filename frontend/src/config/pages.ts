import { FRONTEND_URL } from '@/config/variables';
import api from '@/lib/api';
import { slugify } from '@/lib/utils';
import { CommitteesFields } from '@/types/committees';

interface Section {
  name: string;
  id: string;
}

interface Page {
  name: string;
  path: string;
  sections?: Section[];
  pages?: Page[];
}

interface PageConfig {
  domain: string;
  pages: Page[];
}

const pagesConfigInit = async (): Promise<PageConfig> => {
  // const getImageCategories =
  const getCommittees = await api.getCommittees();

  return (
    {
      domain: FRONTEND_URL,
      pages: [
        {
          name: 'Inicio',
          path: '/',
          sections: [
            {
              name: 'Quienes Somos',
              id: 'inicio-eventos',
            },
            {
              name: 'Nuestros Comites',
              id: 'inicio-comites',
            },
            {
              name: 'Eventos Pasados',
              id: 'inicio-eventos-pasados',
            },
            {
              name: 'Mantente Actualizado',
              id: 'inicio-mantente-actualizado',
            },
          ],
        },
        {
          name: 'Conocenos',
          path: '/conocenos',
          sections: [
            {
              name: 'Quienes Somos',
              id: 'conocenos-quienes-somos',
            },
            {
              name: 'Mision',
              id: 'conocenos-mision',
            },
            {
              name: 'Vision',
              id: 'conocenos-vision',
            },
            {
              name: 'Somos un Equipo',
              id: 'conocenos-somos-un-equipo',
            },
            {
              name: 'Juntos para Lograrlo',
              id: 'conocenos-juntos-para-lograrlo',
            },
          ],
        },
        {
          name: 'Comites',
          path: '/comites',
          pages: getCommittees.map((committee) => ({
            name: committee.name,
            path: `/comites/${slugify(committee[CommitteesFields.NAME])}`,
            sections: [
              {
                name: 'Nuestros Integrantes',
                id: 'comite-integrantes',
              },
              {
                name: 'Directiva',
                id: 'comite-directiva',
              },
              {
                name: 'Miembros',
                id: 'comite-miembros',
              },
              {
                name: 'Voluntarios',
                id: 'comite-voluntarios',
              },
              {
                name: 'Eventos Pasados',
                id: 'comite-eventos-pasados',
              },
              {
                name: 'Eventos Futuros',
                id: 'comite-eventos-futuros',
              },
            ],
          })),
        },
        {
          name: 'Galeria',
          path: '/galeria',
        },
      ],
    }
  );
};

const pagesConfig: PageConfig = await pagesConfigInit();

export default pagesConfig;
