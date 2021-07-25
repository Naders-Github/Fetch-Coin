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
  firstName: Yup
    .string('Enter your first name')
    .required('❌ First name is required'),
  lastName: Yup
    .string('Enter your last name')
    .required('❌ Last name is required'),
  email: Yup
    .string('Enter your email')
    .email('❌ Invalid Email')
    .required('❌Email is required'),
  password: Yup
    .string('Enter your password')
    .min(8, '❌ Password should be of minimum 8 characters length')
    .required('❌ Password is required'),
});

const SignupForm = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState('');

  const handleHome = () => {
    history.push('/home');
  };

  const handleLogin = () => {
    history.push('/login');
  };

  const handleChange = (event) => {
    setFormValues(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <PageWrapper>
        <Title className="gradient-text">
          Create your account
        </Title>
        <Formik
          initialValues={{
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setFormValues(values);

            const timeOut = setTimeout(() => {
              actions.setSubmitting(false);
              handleHome(alert('WELCOME TO FETCH COIN!!'))
              clearTimeout(timeOut);
            }, 2500);
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
                    User Name
                    <Input
                      type="text"
                      name="userName"
                      autoCorrect="off"
                      autoComplete="name"
                      // placeholder="your userName"
                      // onChange={handleChange}
                      valid={touched.userName && !errors.userName}
                      error={touched.userName && errors.userName}
                    />
                  </Label>
                  {errors.userName && touched.userName && (
                    <StyledInlineErrorMessage>
                      {errors.userName}
                    </StyledInlineErrorMessage>
                  )}
                  <Label htmlFor="firstName">
                    First Name
                    <Input
                      type="text"
                      name="firstName"
                      autoCorrect="off"
                      // placeholder="your firstName"
                      valid={touched.firstName && !errors.firstName}
                      error={touched.firstName && errors.firstName}
                    />
                  </Label>
                  {errors.firstName && touched.firstName && (
                    <StyledInlineErrorMessage>
                      {errors.firstName}
                    </StyledInlineErrorMessage>
                  )}
                  <Label htmlFor="lastName">
                    Last Name
                    <Input
                      type="text"
                      name="lastName"
                      autoCorrect="off"
                      autoComplete="name"
                      // placeholder="your lastName"
                      valid={touched.lastName && !errors.lastName}
                      error={touched.lastName && errors.lastName}
                    />
                  </Label>
                  {errors.lastName && touched.lastName && (
                    <StyledInlineErrorMessage>
                      {errors.lastName}
                    </StyledInlineErrorMessage>
                  )}
                  <Label htmlFor="email">
                    Email
                    <Input
                      type="text"
                      name="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                      // placeholder="your email"
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />
                  </Label>
                  <ErrorMessage name="email">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                  <Label htmlFor="password">
                    Password
                    <Input
                      type="text"
                      name="password"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="password"
                      // placeholder="your password"
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
                    {isSubmitting ? `Creating Account...` : `Submit`}
                  </Submit>
                </Form>
                <Label onClick={handleLogin}><u>Already have a Fetch Coin account?</u></Label>
              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </div>
  );
};

export default SignupForm;
