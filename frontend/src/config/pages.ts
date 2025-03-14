import { FRONTEND_URL } from '@/config/variables';
import api from '@/lib/api';
import { slugify } from '@/lib/utils';
import { CommitteesFields } from '@/types/committees';
import { ImagesCategories } from '@/types/images';

export interface Section {
  name: string;
  id: string;
}

export interface Page {
  name: string;
  path: string;
  sections?: Section[];
  pages?: Page[];
}

export interface PageConfig {
  domain: string;
  pages: Page[];
}

export enum InicioSections {
  QUIENES_SOMOS_ID = 'inicio-quienes-somos',
  NUESTROS_COMITES_ID = 'inicio-comites',
  EVENTOS_MUY_PROXIMOS_ID = 'inicio-eventos-muy-proximos',
  EVENTOS_PASADOS_ID = 'inicio-eventos-pasados',
  MANTENTE_ACTUALIZADO_ID = 'inicio-mantente-actualizado',
}

export enum ConocenosSections {
  QUIENES_SOMOS_ID = 'conocenos-quienes-somos',
  MISION_ID = 'conocenos-mision',
  VISION_ID = 'conocenos-vision',
  SOMOS_UN_EQUIPO_ID = 'conocenos-somos-un-equipo',
  JUNTOS_PARA_LOGRARLO_ID = 'conocenos-juntos-para-lograrlo',
}

export enum ComitesSections {
  NUESTROS_INTEGRANTES_ID = 'comites-nuestros-integrantes',
  DIRECTIVA_ID = 'comites-directiva',
  MIEMBROS_ID = 'comites-miembros',
  VOLUNTARIOS_ID = 'comites-voluntarios',
  EVENTOS_PASADOS_ID = 'comites-eventos-pasados',
  EVENTOS_FUTUROS_ID = 'comites-eventos-futuros',
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
              id: InicioSections.QUIENES_SOMOS_ID,
            },
            {
              name: 'Nuestros Comites',
              id: InicioSections.NUESTROS_COMITES_ID,
            },
            {
              name: 'Eventos Muy Proximos',
              id: InicioSections.EVENTOS_MUY_PROXIMOS_ID,
            },
            {
              name: 'Eventos Pasados',
              id: InicioSections.EVENTOS_PASADOS_ID,
            },
            {
              name: 'Mantente Actualizado',
              id: InicioSections.MANTENTE_ACTUALIZADO_ID,
            },
          ],
        },
        {
          name: 'Conocenos',
          path: '/conocenos',
          sections: [
            {
              name: 'Quienes Somos',
              id: ConocenosSections.QUIENES_SOMOS_ID,
            },
            {
              name: 'Mision',
              id: ConocenosSections.MISION_ID,
            },
            {
              name: 'Vision',
              id: ConocenosSections.VISION_ID,
            },
            {
              name: 'Somos un Equipo',
              id: ConocenosSections.SOMOS_UN_EQUIPO_ID,
            },
            {
              name: 'Juntos para Lograrlo',
              id: ConocenosSections.JUNTOS_PARA_LOGRARLO_ID,
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
                id: ComitesSections.NUESTROS_INTEGRANTES_ID,
              },
              {
                name: 'Directiva',
                id: ComitesSections.DIRECTIVA_ID,
              },
              {
                name: 'Miembros',
                id: ComitesSections.MIEMBROS_ID,
              },
              {
                name: 'Voluntarios',
                id: ComitesSections.VOLUNTARIOS_ID,
              },
              {
                name: 'Eventos Pasados',
                id: ComitesSections.EVENTOS_PASADOS_ID,
              },
              {
                name: 'Eventos Futuros',
                id: ComitesSections.EVENTOS_FUTUROS_ID,
              },
            ],
          })),
        },
        {
          name: 'Galeria',
          path: '/galeria',
          sections: Object.values(ImagesCategories).map((category) => ({
            name: category,
            id: `${slugify(category)}`,
          })),
        },
      ],
    }
  );
};

const pagesConfig: PageConfig = await pagesConfigInit();

export default pagesConfig;
