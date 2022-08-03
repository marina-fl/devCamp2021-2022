import "./Body.css";

import { useMutation } from "react-query";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import addPost from "../../containers/addPost/api/crud";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const AddPost = ({ postData }) => {
  const postSchema = Yup.object().shape({
    text_: Yup.string()
      .min(1, "Too Short!")
      .max(500, "Too Long!")
      .required("Add some text"),
    available_to: Yup.string()
      .oneOf(["all", "friends", "оnly me"])
      .required("choose option"),
  const onFormSubmit = (newPost) => {
    mutation.mutate({
      idusers: newPost.idusers,
      text_: newPost.text_,
    });
  };

  return (
    <div className="add_form">
      <Formik
        initialValues={postData}
        onSubmit={onFormSubmit}
        validationSchema={postSchema}
      >
        {({ errors }) => (
          <Form>
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
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <ErrorMessage name="idusers" />
              <label htmlFor="text">Text:</label>

              <Field id="text_" name="text_">
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
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <ErrorMessage name="text_" />
            </div>

            <div role="group" aria-labelledby="radio-group">
              <label>
                <Field type="radio" name="available_to" value="all" />
                All
              </label>
              <label>
                <Field type="radio" name="available_to" value="friends" />
                Friends
              </label>
              <label>
                <Field type="radio" name="available_to" value="only me" />
                Only me
              </label>
            </div>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorMessage name="available_to" />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AddPost.propTypes = {
  postData: PropTypes.arrayOf(
    PropTypes.shape({
      idusers: PropTypes.number.isRequired,
      text_: PropTypes.string.isRequired,
      available_to: PropTypes.string.oneOf(["all", "friends", "оnly me"])
        .isRequired,
    })
  ),
};
=======

export default AddPost;
