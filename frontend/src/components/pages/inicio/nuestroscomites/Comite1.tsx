import { cn } from '@/lib/utils';
import Comite, { ComiteProps } from './Comite';

function Graphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 258 258" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('w-full max-h-60', className)}>
      <g clipPath="url(#clip0_16_73)">
        <path d="M224.083 6.75H33.9167C18.9129 6.75 6.75 18.9129 6.75 33.9167V224.083C6.75 239.087 18.9129 251.25 33.9167 251.25H224.083C239.087 251.25 251.25 239.087 251.25 224.083V33.9167C251.25 18.9129 239.087 6.75 224.083 6.75Z" stroke="#FEC00A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.75 88.25H129H251.25" stroke="#FEC00A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M88.25 251.25V88.25" stroke="#FEC00A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export default function Comite1({
  title, path, children,
}: Omit<ComiteProps, 'className'>) {
  return (
    <Comite
      title={title}
      className="row-start-1 xl:row-span-2"
      path={path}
    >
      {children}
      <div className="relative mx-auto mt-auto">
        <Graphic />
        <Graphic className="absolute inset-0 blur-[30px]" />
      </div>
    </Comite>
  );
}
