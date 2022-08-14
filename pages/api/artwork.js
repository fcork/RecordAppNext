import { getCoverArt } from "../../lib/spotify";

export default async function handler(req, res) {
  const { artist, album } = req.query
  const artistURIString = encodeURIComponent(artist)
  const albumURIString = encodeURIComponent(album)
  // const artistString = artist.split(' ').join('%20')
  // const albumString = album.split(' ').join('%20')
  const response = await getCoverArt( artistURIString, albumURIString);
  const newData = await response.json();
  console.log('ll',newData)
  // const { url } = newData.albums.items[0].images[0]
  const albumOptions = newData.albums.items

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json(albumOptions);
}