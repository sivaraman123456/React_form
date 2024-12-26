import { useEffect, useState } from "react";

export default function Login() {
  const [enterValues, setEnterValues] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();

    console.log("submitted..!", enterValues);
    setEnterValues({
      email: "",
      password: "",
    });
  }

  function handleValueChange(name, value) {
    setEnterValues((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleValueChange("email", e.target.value)}
            value={enterValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleValueChange("password", e.target.value)}
            value={enterValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
