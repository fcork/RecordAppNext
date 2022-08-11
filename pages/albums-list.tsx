import * as React from "react";
import { useState, useEffect } from "react";
import AlbumCard from "../src/components/AlbumCard";
import {
  Grid,
  Box,
  Button,
  Container,
  Typography,
  TextField
} from "@mui/material";
import SearchBox from "../src/components/SearchBox";
import CustomButton from "../src/components/CustomButton";
import GridView from "../src/components/GridView";
import ListView from "../src/components/ListView";
import Link from "next/link";
import AlbumCardList from "../src/components/AlbumCardList";

// export async function getServerSideProps() {
//   let dev = process.env.NODE_ENV !== "production";
//   let { DEV_URL, PROD_URL } = process.env;

//   const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/albums`);
//   const newData = await res.json();
//   return {
//     props: {
//       albumData: newData.message
//     }
//   };
// }

const About = () => {
  const [unfilteredAlbumList, setUnfilteredAlbumList] = useState([])
  const [albumList, setAlbumList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [grid, setGrid] = useState({
    isGrid: true,
    gridColor: "primary",
    listColor: "secondary"
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`api/albums`);
      const newData = await response.json();
      await setIsLoading(false);
      setAlbumList(newData.message);
      setUnfilteredAlbumList(newData.message)
    };

    fetchData();

    // const NewFetchSpot = async () => {
    //   const accessToken = "BQBUVcYEr1Yxu-ZOXN28nPKOGbP1B79zaKeKSa4r3k0J9nnc-RaSgli8lZbMxbVGpHBNQ4zdS506Witqtm04OmBBXJa4oG-Qeq1PHaJESOOUxHBvSDDlMhKFUhpQjxjuBvugd3zGeFiRLDXkngtp2-tSMjjyxKNevXPFsKkAChVUkfI"
    //   const response = await fetch('https://api.spotify.com/v1/search?type=album&q=year:1968%20artist:The%20Rolling%20Stones', {
    //         method: 'GET', headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + accessToken
    //         }
    //     })

    //         const newData = await response.json();
    //    console.log('wwww',newData.albums.items)
    // }

    // NewFetchSpot()
    // fetchSpotData();

    // const fetchSpotData = async () => {
    //   const response = await fetch('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist', {
    //     headers: {
    //       Authentication: token
    //     }
    //   })
    //   const newData = await response.json();
    //    console.log('wwww',newData)
    // };

    // fetchSpotData();
  }, []);

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

  const displayedGridAlbums = albumList.map((album: any) => (
    <Link href={`/album-view/${album._id}`} key={album._id}>
      <Grid item xs={6}>
        <AlbumCard
          imageFile={album.albumArtworkUrl}
          albumInfo={album}
          skeleton={isLoading}
        />
      </Grid>
    </Link>
  ));

  const displayedListAlbums = albumList.map((album: any) => (
    <Link href={`/album-view/${album._id}`} key={album._id}>
      <Grid item xs={12} sm={6} md={4}>
        <AlbumCardList imageFile={album.albumArtworkUrl} albumInfo={album} />
      </Grid>
    </Link>
  ));

  const displayedAlbums = grid.isGrid
    ? displayedGridAlbums
    : displayedListAlbums;

  const toggleList = () => {
    setGrid({ isGrid: false, gridColor: "secondary", listColor: "primary" });
  };

  const toggleGrid = () => {
    setGrid({ isGrid: true, gridColor: "primary", listColor: "secondary" });
  };

  // const handleSearch = () => {
  //   const result = unfilteredAlbumList.filter(
  //     album =>
  //       album.artistName.toLowerCase().includes(searchText) ||
  //       album.albumName.toLowerCase().includes(searchText)
  //   );
  //   setAlbumList(result);
  // };

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value)
    await setSearchText(e.target.value.toLocaleLowerCase())
    console.log('search',searchText)
    // const result =  await unfilteredAlbumList.filter(
    //   album =>
    //     album.artistName.toLowerCase().includes(searchText) ||
    //     album.albumName.toLowerCase().includes(searchText)
    // );
    // await setAlbumList(result);
  
  };

  useEffect(() => {
    const handleSearch = () => {
      const result = unfilteredAlbumList.filter(
        album =>
          album.artistName.toLowerCase().includes(searchText) ||
          album.albumName.toLowerCase().includes(searchText)
      );
      setAlbumList(result);
    }
      handleSearch()
  }, [searchText])

  const clearSearchBar = () => {
    setAlbumList(unfilteredAlbumList)
    setSearchText("")
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
            <SearchBox
              handleSearchChange={handleSearchChange}
              searchText={searchText}
              clearSearchBar={clearSearchBar}
            />
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
      </Box>
      <Grid container>{albumList.length > 0 && displayedAlbums}</Grid>
    </Container>
  );
};

export default About;
