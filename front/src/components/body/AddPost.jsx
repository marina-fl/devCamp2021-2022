import "./Body.css";
import { useState } from "react";
import { useMutation } from "react-query";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import addPost from "../../containers/addPost/api/crud";
import Button from "@mui/material/Button";
import FormikAutocomplete from "../FormikAutocomplete";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Box } from "@material-ui/core";

const AddPost = ({ postData }) => {
  const postSchema = Yup.object().shape({
    text: Yup.string()
      .min(1, "Too Short!")
      .max(500, "Too Long!")
      .required("Add some text"),
    available_to: Yup.object("choose option").required("choose option"),
    idusers: Yup.number().required(
      "write iduser until I understand what to do with this"
    ),
  });

  const mutation = useMutation((newPost) => addPost(newPost));

  const onFormSubmit = (newPost) => {
    mutation.mutate({
      idusers: newPost.idusers,
      text_: newPost.text_,
      image: croppedImage,
    });
  };

  const options = [
    { value: "all", label: "all" },
    { value: "friends", label: "friends" },
    { value: "only me", label: "only me" },
  ];

  const [image, setImage] = useState();
  const [croppedImage, setCroppedImage] = useState();
  const [cropper, setCropper] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file.type.match("image.*") && file.size < 10000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Wrong file format or size!");
    }
  };

  const cropImage = () => {
    if (typeof cropper !== "undefined") {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      setImage(null);
    }
  };

  const deleteImage = () => {
    setCroppedImage(null);
    setImage(null);
  };

  return (
    <div className="add_form">
      <Formik
        initialValues={postData}
        onSubmit={onFormSubmit}
        validationSchema={postSchema}
      >
        {({ errors, onSubmit }) => (
          <Form onSubmit={onSubmit}>
            <div>Errors: {JSON.stringify(errors)}</div>
            <div>
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
              <label htmlFor="text">Text:</label>

              <Field id="text" name="text">
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
              <Box margin={5}>
                {!image && (
                  <Button variant="contained" component="label">
                    Choose image
                    <input type="file" hidden onChange={handleChange} />
                  </Button>
                )}
                {image && (
                  <Button variant="contained" onClick={deleteImage}>
                    Delete image
                  </Button>
                )}
                {image && (
                  <Cropper
                    src={image}
                    onInitialized={(instance) => setCropper(instance)}
                    rotatable={false}
                    viewMode={1}
                  />
                )}
                {image && (
                  <Button variant="contained" onClick={cropImage}>
                    Save
                  </Button>
                )}
                <img src={postData.imgSrc} alt="some source" />
              </Box>
              <Field
                component={FormikAutocomplete}
                name="available_to"
                label="available to"
                options={options}
                value={options.value}
              />
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
export default AddPost;
