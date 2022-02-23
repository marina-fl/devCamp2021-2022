import "./Body.css";
import { useState } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { Formik, Field, Form } from "formik";
import { Button, Box } from "@mui/material";
import AvailableTo from "./AvailableTo";
import createProfile from "../../containers/profile/api/crud";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CreateProfile = ({ profileData }) => {
  const profileSchema = Yup.object().shape({
    user_name: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Add some text"),
    about: Yup.string().max(500, "You wrote 500 symbols"),
    email: Yup.string()
      .email("invalid email format")
      .required("write an email"),
    phone: Yup.string().matches(/^([+]380[0-9]{9})$/, "invalid phone format"),
    idusers: Yup.number().required(
      "write iduser until I understand what to do with this"
    ),
  });

  const mutation = useMutation((newProfile) => createProfile(newProfile));

  const onFormSubmit = (newProfile) => {
    mutation.mutate({
      idusers: newProfile.idusers,
      user_name: newProfile.user_name,
      about: newProfile.about,
      email: newProfile.email,
      phone: newProfile.phone,
      avatar: croppedAvatar,
    });
  };

  const [avatar, setAvatar] = useState();
  const [croppedAvatar, setCroppedAvatar] = useState();
  const [cropper, setCropper] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file.type.match("image.*") && file.size < 10000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Wrong file format or size!");
    }
  };

  const cropAvatar = () => {
    if (typeof cropper !== "undefined") {
      setCroppedAvatar(cropper.getCroppedCanvas().toDataURL());
      setAvatar(null);
    }
  };

  const deleteImage = () => {
    setCroppedAvatar(null);
    setAvatar(null);
  };

  return (
    <div className="add_form">
      <Formik
        initialValues={profileData}
        onSubmit={onFormSubmit}
        validationSchema={profileSchema}
      >
        {({ errors, onSubmit }) => (
          <Form onSubmit={onSubmit}>
            <div>Errors: {JSON.stringify(errors)}</div>
            <div>
              <Box margin={5}>
                {!avatar && (
                  <Button variant="contained" component="label">
                    Choose image
                    <input type="file" hidden onChange={handleChange} />
                  </Button>
                )}
                {avatar && (
                  <Button variant="contained" onClick={deleteImage}>
                    Delete image
                  </Button>
                )}
                {avatar && (
                  <Cropper
                    src={avatar}
                    onInitialized={(instance) => setCropper(instance)}
                    rotatable={false}
                    viewMode={1}
                  />
                )}
                {avatar && (
                  <Button variant="contained" onClick={cropAvatar}>
                    Save
                  </Button>
                )}
                <img src={profileData.imgSrc} alt="some source" />
              </Box>
              <label htmlFor="text">User id:</label>
              <Field id="idusers" name="idusers" placeholder="User id">
                {({ field }) => (
                  <div>
                    <textarea
                      type="text"
                      placeholder="Enter text..."
                      {...field}
                    />
                  </div>
                )}
              </Field>

              <label htmlFor="user_name">User name:</label>

              <Field id="user_name" name="user_name">
                {({ field }) => (
                  <div>
                    <textarea type="text" placeholder="Your name" {...field} />
                  </div>
                )}
              </Field>

              <label htmlFor="about">About you:</label>

              <Field id="about" name="about">
                {({ field }) => (
                  <div>
                    <textarea
                      type="text"
                      placeholder="Add some info about you"
                      {...field}
                    />
                  </div>
                )}
              </Field>
              <AvailableTo />

              <label htmlFor="email">email:</label>

              <Field id="email" name="email">
                {({ field }) => (
                  <div>
                    <textarea type="text" placeholder="email" {...field} />
                  </div>
                )}
              </Field>
              <AvailableTo />

              <label htmlFor="email">email:</label>

              <Field id="email" name="email">
                {({ field }) => (
                  <div>
                    <textarea
                      type="text"
                      placeholder="Add some info about you"
                      {...field}
                    />
                  </div>
                )}
              </Field>
              <AvailableTo />
              <Field id="phone" name="phone">
                {({ field }) => (
                  <div>
                    <textarea
                      type="text"
                      placeholder="+380xxxxxxxxx"
                      {...field}
                    />
                  </div>
                )}
              </Field>
              <AvailableTo />
            </div>

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

/* CreateProfile.propTypes = {
  avatar: PropTypes.string,
  user_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  about: PropTypes.string,
}; */

export default CreateProfile;
