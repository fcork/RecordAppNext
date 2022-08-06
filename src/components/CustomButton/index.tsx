import * as React from 'react';
import TextField from '@mui/material/TextField'
// import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';

interface Props {
  icon?: string,
}

const icons = {
  filter: <FilterAltOutlinedIcon />,
  add: <AddIcon />
}


const CustomButton: React.FC<Props> = (props: any) => {
  const { children, icon } = props
  return (
    <Button
      {...props}
      role="button"
      sx={{ padding: '16px', borderRadius: '8px' }}
      variant="contained"
      color="secondary"
      fullWidth
      startIcon={icons[icon]}
    >
      {children}
    </Button>

  )
}

export default CustomButton