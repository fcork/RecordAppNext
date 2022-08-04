import * as React from 'react';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';


const SearchBox = () => {
  return (
    <TextField
      label="Search"
      fullWidth
      InputProps={{
        startAdornment:
          <InputAdornment
            position="start"
          >
            <Search />
          </InputAdornment>,
      }}
    />

  )
}

export default SearchBox