import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from '../landing/LandingNavbar.jsx';

import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  CodeWrapper
} from "./formStyles.js";

const validationSchema = Yup.object().shape({
  userName: Yup
    .string('Enter your user name')
    .required('❌ User name is required'),
  password: Yup
    .string('Enter your password')
    .min(8, '❌ Password should be of minimum 8 characters length')
    .required('❌ Password is required'),
});

const LoginForm = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState('');

  const handleChange = (event) => {
    setFormValues(event.target.value);
  };

  const handleHome = () => {
    history.push('/home');
  };

  const handleSignup = () => {
    history.push('/signup')
  }

  return (
    <div>

      <Navbar />
      <PageWrapper>
        <Title className="gradient-text">
          Sign in to Fetch Coin
        </Title>
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setFormValues(values);

            const timeOut = setTimeout(() => {
              actions.setSubmitting(false);
              handleHome(alert('WELCOME BACK!!'))
              clearTimeout(timeOut);
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            isValidating,
            isValid
          }) => {
            return (
              <>
                <Form name="contact" method="post" onSubmit={handleSubmit}>
                  <Label htmlFor="userName">
                    Email
                    <Input
                      type="text"
                      name="email"
                      autoCorrect="off"
                      autoComplete="email"
                      valid={touched.userName && !errors.userName}
                      error={touched.userName && errors.userName}
                    />
                  </Label>
                  {errors.userName && touched.userName && (
                    <StyledInlineErrorMessage>
                      {errors.userName}
                    </StyledInlineErrorMessage>
                  )}
                  <Label htmlFor="password">
                    Password
                    <Input
                      type="text"
                      name="password"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="password"
                      valid={touched.password && !errors.password}
                      error={touched.password && errors.password}
                    />
                  </Label>
                  <ErrorMessage name="password">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                  <Submit type="submit" disabled={!isValid || isSubmitting}>
                    {isSubmitting ? `Logging In...` : `Submit`}
                  </Submit>
                </Form>
                <Label onClick={handleSignup}><u>Don't have a Fetch Coin account?</u></Label>
              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </div>
  );
};

export default LoginForm;
