interface TitleProps {
  content: string;
}

export default function Title({ content }: TitleProps) {
  return (
    <h1 className="flex flex-col gap-4 text-4xl lg:text-6xl font-bold justify-center lg:justify-start items-center lg:items-start">
      <span className="flex">
        Comité de
      </span>
      <span className="text-background bg-primary rounded-lg px-3 py-2">
        {content.slice(10)}
      </span>
    </h1>
  );
}
