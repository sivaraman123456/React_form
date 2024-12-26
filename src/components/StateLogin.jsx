import { useState } from "react";
import React from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hook/useInput";
const StateLogin = () => {
  //  const {handleBlur:handleEmailBlur,handleValueChange:handleEmailChange,value:enteredEmail}= useInput('',isEmail)  this isEmail one function only can pass the argu

  const {
    handleBlur: handleEmailBlur,
    handleValueChange: handleEmailChange,
    value: enteredEmail,
    hasError: invalidEmail,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); //this  function  can pass more than one function argu

  const {
    handleBlur: handlePasswordBlur,
    handleValueChange: handlePasswordChange,
    value: enteredPassword,
    hasError: invalidPassword,
  } = useInput("", (value) => hasMinLength(value, 6)); //this  function  can pass more than one function argu

  function handleSubmit(e) {
    e.preventDefault();
    if (invalidEmail || invalidPassword) {
      return;
      // no executes longer
    }

    console.log("data:", enteredEmail, enteredPassword);
    handleEmailChange("");
    handlePasswordChange("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
          <Input
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            value={enteredEmail}
            onChange={handleEmailChange}
            error={invalidEmail && "please enter the valid email"}
          />
          <Input
            id="password"
            type="password"
            name="password"
            onBlur={handlePasswordBlur}
            value={enteredPassword}
            onChange={handlePasswordChange}
            error={invalidPassword && "please enter the valid password"}
          />
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    </div>
  );
};

export default StateLogin;
