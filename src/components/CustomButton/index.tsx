import * as React from 'react';
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';

interface Props {
  icon?: string,
  onClick?: React.MouseEventHandler,
  children: React.ReactNode,
  [x: string]: any
}

interface iconsInt {
  [key: string]: object
}

const icons: iconsInt = {
  filter: <FilterAltOutlinedIcon />,
  add: <AddIcon />
}

const CustomButton: React.FC<Props> = (props: any) => {
  const { children, icon, variant } = props
  const currentIcon=icons[icon]

  return (
    <Button
      {...props}
      role="button"
      sx={{ padding: '16px', borderRadius: '8px' }}
      // variant="contained"
      color="primary"
      fullWidth
      startIcon={currentIcon}
    >
      {children}
    </Button>

  )
}

export default CustomButton