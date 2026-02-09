import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "field required";
      
        errors.email = "username should be an email";
      }

 
      if (!values.password) {
        errors.password = "field required";
      }

      return errors;
    },

    onSubmit: () => {
      alert("Login Successful");
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>

      <form onSubmit={formik.handleSubmit}>
        {/* Email Field */}
        <div>
          <input
            id="emailField"
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div id="emailError">
            {formik.errors.email}
          </div>
        </div>

        {/* Password Field */}
        <div>
          <input
            id="pswField"
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div id="pswError">
            {formik.errors.password}
          </div>
        </div>

        {/* Submit Button */}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
