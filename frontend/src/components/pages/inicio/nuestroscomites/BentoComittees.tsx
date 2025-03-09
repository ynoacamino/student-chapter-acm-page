import { cn, slugify } from '@/lib/utils';
import api from '@/lib/api';
import Comite from './Comite';
import SquareGraphic from './SquareGraphic';
import BlockGraphic from './BlockGraphic';
import GamepadGraphic from './GamepadGraphic';

const ComittesClassNames = [
  'sm:row-span-2 xl:row-span-3 xl:row-start-1', // Desarrollo web
  'sm:row-start-3 sm:col-span-2 xl:row-start-1 pb-0 pr-0', // Videojuegos
  'xl:row-span-2 xl:col-start-2 xl:row-start-2', // Ciberseguridad
  'xl:col-start-3 xl:row-start-2', // Programación competitiva
  'sm:col-start-2 sm:row-span-2 xl:row-start-3 xl:col-start-3 pb-0', // Desarrollo de software
  'sm:row-start-4', // Marketing
  'xl:col-start-2', // IA
];

export default async function BentoComittees() {
  const comittees = await api.getCommittees();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-[repeat(auto-fit,1fr)] gap-5">
      {
        comittees.map(({ id, name, excerpt }, index) => (
          <Comite
            key={id}
            name={name}
            path={slugify(name)}
            className={cn(ComittesClassNames.at(index) || '')}
          >
            {excerpt}
            {
              index === 0 && <SquareGraphic />
            }
            {
              index === 1 && <GamepadGraphic />
            }
            {
              index === 4 && <BlockGraphic />
            }
          </Comite>
        ))
      }
    </div>
  );
}
