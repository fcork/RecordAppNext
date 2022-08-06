import * as React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import IconButton from '@mui/material/IconButton';



const GridView = (props: any) => {


  return (
    <IconButton color="secondary" onClick={() => alert('hello')}>
       <AppsIcon />
    </IconButton>
   
  )
}

export default GridView