import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }} // "Accepted Terms of Service"
      //these are form fields and we can name them anything
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(
        { isSubmitting, isValid } // defines a function component that takes isSubmitting as argument
        //isSubmitting is a boolean value provided by Formik to indicate whether the form is currently being submitted.
      ) => (
        <Form>
          <CustomInput
            label="Username"
            name="username" //attribute for identifying form fields(uniquely identifies form field) and connecting them to form libraries like Formik
            type="text" //if we put number here and then try to input text..that will not happen , wont allow
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />{" "}
          {/*by ticking it will value true */}
          <button disabled={isSubmitting || !isValid } type="submit">  
          {/*When the form is submitted (e.g., by clicking a submit button), 
          Formik sets isSubmitting to true before it starts the submission process.  */}
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
