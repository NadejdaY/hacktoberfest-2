import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().email("Invalid email format").required("Required"),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Password must contain 8 characters, one uppercase, one Lowercase and one number"
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
