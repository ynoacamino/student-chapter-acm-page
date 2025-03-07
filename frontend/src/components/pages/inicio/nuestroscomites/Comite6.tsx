import Comite, { ComiteProps } from './Comite';

export default function Comite6({
  title, path, children,
}: Omit<ComiteProps, 'className'>) {
  return (
    <Comite
      title={title}
      className="row-start-6 sm:row-start-4 sm:col-span-2 xl:row-start-3"
      path={path}
    >
      {children}
    </Comite>
  );
}
