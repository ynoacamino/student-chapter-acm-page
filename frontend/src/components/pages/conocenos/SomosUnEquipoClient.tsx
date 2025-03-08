import SomosUnEquipo from '@/components/pages/conocenos/SomosUnEquipo';
import api from '@/lib/api';
import { Image, ImageCarousel } from '@/types/images';

export default async function SomosUnEquipoClient() {
  const images: (Image & { rotate: number })[] = (await api.get_4_3_Images())
    .map((i) => ({ ...i, rotate: Math.random() * 10 - 5 }));

  const photos: ImageCarousel[] = images.concat(images).map((i) => ({
    ...i,
    uuid: crypto.randomUUID(),
  }));

  return (
    <SomosUnEquipo photos={photos} />
  );
}
