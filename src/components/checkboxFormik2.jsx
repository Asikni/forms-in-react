import React from "react";
import { Formik } from "formik";
import { checkSchema } from "../schemas";
import Items2 from "../schemas/ItemsSchema2";
import headings from "./headingsData";

const CheckBoxFormik2 = () => {
  const initialCheckValue = false // Create an array of false values based on the number of checkboxes

  return (
    <Formik
      initialValues={{
        checks: initialCheckValue,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={checkSchema}
    >
      {(
        { setFieldValue, values } //values store initial form values in the form of an object ie values=initialValues
      ) => (
        <div>
          <Items2
            headings={headings}
            values={values}
            setFieldValue={setFieldValue}
          />
        </div>
      )}
    </Formik>
  );
};

export default CheckBoxFormik2;
