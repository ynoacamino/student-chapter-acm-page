import { cn } from '@/lib/utils';
import Comite, { ComiteProps } from './Comite';

function Graphic({ className }: { className?: string }) {
  return (
    <svg className={cn('w-full max-w-md ml-auto', className)} viewBox="0 150 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_16_101)" filter="url(#filter0_d_16_101)">
        <path d="M169.333 261H238.333" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M204.333 227V296" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M325.333 279H326.333" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M412.533 157H134.133C114.914 157 99.3333 172.595 99.3333 191.833V331.167C99.3333 350.405 114.914 366 134.133 366H412.533C431.753 366 447.333 350.405 447.333 331.167V191.833C447.333 172.595 431.753 157 412.533 157Z" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M169.333 261H238.333" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M204.333 227V296" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M325.333 279H326.333" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M412.533 157H134.133C114.914 157 99.3333 172.595 99.3333 191.833V331.167C99.3333 350.405 114.914 366 134.133 366H412.533C431.753 366 447.333 350.405 447.333 331.167V191.833C447.333 172.595 431.753 157 412.533 157Z" stroke="#F44236" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  );
}

export default function Comite4({
  title, path, children,
}: Omit<ComiteProps, 'className'>) {
  return (
    <Comite
      title={title}
      className="row-start-4 sm:row-start-3 xl:row-start-2 xl:col-start-2 xl:col-span-3 pb-0 pr-0"
      path={path}
    >
      {children}
      <div className="relative">
        <Graphic />
        <Graphic className="absolute right-0 bottom-0 blur-[30px]" />
      </div>
    </Comite>
  );
}
