import { useState } from "react";
import React from "react";

const StateLogin = () => {
  const [enterValues, setEnterValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit,setDidEdit]=useState({
    email:false,
    password:false
  })
const emailInvalid= didEdit.email && !enterValues.email.includes("@")

  function handleValueChange(name, value) {
    setEnterValues((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("data:", enterValues);
    setEnterValues({
      email: "",
      password: "",
    });
  }
function handleBlur(name)
{
setDidEdit((prevState)=>({
    ...prevState,
    [name]:true
}))
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onBlur={(e)=>handleBlur("email")}
              onChange={(e) => handleValueChange("email", e.target.value)}
              value={enterValues.email}
            />
            <div className="control-error">
               {emailInvalid &&  <p> Enter the correct email</p> }

            </div>
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onBlur={(e)=>handleBlur("password")}
              value={enterValues.password}
              onChange={(e) => handleValueChange("password", e.target.value)}
            />
          </div>
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
