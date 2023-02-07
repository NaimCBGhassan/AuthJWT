import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useSignUp } from "../api/users";

const SignUp = () => {
  const [error, setError] = useState(null);

  const { mutateAsync } = useSignUp();

  useEffect(() => {
    sessionStorage.removeItem("token");
  }, []);

  const navigate = useNavigate();

  const handleErrors = (data) => {
    if (data.msg.includes("Username")) setError({ username: true, msg: data.msg });
    if (data.msg.includes("Email")) setError({ email: true, msg: data.msg });
    if (data.msg.includes("password")) setError({ password: true, msg: data.msg });

    setTimeout(() => setError(false), 2000);
  };

  return (
    <div className=" flex justify-center items-center absolute inset-0">
      <div className=" w-4/6 sm:w-2/6 bg-slate-500 px-5 py-5 shadow-md shadow-slate-800 rounded-md">
        <h1 className="text-center text-2xl font-bold text-slate-50 ">SignUp</h1>
        <Formik
          initialValues={{ username: "", email: "", password: "", roles: [] }}
          validationSchema={Yup.object({
            username: Yup.string().min(5, "Minimum 5 characters").required("Username is required"),
            email: Yup.string().email("Invalid format").required("Email is required"),
            password: Yup.string().min(5, "Minimum 5 characters").required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            try {
              const token = await mutateAsync({ values });
              sessionStorage.setItem("token", token);
              navigate("/products");
            } catch (error) {
              handleErrors(error);
            }
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form className="flex flex-col gap-1  mt-3" onSubmit={handleSubmit}>
              <div className="h-16">
                <label htmlFor="username" className="block w-100 text-sm text-slate-50">
                  Username
                </label>
                <Field component="input" name="username" id="username" className="rounded px-2 py-1 w-full" />
                <ErrorMessage component="p" className="text-pink-700 text-sm" name="username" />
                {error?.username && <p className="text-pink-700 text-sm">{error.msg}</p>}
              </div>

              <div className="h-16">
                <label htmlFor="email" className="block w-100 text-sm text-slate-50 font-">
                  Email
                </label>
                <Field type="email" name="email" id="email" className="rounded px-2 py-1 w-full" />
                <ErrorMessage component="p" className="text-pink-700 text-sm" name="email" />
                {error?.email && <p className="text-pink-700 text-sm">{error.msg}</p>}
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
                className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50 mt-2 mb-2"
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

export default SignUp;
