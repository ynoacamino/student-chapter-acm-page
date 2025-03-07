import Comite, { ComiteProps } from './Comite';

export default function Comite7({
  title, path, children,
}: Omit<ComiteProps, 'className'>) {
  return (
    <Comite
      title={title}
      className=""
      path={path}
    >
      {children}
    </Comite>
  );
}
