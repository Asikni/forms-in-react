import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values); //values: An object containing the current values of the form fields.
  console.log(actions); //actions: An object containing various helper functions provided by Formik to interact with the form state and perform form-related operations.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

//Formik provides a set of hooks that you can use to build forms. The primary hook is useFormik(), which returns an object containing form state and
//helper functions to handle form submission, validation, and field values. With Formik hooks, you have more flexibility in how you structure
//your form logic, as you manually manage the form state and interaction.

const BasicForm = () => {
  const {
    values, //formic states
    errors,
    touched,
    isSubmitting,
    handleBlur, //helper functions
    handleChange,
    handleSubmit,
  } = useFormik({
    //using formik hooks here
    initialValues: {
      //form fields
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema, //a validation schema defines what is considered valid or acceptable input for each field.
    onSubmit,
  });

 

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {" "}
      {/* backend side of form submission */}
      <label htmlFor="email">Email</label>
      <input
        value={values.email} //email here comes from what we name our form fields
        onChange={handleChange}
        id="email"
        type="email"  //bex of this field knows this is an email field & there should be a proper format for that ...like not missing an @..shows that kinda error stuff
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""} //if there is an error and if the user clicked outside the field then display the error
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>} {/*  errors as per what is defined in the validation schema*/}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};
export default BasicForm;
