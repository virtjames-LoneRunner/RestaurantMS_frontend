import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({
  options,
  label,
  className,
  setSelected,
  setSelectedLabel,
  selected,
}) {
  const handleChange = (e, newValue) => {
    e.preventDefault();
    if (newValue) {
      setSelected(newValue.value);
    } else {
      setSelected(null);
    }
  };
  return (
    <Autocomplete
      freeSolo
      fullWidth
      autoComplete
      autoHighlight
      onChange={handleChange}
      disablePortal
      id="search-clinic"
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          className={className}
          onBlur={(e) => {
            setSelected(e.target.value);
          }}
        />
      )}
    />
  );
}
