import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDeleteUsers, useUpdateUsers } from "../../../api/users";

const AdminUserCard = ({ user }) => {
  const { username, email, roles, id } = user;
  const [view, setView] = useState(true);
  const token = sessionStorage.getItem("token");

  const updateUsers = useUpdateUsers();
  const deleteUsers = useDeleteUsers();

  return (
    <>
      {view && (
        <article className="h-64 hover:scale-105 grid  bg-slate-500 hover:bg-slate-400 shadow-md shadow-slate-800 rounded-md py-5 px-3 text-slate-50  text-center font-bold">
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>
            Role/s:
            {roles.map((role, index) => (
              <span key={index} className="block text-sm font-normal">
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </span>
            ))}
          </p>
          <div className="flex justify-between gap-1">
            <button
              className="px-2  font-bold rounded-md bg-green-700 hover:bg-green-600 text-slate-50"
              onClick={() => setView(false)}
            >
              Update
            </button>
            <button
              className="px-2 font-bold rounded-md bg-red-700 hover:bg-red-600 text-slate-50"
              onClick={() => deleteUsers.mutate({ id, token })}
            >
              Delete
            </button>
          </div>
        </article>
      )}
      {!view && (
        <article className="h-64 hover:scale-105 grid  bg-slate-500 hover:bg-slate-400 shadow-md shadow-slate-800 rounded-md py-5 px-3 text-center ">
          <Formik
            initialValues={{ username, password: "", roles: roles[0] }}
            validationSchema={Yup.object({
              roles: Yup.string().required("Role is required"),
            })}
            onSubmit={async (values, actions) => {
              try {
                const newValues = { ...values };
                newValues.roles = [newValues.roles];

                if (newValues.username === user.username || newValues.username === "") delete newValues.username;
                if (newValues.password === "") delete newValues.password;
                if (newValues.roles.includes("admin")) values.roles.push("moderator");
                await updateUsers.mutateAsync({ newValues, id, token });
                setView(true);
              } catch (error) {
                /*  handleErrors(error); */
              } finally {
                actions.setFieldValue("roles", values.roles[0]);
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form className="flex flex-col items" onSubmit={handleSubmit}>
                <div className="h-14">
                  <Field placeholder="Username" name="username" className="rounded px-2 py-1 w-full" />
                </div>
                <div className="h-14">
                  <Field
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="on"
                    className="rounded px-2 py-1 w-full"
                  />
                </div>
                <div className="h-14">
                  <Field as="select" name="roles" className="rounded px-2 py-1 w-full">
                    <option value="">Seleccione un rol</option>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                  </Field>
                  <ErrorMessage component="p" className="text-pink-700 text-sm text-left" name="roles" />
                </div>
                <div className="flex justify-between gap-1 grow">
                  <button
                    type="submit"
                    className="px-2  font-bold rounded-md bg-green-700 hover:bg-green-600 text-slate-50"
                  >
                    Update
                  </button>
                  <button
                    className="px-2 font-bold rounded-md bg-red-700 hover:bg-red-600 text-slate-50"
                    onClick={() => setView(true)}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </article>
      )}
    </>
  );
};

export default AdminUserCard;
