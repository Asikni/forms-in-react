import React from "react";
import { Formik } from "formik";
import { checkSchema } from "../schemas";
import Items from "../schemas/itemSchema";
import headings from "./headingsData";

const Checkbox = () => {
  const initialCheckValues = headings.map(() => false); // Create an array of false values based on the number of checkboxes

  return (
    <Formik
      initialValues={{
        checks: initialCheckValues,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={checkSchema}
    >
      {({ setFieldValue, values }) => (  //values store initial form values in the form of an object ie values=initialValues
        <div>

          <Items
            headings={headings}
            values={values}
            setFieldValue={setFieldValue}
          />
        </div>
      )}
    </Formik>
  );
};

export default Checkbox;