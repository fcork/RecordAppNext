import * as React from 'react';
import { useState, useEffect } from 'react'
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import AlbumCard from '../src/components/AlbumCard'
import { Grid, Box, Button, Container, Typography } from '@mui/material'
import SearchBox from '../src/components/SearchBox';
import CustomButton from '../src/components/CustomButton';
import GridView from '../src/components/GridView';
import ListView from '../src/components/ListView';


export async function getServerSideProps() {

  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/albums`);
  const newData = await res.json()
  return {
    props: {
      albumData: newData.message,
    },
  }; 
}

const About = ({albumData}: any) => {
  const [albumList, setAlbumList] = useState([])
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

const displayedAlbums = albumData.map((album: any) => 
  <Grid item xs={6} key={album._id}>
    <AlbumCard imageFile="/images/PetSoundsCover.jpg" albumInfo={album}/>
  </Grid>
) 

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Box >
        <Typography style={{ fontSize: '2.5rem', fontWeight: '1000', lineHeight: '20px' }} gutterBottom>
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
          <CustomButton icon="filter" component={Link} href="/">
            Filter
          </CustomButton>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end">
        <Grid item>
          <GridView />
        </Grid>
        <Grid item>
          <ListView />
        </Grid>
      </Grid>
        
        {/* <ProTip />
        <Copyright /> */}
      </Box>
        <Grid container>
        {albumData.length > 0 && displayedAlbums}
        </Grid>
    </Container>
  );
};

export default About;
