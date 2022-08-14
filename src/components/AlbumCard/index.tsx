import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Typography,
  Skeleton
} from "@mui/material/";
import Image from "next/image";

interface Props {
  imageFile: string;
  isStoryBook?: boolean;
  albumInfo: {
    artistName: string;
    albumName: string;
  };
  skeleton: boolean;
}

const AlbumCard: React.FC<Props> = ({
  imageFile,
  isStoryBook,
  albumInfo,
  skeleton
}) => {
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
          {skeleton ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={144}
              height={144}
            />
          ) : (
            <CardContent sx={{ margin: 0 }}>
                <img
                  style={{ display: "flex" }}
                  src={imageFile}
                  height={156}
                  width={156}
                  alt="AppAlt"
                />
            </CardContent>
          )}
          {skeleton ? (
            <Skeleton
              // animation="wave"
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={120}
            />
          ) : (
            <CardContent sx={{ pl: 2, pt: 0, pb: 0.5 }}>
              {albumInfo.artistName}
            </CardContent>
          )}
          {skeleton ? (
            <Skeleton
              // animation="wave"
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={100}
            />
          ) : (
            <CardContent sx={{ pl: 2, pt: 0 }}>
              {albumInfo.albumName}
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </>
  );
};

export default AlbumCard;
