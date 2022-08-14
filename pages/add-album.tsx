import React, { useState } from "react";
import CustomButton from "../src/components/CustomButton";
import {
  TextField,
  Link,
  Card,
  CardContent,
  Typography,
  InputAdornment,
  Box
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AlbumForm from "../src/components/AlbumForm";

// export async function getServerSideProps(context: any) {
//   const
// }

const AddAlbum = () => {
  const [fullAlbum, setFullAlbum] = useState({
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
    discogsUrl: ""
  });

  const handleAlbumChange = (e: any) => {
    e.preventDefault();
    setFullAlbum({ ...fullAlbum, [e.target.name]: e.target.value });
  };

  const handlePost = async (e: any) => {
    e.preventDefault();

    // save the post
    let response = await fetch("/api/albums", {
      method: "POST",
      body: JSON.stringify(fullAlbum)
    });

    // get the data
    let data = await response.json();
    setFullAlbum({
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
      discogsUrl: ""
    });
    return data;
  };

  return (
    <>
      <Card>
        <CardContent>
          {/* <Typography>General</Typography>
          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Artist"
            variant="outlined"
            fullWidth
            value={fullAlbum.artistName}
            onChange={handleAlbumChange}
            name="artistName"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Album"
            variant="outlined"
            fullWidth
            value={fullAlbum.albumName}
            onChange={handleAlbumChange}
            name="albumName"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Genre"
            variant="outlined"
            fullWidth
            value={fullAlbum.genre}
            onChange={handleAlbumChange}
            name="genre"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Length"
            variant="outlined"
            fullWidth
            value={fullAlbum.length}
            onChange={handleAlbumChange}
            name="length"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Release Date"
            variant="outlined"
            fullWidth
            value={fullAlbum.releaseDate}
            onChange={handleAlbumChange}
            name="releaseDate"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Price Paid"
            variant="outlined"
            fullWidth
            value={fullAlbum.pricePaid}
            onChange={handleAlbumChange}
            name="pricePaid"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          />

          <Typography>Pressing Info</Typography>

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Label"
            variant="outlined"
            fullWidth
            value={fullAlbum.label}
            onChange={handleAlbumChange}
            name="label"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Dead Wax Info"
            variant="outlined"
            fullWidth
            value={fullAlbum.deadWaxInfo}
            onChange={handleAlbumChange}
            name="deadWaxInfo"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Pressing Year"
            variant="outlined"
            fullWidth
            value={fullAlbum.pressingYear}
            onChange={handleAlbumChange}
            name="pressingYear"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Country"
            variant="outlined"
            fullWidth
            value={fullAlbum.country}
            onChange={handleAlbumChange}
            name="country"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Discogs Url"
            variant="outlined"
            fullWidth
            value={fullAlbum.discogsUrl}
            onChange={handleAlbumChange}
            name="discogsUrl"
          />

          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Notes"
            variant="outlined"
            fullWidth
            value={fullAlbum.notes}
            onChange={handleAlbumChange}
            name="notes"
            multiline
            minRows="3"
          /> */}

          <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography variant="h5">Add Album Info Below</Typography>
          </Box>
          

          <AlbumForm
            fullAlbum={fullAlbum}
            handleAlbumChange={handleAlbumChange}
          />

          <CustomButton onClick={handlePost} icon="add" variant="contained">
            Add Album
          </CustomButton>

          <Link href="/">Go to the home page</Link>
        </CardContent>
      </Card>
    </>
  );
};

export default AddAlbum;
