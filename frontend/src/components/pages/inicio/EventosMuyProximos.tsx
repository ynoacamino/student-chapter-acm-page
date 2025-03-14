import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { InicioSections } from '@/config/pages';
import api from '@/lib/api';
import MesEventosProximos from './MesEventosProximos';

export default async function EventosMuyProximos() {
  const events = await api.getUpcomingEvents();

  return (
    <Section id={InicioSections.EVENTOS_MUY_PROXIMOS_ID}>
      <Title>
        Eventos muy próximos
      </Title>
      <MesEventosProximos events={events} />
    </Section>
  );
}
