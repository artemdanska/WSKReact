import useForm from "../hooks/formHooks";
import { useUser } from "../hooks/apiHooks";

const RegisterForm = () => {
  const { postUser } = useUser();

  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const doRegister = () => {
    // gives warning for inputs variable, but its still needed
    console.log(inputs);
    postUser(inputs)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div>
        <label htmlFor="reguser">Username</label>
        <input
          name="username"
          type="text"
          id="reguser"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="regemail">Email</label>
        <input
          name="email"
          type="email"
          id="regemail"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="regpassword">Password</label>
        <input
          name="password"
          type="password"
          id="regpassword"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
