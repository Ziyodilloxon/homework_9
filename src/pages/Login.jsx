import React, { useEffect } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <FormInput type="email" labelText="Email" name="email" />
        <FormInput type="password" labelText="Password" name="password" />
        <Link to="/signin">
          <h2 className="align-center font-bold mt-6 mb-2">
          Siz birinchi martda kiryapsizmi ?
          </h2>
        </Link>
        <div>
          <button className="btn btn-fifty btn-block mt-3" type="submit">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
