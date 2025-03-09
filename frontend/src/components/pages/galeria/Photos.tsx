import { cn, getOriginalUrl, getThumbnailUrl } from '@/lib/utils';
import { Image, ImagesFields, ImagesRatio } from '@/types/images';

export default function Photos({
  gallery,
}: {
  gallery: Image[];
}) {
  return (
    <div className="w-full">
      <masonry-layout
        gap="20"
        maxcolwidth="600"
        className=""
      >
        {gallery.map((image) => (
          <a
            href={getOriginalUrl(image)}
            data-pswp-width={image[ImagesFields.ORIGINAL_WIDTH]}
            data-pswp-height={image[ImagesFields.ORIGINAL_HEIGHT]}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer"
            className={cn('hover:brightness-80 transition-transform duration-200 ease-in-out mb-5', {
              'aspect-ratio-1-1': image[ImagesFields.RATIO] === ImagesRatio.RATIO_1_1,
              'aspect-ratio-4-3': image[ImagesFields.RATIO] === ImagesRatio.RATIO_4_3,
              'aspect-ratio-3-4': image[ImagesFields.RATIO] === ImagesRatio.RATIO_3_4,
              'aspect-ratio-16-9': image[ImagesFields.RATIO] === ImagesRatio.RATIO_16_9,
              'aspect-ratio-9-16': image[ImagesFields.RATIO] === ImagesRatio.RATIO_9_16,
            })}
          >
            <span className="sr-only">{image[ImagesFields.DESCRIPTION] }</span>
            <img
              src={getThumbnailUrl(image)}
              className="w-full h-auto rounded-md bg-primary/10"
              alt=""
            />
          </a>
        ))}
      </masonry-layout>
    </div>
  );
}
