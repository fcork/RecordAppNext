import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Container
} from "@mui/material";
import Image from "next/image";
import CustomButton from "../../src/components/CustomButton";
import theme from "../../src/theme";
import { useRouter } from "next/router";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {}

export async function getServerSideProps(context: any) {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  const { album_id } = context.query;

  const res = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/album/?id=${album_id}`
  );
  const newData = await res.json();
  return {
    props: {
      albumData: newData.message
    }
  };
}

const albumView: React.FC<Props> = ({ albumData }: any) => {
  const [album, setAlbum] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`/api/album/?id=${album_id}`);
  //     const newData = await res.json();
  //     setAlbum(newData.message)
  //   }
  //   fetchData()
  // }, [])

  return (
    <Container maxWidth="md">
      <Link href="/albums-list">
        <Box
          sx={{
            marginRight: "auto",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            cursor: "pointer"
          }}
        >
          <ArrowBackIcon />
          <Typography>Back to albums</Typography>
        </Box>
      </Link>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          direction: "column",
          my: 1
        }}
        spacing={3}
      >
        <Grid>
          <Typography>
            {albumData.artistName} - {albumData.albumName}
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/PetSoundsCover.jpg"
            height={324}
            width={324}
            alt="viewAlt"
          />
        </Grid>
        <Grid item xs={10}>
          <Box>
            <CustomButton>View Album Art</CustomButton>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography>General</Typography>
        </Grid>
        <Grid item xs={10}>
          <Card sx={{ background: theme.palette.primary.light }}>
            <CardContent>
              <Typography>Genre: {albumData.genre}</Typography>
              <Typography>Length: {albumData.length}</Typography>
              <Typography>Release Date: {albumData.releaseDate}</Typography>
              <Typography>Price Paid: ${albumData.pricePaid}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <Typography>Pressing/Variation Info</Typography>
        </Grid>
        <Grid item xs={10}>
          <Card sx={{ background: theme.palette.primary.light }}>
            <CardContent>
              <Typography>Label: {albumData.label}</Typography>
              <Typography>Dead Wax Info: {albumData.deadWaxInfo}</Typography>
              <Typography>Pressing Year: {albumData.pressingYear}</Typography>
              <Typography>Country: {albumData.country}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <Typography>Notes</Typography>
        </Grid>
        <Grid item xs={10}>
          <Card
            sx={{ background: theme.palette.primary.light, height: "100%" }}
          >
            <CardContent>
              <Typography>{albumData.notes}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <a
            href={albumData.discogsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <CustomButton>View Discogs Link</CustomButton>
          </a>
        </Grid>
      </Grid>
    </Container>

    // <Container maxWidth="md">
    // <Card sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
    //   <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    //     <Image
    //       src="/images/PetSoundsCover.jpg"
    //       height={324}
    //       width={324}
    //       alt="viewAlt"
    //     />

    //     <CustomButton sx={{flexGrow: "1"}}>Click</CustomButton>
    //   </CardContent>
    //   <CardContent >

    //   </CardContent>
    // </Card>
    // </Container>

    // <Box
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     height: "100vh",
    //     justifyContent: "center",
    //     flexDirection: "column"
    //   }}
    // >
    //   <Box sx={{ mb: "auto" }}>Hello</Box>
    //   <Box>Hello</Box>
    // </Box>

    // <>
    //   <Container maxWidth="lg">
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center"
    //       }}
    //     >
    //       <Image
    //         src="/images/PetSoundsCover.jpg"
    //         height={324}
    //         width={324}
    //         alt="viewAlt"
    //       />

    //       <CustomButton>View Album Art</CustomButton>
    //       <Box sx={{margin: "auto"}}>
    //         <Card>
    //           <CardContent>
    //             <Typography>Genre:</Typography>
    //             <Typography>Length:</Typography>
    //             <Typography>Release Date:</Typography>
    //             <Typography>Price Paid:</Typography>
    //           </CardContent>
    //         </Card>
    //       </Box>
    //     </Box>
    //   </Container>
    //   <Card>
    //     <CardContent>
    //       <Typography>Genre:</Typography>
    //       <Typography>Length:</Typography>
    //       <Typography>Release Date:</Typography>
    //       <Typography>Price Paid:</Typography>
    //     </CardContent>
    //   </Card>
    // </>
  );
};

export default albumView;
