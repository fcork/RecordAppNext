import AlbumCard from "../components/AlbumCard";

export default {
  title: "folder AlbumCard",
  component: AlbumCard
}

const testAlbum = {
  artistName: "The Beatles",
  albumName: "Revolver"
}

const Template = args => <AlbumCard {...args} />

export const Revolver = Template.bind({})
Revolver.args= {
  albumInfo: testAlbum,
  imageFile: "https://preview.redd.it/t5ajne5o5du61.jpg?width=1140&format=pjpg&auto=webp&s=6c793134503c50a55681f67dcbc6d4b7b4315c6d",
  isStoryBook: true
}
{/* <AlbumCard albumInfo={testAlbum} imageFile="https://preview.redd.it/t5ajne5o5du61.jpg?width=1140&format=pjpg&auto=webp&s=6c793134503c50a55681f67dcbc6d4b7b4315c6d" isStoryBook/> */}