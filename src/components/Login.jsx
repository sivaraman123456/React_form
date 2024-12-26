import { useRef ,useState} from "react";

export default function Login() {
const [invalidEmail, setInvalidEmail] = useState(false)

  const enterEmail = useRef();
  const enterPassword = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(
      "submitted..!",
      enterEmail.current.value,
      enterPassword.current.value
    );
    let enteredEmail =enterEmail.current.value
let invalidEmail= !enteredEmail.includes('@')

if(invalidEmail)
{
  setInvalidEmail(true)
}

    enterEmail.current.value = "";
    enterPassword.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={enterEmail} />
          <div className="control-error">
            {invalidEmail && <p>Please enter the valid email</p> }
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={enterPassword}
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
