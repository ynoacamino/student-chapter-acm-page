import { cn } from '@/lib/utils';
import Comite from './Comite';

function Graphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('w-full', className)}>
      <path d="M258.083 40.75H67.9167C52.9129 40.75 40.75 52.9129 40.75 67.9167V258.083C40.75 273.087 52.9129 285.25 67.9167 285.25H258.083C273.087 285.25 285.25 273.087 285.25 258.083V67.9167C285.25 52.9129 273.087 40.75 258.083 40.75Z" stroke="#FEC00A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40.75 122.25H285.25" stroke="#FEC00A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M122.25 285.25V122.25" stroke="#FEC00A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
}

export default function Comite1() {
  return (
    <Comite
      title="Comité de Desarrollo Web 1"
      className="row-start-1 xl:row-span-2"
    >
      Universidad Nacional de San Agustin
      de Arequipa lorem a niversidad Nacional de San Agustin de Arequipa lorem.
      <div className="relative mx-auto mb-auto mt-24">
        <Graphic />
        <Graphic className="absolute inset-0 blur-[30px]" />
      </div>
    </Comite>
  );
}
