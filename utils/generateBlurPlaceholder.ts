import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";

const cache = new Map<string, string>();

export default async function getBase64ImageUrl(image: string) {
  let url = cache.get(image);
  if (url) {
    return url;
  }
  const response = await fetch(image);
  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()],
  });

  url = `data:image/jpeg;base64,${Buffer.from(minified).toString("base64")}`;
  cache.set(image, url);
  return url;
}
