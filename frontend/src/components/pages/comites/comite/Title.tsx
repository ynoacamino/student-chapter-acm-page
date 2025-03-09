interface TitleProps {
  content: string;
}

export default function Title({ content }: TitleProps) {
  const committeeName = content.slice(10);

  const secondSpace = committeeName.indexOf(' ', 8);

  return (
    <h1 className="flex flex-col gap-4 text-4xl lg:text-6xl font-bold justify-center lg:justify-start items-center lg:items-start">
      <span className="flex">
        Comité de
      </span>
      <span className="text-background bg-primary rounded-lg px-3 py-2">
        {
          committeeName.length > 14 ? (
            <>
              {committeeName.slice(0, secondSpace)}
              <br />
              {committeeName.slice(secondSpace)}
            </>
          ) : (
            committeeName
          )
        }
      </span>
    </h1>
  );
}
