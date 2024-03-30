import React from "react";
import { Formik, Form } from "formik";
import { checkSchema } from "../schemas";

const Checkbox = () => {
  return (
    <Formik
      initialValues={{
        checkOne: false,
        checkTwo: false,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={checkSchema}
    >
      {(
        { setFieldValue, values } //values is a destructured object passed as a parameter to the render prop function provided to the Formik component. This object holds the current values of the form fields defined in initialValues.
      ) => (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ display: "flex" }}>
            <div className="parentContainer"> This is checkbox One</div>
            <div
              className="roundBox"
              style={{ backgroundColor: values.checkOne ? "green" : "" }}
              onClick={() => {
               
           
                // setFieldValue("checkOne", true);
                setFieldValue("checkOne",!values.checkOne)
                setFieldValue("checkTwo", false);
              }}
            ></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="parentContainer">  This is checkbox Two</div>
            <div
              className="roundBox"
              style={{ backgroundColor: values.checkTwo ? "red" : "" }}
              onClick={() => {
                setFieldValue("checkTwo",!values.checkTwo)
                setFieldValue("checkOne", false)
                // console.log(values);
              }}
            ></div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Checkbox;
