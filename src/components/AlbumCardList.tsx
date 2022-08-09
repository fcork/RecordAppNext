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
        <CardActionArea>
          <CardContent sx={{ pb: 1.5, display: "flex", justifyContent: "flex-start",flexDirection: "row"}}>
            {isStoryBook ? (
              <img
                src={imageFile}
                height={144}
                width={144}
                alt="StorybookAlt"
              />
            ) : (
              <Image
                style={{ display: "flex" }}
                priority
                src={imageFile}
                height={144}
                width={144}
                alt="AppAlt"
              />
            )}

            <CardContent sx={{paddingTop: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", minHeight: "25%"}}>
              <Typography>
              {albumInfo.artistName}
              </Typography>
              <Typography>
                {albumInfo.albumName}
              </Typography>
              
            </CardContent>

          </CardContent>


        </CardActionArea>
      </Card>
    </>
  );
};

export default AlbumCardList;
