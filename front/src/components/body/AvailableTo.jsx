import FormikAutocomplete from "../FormikAutocomplete";
import "./Body.css";
import { Field } from "formik";

const options = [
  { value: "all", label: "all" },
  { value: "friends", label: "friends" },
  { value: "only me", label: "only me" },
];

function AvailableTo() {
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
