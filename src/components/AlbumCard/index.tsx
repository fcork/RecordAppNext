import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Typography
} from "@mui/material/";
import Image from "next/image";

interface Props {
  imageFile: string,
  isStoryBook?: boolean,
  albumInfo: {
    artistName: string,
    albumName: string
  }
}

const AlbumCard: React.FC<Props> = ({ imageFile, isStoryBook, albumInfo }) => {
  return (
    <>
      <Card sx={{ border: "none", boxShadow: "none" }}>
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column"
          }}
        >

          <CardContent sx={{pb: 1.5}}>
            {isStoryBook ? (
              <img
                priority
                src={imageFile}
                height={144}
                width={144}
                alt="StorybookAlt"
              />
            ) : (
              <Image
                sx={{ display: "flex" }}
                priority
                src={imageFile}
                height={144}
                width={144}
                alt="AppAlt"
              />
            )}
          </CardContent>

          <CardContent sx={{pl: 2, pt: 0, pb: .5}}>{albumInfo.artistName}</CardContent>
          <CardContent sx={{pl: 2, pt: 0}}>{albumInfo.albumName}</CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AlbumCard;
