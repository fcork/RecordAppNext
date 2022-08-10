import { getCoverArt } from "../../lib/spotify";

export default async function handler(req, res) {
  const { artist, year } = req.query
  const artistString = artist.split(' ').join('%20')
  const response = await getCoverArt( artistString, year);
  const newData = await response.json();
  const { url } = newData.albums.items[0].images[0]

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json(url);
}