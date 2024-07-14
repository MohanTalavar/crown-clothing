import React, { useState } from "react";
import "./sign-in-style.scss";
import { FormInput } from "../form-input/form-input-component";
import { CustomButton } from "../custom-button/custom-button-component";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          required
          label="email"
          value={email}
          handleChange={handleInputChange}
        />

        <FormInput
          type="password"
          name="password"
          id="password"
          required
          label="password"
          value={password}
          handleChange={handleInputChange}
        />

        <CustomButton type="submit">SIGN IN</CustomButton>
      </form>
    </div>
  );
};
