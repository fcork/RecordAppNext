import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Modal
} from "@mui/material";
import CustomButton from "../../src/components/CustomButton";
import theme from "../../src/theme";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomModal from "../../src/components/CustomModal";

interface Props {}

export async function getServerSideProps(context: any) {
  // let dev = process.env.NODE_ENV !== "production";
  // let { DEV_URL, PROD_URL } = process.env;
  const { album_id } = context.query;

  // const res = await fetch(
  //   `${dev ? DEV_URL : PROD_URL}/api/album/?id=${album_id}`
  // );
  // const newData = await res.json();
  return {
    props: {
      id: album_id
    }
  };
}

const albumView: React.FC<Props> = ({ id }: any) => {
  const [artModal, setArtModal] = useState(false);
  const [albumsArray, setAlbumsArray] = useState<any[]>([]);
  const [position, setPosition] = useState(0);
  const [albumData, setAlbum] = useState({
    artistName: "",
    albumName: "",
    genre: "",
    length: "",
    releaseDate: "",
    pricePaid: "",
    label: "",
    deadWaxInfo: "",
    pressingYear: "",
    country: "",
    notes: "",
    discogsUrl: "",
    albumArtworkUrl: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/album/?id=${id}`);
      const newData = await res.json();
      setAlbum(newData.message);
    };
    fetchData();
  }, [setArtModal]);

  const currentAlbum =
    albumsArray.length > 0 && albumsArray[position].images[0].url;

  // const handleArt1 = async () => {
  //   const releaseYear = albumData.releaseDate.slice(-4)
  //   const artistString = albumData.artistName.split(' ').join('%20')
  //   const response = await fetch(`https://api.spotify.com/v1/search?type=album&q=year:${releaseYear}%20artist:${artistString}`, {
  //         method: 'GET', headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //             'Authorization': 'Bearer ' + accessToken
  //         }
  //     })

  //         const newData = await response.json();
  //    console.log('wwww',newData.albums.items[0].images[0].url)
  //    const { url } = newData.albums.items[0].images[0]
  //    await fetch(`/api/albums/?id=${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({ albumArtworkUrl: url })
  // });
  // }

  const handleNextAlbum = () => setPosition(previousValue => ++previousValue);
  const handlePreviousAlbum = () =>
    setPosition(previousValue => --previousValue);

  const handleArt = async () => {
    // const releaseYear = albumData.releaseDate.slice(-4);

    const response = await fetch(
      `/api/artwork?artist=${albumData.artistName}&album=${albumData.albumName}`
    );
    const newData = await response.json();
    setAlbumsArray(newData);
  };

  const handleClose = () => setArtModal(false);
  const handleOpen = async () => {
    await handleArt();
    await setArtModal(true);
  };

  const handleSubmitArtwork = async () => {
    const { url } = albumsArray[0].images[0];
    await fetch(`/api/albums/?id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ albumArtworkUrl: url })
    });
    await handleClose();
  };

  return (
    <>
      <Container maxWidth="md">
        <Link href="/albums-list">
          <Box
            sx={{
              marginRight: "auto",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              cursor: "pointer",
              mt: 2
            }}
          >
            <ArrowBackIcon sx={{mr: .5}} />
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
            <img
              src={albumData.albumArtworkUrl}
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
          <Grid item xs={10}>
            <Button onClick={handleOpen}>Open modal</Button>

            <CustomModal
              open={artModal}
              handleClose={handleClose}
              nextHandler={handleNextAlbum}
              previousHandler={handlePreviousAlbum}
              position={position}
              // handleSubmit={handleSubmitArtwork}
              currentAlbum={currentAlbum}
              arrayLength={albumsArray.length}
            />
          </Grid>
        </Grid>
      </Container>

      {/* <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={artModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div> */}
    </>

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
