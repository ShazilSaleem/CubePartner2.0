import Image from "next/image";
import { cn } from "@/lib/cn";

type OfficePhotosProps = {
  images: { src: string; alt: string }[];
};

/** Three narrow, desaturated portrait photos with the middle one stepped down, from the page heroes. */
export function OfficePhotos({ images }: OfficePhotosProps) {
  return (
    <div className="flex items-start gap-px">
      {images.map((image, i) => (
        <div
          key={image.src}
          className={cn("relative h-[200px] flex-1 overflow-hidden sm:h-[288px]", i === 1 && "mt-8")}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 200px, 33vw"
            className="object-cover grayscale transition-[filter,transform] duration-700 ease-out-expo hover:scale-[1.04] hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
}
