import { Photo } from '@/types/gallery';

export default function Photos({
  photos,
}: {
  photos: Photo[];
}) {
  return (
    <div className="w-full">
      <masonry-layout
        gap="20"
        maxcolwidth="600"
        className="lg:mx-auto mx-4"
      >
        {photos.map((photo) => (
          <a
            href={photo.src}
            data-pswp-width={photo.width}
            data-pswp-height={photo.height}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer"
            className="hover:brightness-80 transition-transform duration-200 ease-in-out mb-5"
          >
            <span className="sr-only">{photo.name }</span>
            <img
              src={photo.src}
              className="w-full h-auto rounded-md bg-web-gray-100"
              alt=""
            />
          </a>
        ))}
      </masonry-layout>
    </div>
  );
}
