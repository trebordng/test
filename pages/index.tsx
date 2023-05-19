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
        placeholder="blur"
        blurDataURL={images.blurDataURL}
        src={images.src}
        width={500}
        height={500}
       
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
