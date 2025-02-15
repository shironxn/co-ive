import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";

export default async function Gallery() {
  const galleryDir = path.join(process.cwd(), "/public/gallery");
  const images = await fs.readdir(galleryDir);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[10px] px-4">
      {images.map((item, index) => {
        const spanSize = Math.floor(Math.random() * 10) + 15;

        return (
          <div
            key={item}
            className="relative rounded-lg shadow-md overflow-hidden"
            style={{ gridRowEnd: `span ${spanSize}` }}
          >
            <Image
              src={`/gallery/${item}`}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index < 3}
            />
          </div>
        );
      })}
    </div>
  );
}
