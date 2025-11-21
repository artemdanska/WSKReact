import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/authHooks';

const LoginForm = () => {
  const {postLogin} = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = (inputs) => {
    postLogin(inputs)
      .then((result) => {
        console.log('Login successful:', result);
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    () => doLogin(inputs),
    initValues,
  );

  console.log(inputs);

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
