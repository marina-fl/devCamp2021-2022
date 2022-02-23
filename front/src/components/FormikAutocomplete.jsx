import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { fieldToTextField } from "formik-mui";

const FormikAutocomplete = (props) => {
  const {
    form: { setTouched, setFieldValue },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <Autocomplete
      {...props}
      {...field}
      getOptionLabel={(option) => option.label}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({ [name]: true })}
      renderInput={(props) => (
        <TextField {...props} helperText={helperText} error={error} />
      )}
    />
  );
};

export default FormikAutocomplete;
