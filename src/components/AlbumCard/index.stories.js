import React from "react";
import { storiesOf } from "@storybook/react";
import AlbumCard from "../AlbumCard";
// import imageFilePath from '../../../publicimages/PetSoundsCover.jpg'
// import Image from 'next/image'

// const image = {
//   src: imageFilePath,
//   alt: 'my image',
// };

const currentAlbum = {
  artistName: "The Beach Boys",
  albumName: "Pet Sounds"
}

storiesOf("AlbumCard", module).add("simple", () => {
  return (
    <>
      <AlbumCard
        isStoryBook
        albumInfo={currentAlbum}
        imageFile="https://preview.redd.it/t5ajne5o5du61.jpg?width=1140&format=pjpg&auto=webp&s=6c793134503c50a55681f67dcbc6d4b7b4315c6d"
      />

      <img
        src="/images/PetSoundsCover.jpg"
        height={144}
        width={144}
        alt="Pai"
      />
    </>
  );
});
