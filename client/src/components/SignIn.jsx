import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { axiosSignIn } from "../api/sign";

const SignIn = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    sessionStorage.removeItem("token");
  }, []);

  const navigate = useNavigate();

  const handleErrors = (data) => {
    data.msg.includes("password")
      ? setError({ password: true, msg: data.msg })
      : setError({ username: true, msg: data.msg });

    setTimeout(() => setError(false), 2000);
  };

  return (
    <div className=" flex justify-center items-center absolute inset-0">
      <div className="h-3/6 w-2/6 bg-slate-500 px-5 py-5 shadow-md shadow-slate-800 rounded-md">
        <h1 className="text-center text-2xl font-bold text-slate-50 mt-2">Login</h1>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string().min(1, "Minimum 1 characters").required("Username is required"),
            password: Yup.string().min(1, "Minimum 1 characters").required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            const data = await axiosSignIn(values);
            if (data.token) {
              sessionStorage.setItem("token", data.token);
              navigate("/products");
            } else {
              handleErrors(data);
            }
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form className="flex flex-col gap-2  mt-5" onSubmit={handleSubmit}>
              <div className="h-16">
                <label htmlFor="username" className="block w-100 text-sm text-slate-50">
                  Username
                </label>
                <Field component="input" name="username" id="username" className="rounded px-2 py-1 w-full" />
                <ErrorMessage component="p" className="text-pink-700 text-sm" name="username" />
                {error?.username && <p className="text-pink-700 text-sm">{error.msg}</p>}
              </div>

              <div className="h-16">
                <label htmlFor="password" className="block w-100 text-sm text-slate-50 font-">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="on"
                  className="rounded px-2 py-1 w-full"
                />
                <ErrorMessage component="p" className="text-pink-700 text-sm" name="password" />
                {error?.password && <p className="text-pink-700 text-sm">{error.msg}</p>}
              </div>

              <button
                type="submit"
                className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50 mt-5"
                disabled={isSubmitting}
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
