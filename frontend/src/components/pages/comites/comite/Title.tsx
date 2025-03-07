interface TitleProps {
  content: string;
}

export default function Title({ content }: TitleProps) {
  return (
    <h1 className="flex flex-col gap-4 text-6xl lg:text-7xl font-bold">
      <span className="flex">
        Comité de
      </span>
      <span className="text-background bg-primary rounded-lg px-3 py-2">
        {content.slice(10)}
      </span>
    </h1>
  );
}
