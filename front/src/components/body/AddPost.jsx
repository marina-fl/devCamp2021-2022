import "./Body.css";
import moment from "moment";
import { useMutation } from "react-query";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import addPost from "../../containers/addPost/api/crud";
import Button from "@mui/material/Button";

const AddPost = ({ postData }) => {
  const postSchema = Yup.object().shape({
    text: Yup.string()
      .min(1, "Too Short!")
      .max(500, "Too Long!")
      .required("Add some text"),
    available_to: Yup.string()
      .oneOf(["all", "friends", "оnly me"])
      .required("choose option"),
    idusers: Yup.number().required(
      "write iduser until I understand what to do with this"
    ),
  });

  const mutation = useMutation((newPost) => addPost(newPost));

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
