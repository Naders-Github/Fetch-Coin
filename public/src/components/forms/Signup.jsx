import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const validationSchema = Yup.object({
  username: Yup
    .string('Enter your username')
    .min(4, 'Enter valid username')
    .required('Username is required'),
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  first: Yup
    .string('Enter your first name')
    .required('First name is required'),
  last: Yup
    .string('Enter your last name')
    .required('Last name is required'),
});

const styles = {
  root: {
    background: '#1a1a1c',
    paddingLeft: '20px',
  },
  input: {
    color: 'white',
  },
};
const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      first: '',
      last: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios.post(`/api/coins`, {
        username: values.username,
        password: values.password,
        email: values.email,
        first: values.first,
        last: values.last,
      }).then(async () => {
        const { data } = await axios.get(`/api/coins`, {
          params: {
            username: values.username,
            password: values.password,
          },
        });
        dispatch({ type: 'user', user: data[0] });
        history.push('/home');
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="first"
          name="first"
          label="First Name"
          type="first"
          value={formik.values.first}
          onChange={formik.handleChange}
          error={formik.touched.first && Boolean(formik.errors.first)}
          helperText={formik.touched.first && formik.errors.first}
          defaultValue="color"
          // className={classes.root}
          // InputProps={{
          //   className: classes.input,
          // }}
        />
        <TextField
          fullWidth
          id="last"
          name="last"
          label="Last name"
          type="last"
          value={formik.values.last}
          onChange={formik.handleChange}
          error={formik.touched.last && Boolean(formik.errors.last)}
          helperText={formik.touched.last && formik.errors.last}
          defaultValue="color"
          // className={classes.root}
          // InputProps={{
          //   className: classes.input,
          // }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          // className={classes.root}
          // InputProps={{
          //   className: classes.input,
          // }}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          defaultValue="color"
          // className={classes.root}
          // InputProps={{
          //   className: classes.input,
          // }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          defaultValue="color"
          // className={classes.root}
          // InputProps={{
          //   className: classes.input,
          // }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          <span style={{ color: 'white' }}>Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(SignUp);
