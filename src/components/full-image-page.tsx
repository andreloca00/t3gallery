import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center text-white">
      <div className="flex-shrink">
        <img src={image.url} alt={image.name} className="w-96 object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col">
        <h2 className="text-xl font-bold">{image.name}</h2>
      </div>
    </div>
  );
}
