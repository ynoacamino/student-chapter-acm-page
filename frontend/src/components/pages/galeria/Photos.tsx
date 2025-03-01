export default function Photos({
  photos,
}: {
  photos: { name: string, category: number, src: string }[];
}) {
  const NUM_COLUMNS = 4;
  const columns: { name: string, category: number, src: string }[][] = [];

  for (let i = 0; i < NUM_COLUMNS; i += 1) {
    columns.push([]);
  }

  photos.forEach((photo, index) => {
    const column = index % NUM_COLUMNS;
    columns[column].push(photo);
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {columns.map((column, index) => (
        <div key={index} className="flex flex-col gap-4">
          {column.map((photo, e) => (
            <img
              key={e}
              src={photo.src}
              alt={photo.name}
              className="w-full object-cover rounded-lg"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
