import * as React from "react";
import { useState, useEffect } from "react";
// import Link from '../src/Link';
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import AlbumCard from "../src/components/AlbumCard";
import { Grid, Box, Button, Container, Typography } from "@mui/material";
import SearchBox from "../src/components/SearchBox";
import CustomButton from "../src/components/CustomButton";
import GridView from "../src/components/GridView";
import ListView from "../src/components/ListView";
import Link from "next/link";
import AlbumCardList from "../src/components/AlbumCardList";

export async function getServerSideProps() {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;

  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/albums`);
  const newData = await res.json();
  return {
    props: {
      albumData: newData.message
    }
  };
}

const About = ({ albumData }: any) => {
  const [albumList, setAlbumList] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
  const [grid, setGrid] = useState({isGrid: true, gridColor: "primary", listColor: "secondary"});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`api/albums`);
  //     const newData = await response.json();
  //     setAlbumList(newData.message)
  //   };

  //   fetchData();
  // }, []);

  //   const handlePost = async (e) => {
  //     e.preventDefault();

  //     let album = {
  //         albumName: 'Revolver',
  //         artistName: 'The Beatles'
  //     };
  //     // save the post
  //     let response = await fetch('/api/albums');

  //     // get the data
  //     let data = await response.json();
  //     setAlbumList(data.message)
  //     return data
  // };

  const displayedGridAlbums = albumData.map((album: any) => (
    <Link href={`/album-view/${album._id}`} key={album._id}>
      <Grid item xs={6}>
        <AlbumCard imageFile="/images/PetSoundsCover.jpg" albumInfo={album} />
      </Grid>
    </Link>
  ));

  const displayedListAlbums = albumData.map((album: any) => (
    <Link href={`/album-view/${album._id}`} key={album._id}>
      <Grid item xs={12} sm={6} md={4}>
        <AlbumCardList
          imageFile="/images/PetSoundsCover.jpg"
          albumInfo={album}
        />
      </Grid>
    </Link>
  ));

  const displayedAlbums = grid.isGrid ? displayedGridAlbums : displayedListAlbums

  const toggleList = () => {
    setGrid({isGrid: false, gridColor: "secondary", listColor: "primary"})
  }

  const toggleGrid = () => {
    setGrid({isGrid: true, gridColor: "primary", listColor: "secondary"})
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box>
          <Typography
            style={{
              fontSize: "2.5rem",
              fontWeight: "1000",
              lineHeight: "20px"
            }}
            gutterBottom
          >
            Franks Albums
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          direction="column"
          justifyContent="flex-end"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <SearchBox />
          </Grid>
          <Grid item>
            <Link href="/">
              <CustomButton icon="filter">Filter</CustomButton>
            </Link>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <GridView color={grid.gridColor} handleClick={toggleGrid} />
          </Grid>
          <Grid item>
            <ListView color={grid.listColor} handleClick={toggleList} />
          </Grid>
        </Grid>

        {/* <ProTip />
        <Copyright /> */}
      </Box>
      <Grid container>{albumData.length > 0 && displayedAlbums}</Grid>
    </Container>
  );
};

export default About;
