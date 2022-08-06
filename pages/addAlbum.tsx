import React, { useState } from "react";
import CustomButton from "../src/components/CustomButton";
import { TextField, Button, Link, Box, Paper, Card, CardContent } from "@mui/material";
import { ConsoleWriter } from "istanbul-lib-report";

const AddAlbum = () => {
  const [albumText, setAlbumText] = useState("")
  const [artistText, setArtistText] = useState("")

  const handlePost = async (e) => {
    e.preventDefault();

    let album = {
        albumName: albumText,
        artistName: artistText
    };
    // save the post
    let response = await fetch('/api/albums', {
      method: 'POST',
      body: JSON.stringify(album)
    });

    // get the data
    let data = await response.json();
    setAlbumText("")
    setArtistText("")
    return data
};

  const artistType = (e: any) => {
    e.preventDefault()
    setArtistText(e.target.value)
  }

  const albumType = (e: any) => {
    e.preventDefault()
    setAlbumText(e.target.value)
  }

  return (
    <>
      <Card>
        <CardContent>
      <TextField
        id="outlined-basic"
        label="Artist"
        variant="outlined"
        fullWidth
        value={artistText}
        onChange={artistType}
      />

      <TextField
        id="outlined-basic"
        label="Album"
        variant="outlined"
        fullWidth
        value={albumText}
        onChange={albumType}
      />

      <CustomButton onClick={handlePost} icon="add">Add Album</CustomButton>

      <Link  href="/">
        Go to the home page
      </Link>
      </CardContent>
      </Card>
    </>
  );
};

export default AddAlbum;
