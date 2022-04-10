import React from "react";

import { FormControl, InputLabel, TextField, Typography } from "@mui/material";

export default function CustomInput({
  name,
  label,
  register,
  errors,
  type,
  required = false,
}) {
  return (
    <FormControl fullWidth size="small" className="text-left">
      {/* <p className="text-xs md:text-md font-semibold">{label}</p> */}
      <TextField
        type={type ? type : "text"}
        {...register(name, { required: required })}
        size="small"
        error={errors[name] ? true : false}
        helperText={errors[name]}
        placeholder={label}
      />
    </FormControl>
  );
}
