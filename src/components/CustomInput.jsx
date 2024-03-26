import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);// useField is a hook provided by Formik that helps connect form fields to the Formik context. It returns an array with two elements: field and meta.
//field: This object contains properties and event handlers that you can spread onto form inputs. 
//It includes attributes like name, value, onChange, onBlur,etc.
  
//meta: This object contains metadata about the field's state, such as whether it has been touched (touched), whether 
//it's currently being focused (active), and any error messages (error) associated with the field.
return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}  //same as basic
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}  
    </>
  );
};
export default CustomInput;