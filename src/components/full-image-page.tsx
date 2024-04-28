import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0  text-white">
      <div className="flex flex-shrink items-center justify-center ">
        <img
          src={image.url}
          alt={image.name}
          className="w-96 flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-grow flex-col border-l">
        <h2 className="border-b p-2 text-center text-lg">{image.name}</h2>
        <p className="p-2">Uploaded By: {uploaderInfo.fullName}</p>
        <p className="p-2">
          Created At: {new Date(image.createdAt).toLocaleDateString()}
        </p>
        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(image.id);
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
