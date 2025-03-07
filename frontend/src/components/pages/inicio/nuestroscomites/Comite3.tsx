import Comite, { ComiteProps } from './Comite';

export default function Comite3({
  title, path, children,
}: Omit<ComiteProps, 'className'>) {
  return (
    <Comite
      title={title}
      className="row-start-3 sm:row-start-2 sm:col-span-2 xl:row-start-1 xl:col-start-3 "
      path={path}
    >
      {children}
    </Comite>
  );
}
