export type MasonryProps = React.HTMLAttributes<HTMLElement> & {
  gap?: string;
  maxcolwidth?: string;
};

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'masonry-layout': MasonryProps & React.DOMAttributes<HTMLElement>;
      }
    }
  }
}

export interface Photo {
  name: string,
  category: number,
  src: string,
  width: number,
  height: number
}
