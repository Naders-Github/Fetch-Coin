import React from "react";
import { Field } from "formik";

function FilteredProps({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export default FilteredProps;
