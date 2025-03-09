import { cn } from '@/lib/utils';

function Graphic({ className }: { className?: string }) {
  return (
    <svg className={cn('w-full max-w-64', className)} viewBox="0 0 253 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_16_139)">
        <path d="M231.917 73.15C231.917 67.45 227.7 61.75 223.483 58.9L157.071 21.85C154.34 20.4509 151.252 19.7153 148.11 19.7153C144.969 19.7153 141.881 20.4509 139.15 21.85L30.5708 78.85C25.3 80.75 21.0833 86.45 21.0833 92.15V154.85C21.0833 159.6 25.3 166.25 29.5167 169.1L95.9292 206.15C98.6603 207.549 101.748 208.285 104.89 208.285C108.031 208.285 111.119 207.549 113.85 206.15L222.429 149.15C227.7 146.3 231.917 139.65 231.917 134.9V73.15Z" stroke="#45D6E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M105.417 208.05V133L22.1375 86.45" stroke="#45D6E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M105.417 133L230.862 67.45" stroke="#45D6E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M147.583 188.1V111.15" stroke="#45D6E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M189.75 166.25V89.3" stroke="#45D6E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  );
}

export default function BlockGraphic() {
  return (
    <div className="relative ml-auto mt-auto">
      <Graphic />
      <Graphic className="absolute left-0 bottom-0 blur-[30px]" />
    </div>
  );
}
