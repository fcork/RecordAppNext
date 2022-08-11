import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography
} from "@mui/material/";
import Image from "next/image";

interface Props {
  imageFile: string;
  isStoryBook?: boolean;
  albumInfo: {
    artistName: string;
    albumName: string;
  };
}

const AlbumCardList: React.FC<Props> = ({
  imageFile,
  isStoryBook,
  albumInfo
}) => {
  return (
    <>
      <Card sx={{ border: "none", boxShadow: "none" }}>
        <CardActionArea
          sx={{
            pb: 1.5
          }}
        >
          <CardContent sx={{ display: "flex" }}>
            <img
              style={{ display: "flex" }}
              src={imageFile}
              height={116}
              width={116}
              alt="AppAlt"
            />

            <CardContent
              sx={{
                paddingTop: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start"
              }}
            >
              <Typography variant="h2">{albumInfo.artistName}</Typography>
              <Typography variant="h2">{albumInfo.albumName}</Typography>
            </CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AlbumCardList;
