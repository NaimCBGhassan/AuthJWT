import { Formik, Form, Field, ErrorMessage } from "formik";
import { TbCloudFog } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const AdminUserForm = ({ setView }) => {
  return (
    <div className=" flex-grow flex flex-col items-center">
      <header className="w-2/6 pt-4 flex justify-between text-sm text-slate-50 cursor-pointer">
        <NavLink to="/products">Back</NavLink>{" "}
        <button className="" onClick={() => setView(true)}>
          Create Products
        </button>
      </header>

      <Formik
        initialValues={{ username: "", email: "", password: "", roles: "" }}
        validationSchema={Yup.object({
          username: Yup.string().min(1, "Minimum 1 characters").required("Username is required"),
          email: Yup.string().min(1, "Minimum 1 characters").required("Email is required"),
          password: Yup.number().min(1, "Minimum 1 characters").required("Password is required"),
          roles: Yup.string().min(1, "Minimum 1 characters").required("Roles is required"),
        })}
        onSubmit={(values, actions) => {
          values.roles = [values.roles];
          if (values.roles.includes("admin")) values.roles.push("moderator");
          console.log(values);

          values.roles = values.roles[0];
          console.log(values.roles);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="h-5/6 w-2/6 bg-slate-500 px-5 py-5 shadow-md shadow-slate-800 rounded-md"
          >
            <h1 className="text-center text-2xl font-bold text-slate-50 mt-2">Create User</h1>
            <div className="h-16">
              <label htmlFor="username" className="block w-100 mt-4 text-sm text-slate-50 ">
                Username
              </label>
              <Field name="username" id="username" className="rounded px-2 py-1 w-full"></Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="username" />
            </div>
            <div className="h-16 mt-1">
              <label htmlFor="email" className="block w-100 text-sm text-slate-50">
                Email
              </label>
              <Field name="email" id="email" className="rounded px-2 py-1 w-full"></Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="email" />
            </div>
            <div className="h-16 mt-1">
              <label htmlFor="password" className="block w-100 text-sm text-slate-50">
                Password
              </label>
              <Field name="password" id="password" className="rounded px-2 py-1 w-full"></Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="password" />
            </div>
            <div className="h-20 mt-1">
              <label htmlFor="roles" className="block w-100 text-sm text-slate-50">
                Roles
              </label>
              <Field as="select" name="roles" id="roles" className="rounded px-2 py-1 w-full">
                <option value="">Seleccione un rol</option>
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
              </Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="roles" />
            </div>
            <button
              type="submit"
              className="px-3 py-1 w-full font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50 mt-3"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminUserForm;
