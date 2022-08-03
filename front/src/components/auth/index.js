import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "@mui/material/Button";
import { useMutation } from "react-query";
import { login } from "./api/auth";
import authContext from "../../authContext";

const LoginForm = () => {
  const schema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const { mutate: sendLogin } = useMutation(["auth"], (data) => login(data));
  const { setUserData } = useContext(authContext);

  const onFormSubmit = async (data) => {
    console.log(data);

    try {
      const result = await sendLogin(data);
      if (result?.user) {
        setUserData({ ...result, authenticated: true });
        localStorage.setItem(
          "auth",
          JSON.stringify({ ...result, authenticated: true })
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {({ errors, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>Errors: {JSON.stringify(errors)}</div>

          <Field type="email" name="email" />
          <Field type="password" name="password" />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
