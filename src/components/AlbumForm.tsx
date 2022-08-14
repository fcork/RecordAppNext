import React, { useState } from "react";
import {
  TextField,
  Link,
  Card,
  CardContent,
  Typography,
  InputAdornment
} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface Props {
  fullAlbum: {
    artistName: string,
    albumName:string,
    genre: string,
    length: string,
    releaseDate: string,
    pricePaid: string,
    label: string,
    deadWaxInfo: string,
    pressingYear: string,
    country: string,
    notes: string,
    discogsUrl: string
  },
  handleAlbumChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AlbumForm: React.FC<Props> = ({fullAlbum, handleAlbumChange}:any) => {
  return (
    <>
    <Card>
      <CardContent>
        <Typography>General</Typography>
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
        />

      </CardContent>
    </Card>
  </>
  );
}

export default AlbumForm