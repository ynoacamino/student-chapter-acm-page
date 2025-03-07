import Comite, { ComiteProps } from './Comite';

export default function Comite5({
  title, path, children,
}: Omit<ComiteProps, 'className'>) {
  return (
    <Comite
      title={title}
      className="row-start-5 sm:row-start-3 sm:col-span-1 xl:col-span-2"
      path={path}
    >
      {children}
    </Comite>
  );
}
