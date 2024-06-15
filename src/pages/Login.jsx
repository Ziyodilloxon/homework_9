import { useLogin } from "../hooks/useLogin";
import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Login() {
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center ">
      <Form className="w-96 ">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <FormInput type="email" labelText="Email" name="email" />
        <FormInput type="password" labelText="Password" name="password" />
        <Link to="/signin">
          <h2 className="align-center font-bold mt-6 mb-2">
            Siz birinchi marta kirishingizmi ?
          </h2>
        </Link>
        <div>
          <button onClick={signUpWithGoogle} className="btn btn-secondary btn-block mt-6 mb-2">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
