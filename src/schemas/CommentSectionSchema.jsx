import { useField } from "formik";

const MainCommentSchema = ({ label, ...props }) => {
  const [field, meta] = useField(props);
return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className="mainCommentSection" //same as basic
      /> 
    </>
  );
};
export default MainCommentSchema;