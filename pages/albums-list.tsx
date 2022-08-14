import * as React from "react";
import { useState, useEffect, SetStateAction } from "react";
import AlbumCard from "../src/components/AlbumCard";
import { Grid, Box, Container, Typography } from "@mui/material";
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

interface Albums {
  _id: string;
  artistName: string;
  albumName: string;
  genre: string;
  length: string;
  releaseDate: string;
  pricePaid: string;
  label: string;
  deadWaxInfo: string;
  pressingYear: string;
  country: string;
  notes: string;
  discogsUrl: string;
  albumArtworkUrl: string;
}

const About = () => {
  const [unfilteredAlbumList, setUnfilteredAlbumList] = useState<Albums[]>([]);
  const [albumList, setAlbumList] = useState<Albums[]>([]);
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
      setUnfilteredAlbumList(newData.message);
    };
    fetchData();
  }, []);

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

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    await setSearchText(e.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    const handleSearch = () => {
      const result = unfilteredAlbumList.filter(
        album =>
          album.artistName.toLowerCase().includes(searchText) ||
          album.albumName.toLowerCase().includes(searchText)
      );
      setAlbumList(result);
    };
    handleSearch();
  }, [searchText]);

  const clearSearchBar = () => {
    setAlbumList(unfilteredAlbumList);
    setSearchText("");
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 4,
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center"
        }}
      >
        {/* <Box>
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
        </Box> */}

        <Grid
          container
          spacing={1}
          direction="column"
          // justifyContent="flex-end"
          // alignItems="stretch"
        >
          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 3
          }}>
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: "1000",
                lineHeight: "20px"
              }}
              
            >
              Franks Albums
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{mb: 1}}>
            <SearchBox
              handleSearchChange={handleSearchChange}
              searchText={searchText}
              clearSearchBar={clearSearchBar}
            />
          </Grid>

          <Grid item xs={12}>
            <Link href="/" passHref>
              <CustomButton variant="contained" icon="filter">
                Filter
              </CustomButton>
            </Link>
          </Grid>
          <Grid item sx={{pb: 0, display: "flex", justifyContent: "flex-end"}}>
          <GridView color={grid.gridColor} handleClick={toggleGrid} />
          <ListView color={grid.listColor} handleClick={toggleList} />
          </Grid>
        </Grid>

        {/* <Grid item sx={{display: "flex", justifyContent: "flex-end"}}> */}
          {/* <Grid item> */}
            {/* <GridView color={grid.gridColor} handleClick={toggleGrid} /> */}
          {/* </Grid> */}
          {/* <Grid item> */}
            {/* <ListView color={grid.listColor} handleClick={toggleList} /> */}
          {/* </Grid> */}
        {/* </Grid> */}
      </Box>
      <Grid sx={{pt: 0}} container>{albumList.length > 0 && displayedAlbums}</Grid>
    </Container>
  );
};

export default About;
