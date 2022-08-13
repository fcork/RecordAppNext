import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from '@mui/material/IconButton';

interface Props{
  searchText: string,
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>,
  clearSearchBar: () => void
}

const SearchBox: React.FC<Props> = ({ searchText, handleSearchChange, clearSearchBar }: any) => {
  return (
    <TextField
      label="Search"
      fullWidth
      onChange={handleSearchChange}
      value={searchText}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={clearSearchBar}>
              <ClearIcon />
            </IconButton>
            
          </InputAdornment>
        )
      }}
    />
  );
};

export default SearchBox
