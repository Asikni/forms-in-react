import { useField } from "formik";

const SubCommentSchema = ({ label, ...props }) => {
  const [field, meta] = useField(props);
return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className="subCommentSection" //same as basic
      /> 
    </>
  );
};
export default SubCommentSchema;