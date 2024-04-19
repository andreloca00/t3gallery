import Link from "next/link";

const imgUrls = [
  "https://utfs.io/f/6c954832-7520-4b56-85a3-8780bba73126-tpcmqd.jpg",
  "https://utfs.io/f/121fc93b-832e-4d35-b460-6746408cd97a-tha4rm.jpg",
  "https://utfs.io/f/8196b95c-f315-40f1-a15f-1cd36d11d8d1-jxogc5.jpg",
  "https://utfs.io/f/439392a1-be9c-4fa8-8a71-87d9a2fab315-za1hmz.jpg",
];

const mockImages = imgUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" className="h-auto w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
