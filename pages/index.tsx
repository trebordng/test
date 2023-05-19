import Image from "next/image";
import { Inter } from "next/font/google";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import home from "../public/images/home.jpg";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ images }: { images: any }) {
  console.log(images);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Image
        alt="Next.js Conf photo"
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
        placeholder="blur"
        blurDataURL={images.blurDataURL}
        src={images.src}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
      />
       <Image
        alt="Next.js Conf photo"
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
        placeholder="blur"
        blurDataURL={images.blurDataURL}
        src={images.src}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
      /> <Image
      alt="Next.js Conf photo"
      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
      style={{ transform: "translate3d(0, 0, 0)" }}
      placeholder="blur"
      blurDataURL={images.blurDataURL}
      src={images.src}
      width={720}
      height={480}
      sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
    /> <Image
    alt="Next.js Conf photo"
    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
    style={{ transform: "translate3d(0, 0, 0)" }}
    placeholder="blur"
    blurDataURL={images.blurDataURL}
    src={images.src}
    width={720}
    height={480}
    sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
  /> <Image
  alt="Next.js Conf photo"
  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
  style={{ transform: "translate3d(0, 0, 0)" }}
  placeholder="blur"
  blurDataURL={images.blurDataURL}
  src={images.src}
  width={720}
  height={480}
  sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
/> <Image
        alt="Next.js Conf photo"
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
        placeholder="blur"
        blurDataURL={images.blurDataURL}
        src={images.src}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
      /> <Image
      alt="Next.js Conf photo"
      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
      style={{ transform: "translate3d(0, 0, 0)" }}
      placeholder="blur"
      blurDataURL={images.blurDataURL}
      src={images.src}
      width={720}
      height={480}
      sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
    /> <Image
    alt="Next.js Conf photo"
    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
    style={{ transform: "translate3d(0, 0, 0)" }}
    placeholder="blur"
    blurDataURL={images.blurDataURL}
    src={images.src}
    width={720}
    height={480}
    sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
  /> <Image
  alt="Next.js Conf photo"
  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
  style={{ transform: "translate3d(0, 0, 0)" }}
  placeholder="blur"
  blurDataURL={images.blurDataURL}
  src={images.src}
  width={720}
  height={480}
  sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
/> <Image
        alt="Next.js Conf photo"
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
        placeholder="blur"
        blurDataURL={images.blurDataURL}
        src={images.src}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
      />
    </main>
  );
}

export async function getStaticProps() {
  // const url = await getBase64ImageUrl("home.jpg");

  return {
    props: {
      images: home,
    },
  };
}
