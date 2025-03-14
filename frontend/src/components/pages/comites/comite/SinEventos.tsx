interface SinEventosProps {
  type: 'proximo' | 'pasado'
}

export default function SinEventos({
  type,
}: SinEventosProps) {
  return (
    <div className="flex flex-col items-center gap-7 mt-6">
      <h4 className="text-2xl font-semibold">
        {
          type === 'proximo'
            ? 'Aún no hay eventos programados'
            : 'Aún no hay eventos registrados'
        }
      </h4>
      <h5>
        {
          type === 'proximo'
            ? '¡Pronto tendremos más actividades para la comunidad!'
            : 'Revisa más tarde para conocer nuestras actividades anteriores.'
        }
      </h5>
    </div>
  );
}
