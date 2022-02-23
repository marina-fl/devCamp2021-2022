import FormikAutocomplete from "../FormikAutocomplete";
import "./Body.css";
import PropTypes from "prop-types";
import { TextField } from "formik-mui";
import TextField from "@mui/material/TextField";

const options = [
  { value: "all", label: "all" },
  { value: "friends", label: "friends" },
  { value: "only me", label: "only me" },
];

function AvailableTo({ options }) {
  return (
    <Field
      component={FormikAutocomplete}
      name="available_to"
      label="available to"
      options={options}
      value={options.value}
    />
  );
}

export default AvailableTo;
