import AlbumCardList from "../components/AlbumCardList";

export default {
  title: "folder AlbumCardList",
  component: AlbumCardList
}

const testAlbum = {
  artistName: "The Beatles",
  albumName: "Revolver"
}

const Template = args => <AlbumCardList {...args} />

export const Revolver = Template.bind({})
Revolver.args= {
  albumInfo: testAlbum,
  imageFile: "https://preview.redd.it/t5ajne5o5du61.jpg?width=1140&format=pjpg&auto=webp&s=6c793134503c50a55681f67dcbc6d4b7b4315c6d",
  isStoryBook: true
}