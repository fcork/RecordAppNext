import React from 'react'
import { Card, CardContent, Grid } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../src/components/CustomButton';

interface Props{

}

const albumView: React.FC<Props> = () => {
  return (
    // <Grid container sx={{display: "flex", justifyContent: "center"}}>
    //   <Grid item sx={{display: "flex", flexDirection:"column"}}>
    //     <Image
    //       src="/images/PetSoundsCover.jpg"
    //       height={324}
    //       width={324}
    //       alt="viewAlt"
    //     />
    //   <CustomButton>
    //     Click
    //   </CustomButton>

    //   </Grid>
    // </Grid>

    <Grid container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Grid item >
      <Image
        src="/images/PetSoundsCover.jpg"
        height={324}
        width={324}
        alt="viewAlt"
      />
      </Grid>
      <Grid item>
    <CustomButton>
      Click
    </CustomButton>

    </Grid>
  </Grid>

  );
}

export default albumView