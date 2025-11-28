import useForm from "../hooks/formHooks";
import { useAuthentication } from "../hooks/apiHooks";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const { postLogin } = useAuthentication();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = () => {
    // gives warning for inputs variable, but its still needed
    console.log(inputs);
    postLogin(inputs)
      .then((result) => {
        console.log("Login successful:", result);
        if (result.token) {
          localStorage.setItem("token", result.token);
          navigate("/");
        }
      })
      .catch((error) => console.error("Login failed:", error));
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
