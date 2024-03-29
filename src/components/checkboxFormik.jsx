import React from "react";
import { Formik, Form } from "formik";
import { checkSchema } from "../schemas";

const Checkbox = () => {
  
  return (
<Formik
initialValues={{
  checkOne: false,
  checkTwo:false
}}
onSubmit={async (values) => {
  await new Promise((r) => setTimeout(r, 500));
  alert(JSON.stringify(values, null, 2));
}}
validationSchema={ checkSchema }
>
{
  ({setFieldValue,values}) => (
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <div style={{display:"flex"}}>
      <div className="parentContainer" ></div>
      <div className="roundBox" ></div>
    </div>
      <div style={{display:"flex"}}>
        <div className="parentContainer" ></div>
        <div className="roundBox" style={{backgroundColor: values.checkTwo ? 'red' : ""  }} onClick={()=>{ setFieldValue("checkTwo",true)}}></div>
      </div>
    </div>
  )
}
</Formik>
  );
};

export default Checkbox;
