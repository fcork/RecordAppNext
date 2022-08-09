import * as React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import IconButton from '@mui/material/IconButton';



const GridView = (props: any) => {
  const { handleClick, color } = props

  return (
    <IconButton color={color} onClick={handleClick}>
       <AppsIcon />
    </IconButton>
   
  )
}

export default GridView