import * as React from 'react';
import ListIcon from '@mui/icons-material/List';
import IconButton from '@mui/material/IconButton';


const ListView = (props: any) => {
  const { handleClick, color } = props

  return (
    <IconButton color={color} onClick={ handleClick }>
      <ListIcon />
    </IconButton>
    
  )
}

export default ListView