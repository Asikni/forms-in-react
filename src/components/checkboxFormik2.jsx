import React from "react";
import { Formik } from "formik";
import { checkSchema } from "../schemas";
import Items2 from "../schemas/ItemsSchema2";
import headings from "./headingsData";

const CheckBoxFormik2 = () => {
 

  return (
    <Formik
      initialValues={{
     
        selection: " Job 1",
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
         
            setFieldValue={setFieldValue}
            value={values.selection}
          />
        </div>
      )}
    </Formik>
  );
};

export default CheckBoxFormik2;
