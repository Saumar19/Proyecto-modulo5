import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Ingredients = () => {
  return (
    <Autocomplete
      disablePortal
      id="search"
      options={ingredients}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Ingredientes no permitidos" />}
    />
  );
};

const ingredients = ["procaina", "efedrina", "yohimbina", "germanio"]

export default Ingredients;
