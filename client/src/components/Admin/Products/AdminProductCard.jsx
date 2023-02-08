import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDeleteProducts, useUpdateProducts } from "../../../api/products";

/* import { useDeleteUsers, useUpdateUsers } from "../../../api/sign"; */

const AdminProductCard = ({ product }) => {
  const { name, category, price, imgURL, _id } = product;
  const [view, setView] = useState(true);
  const token = sessionStorage.getItem("token");

  const updateProducts = useUpdateProducts();
  const deleteProducts = useDeleteProducts();

  return (
    <>
      {view && (
        <article className="h-64 hover:scale-105 grid  bg-slate-500 hover:bg-slate-400 shadow-md shadow-slate-800 rounded-md py-5 px-3 text-slate-50  text-center font-bold">
          <p>Name: {name}</p>
          <p>Category: {category}</p>
          <p>Price: {price}$</p>
          <p>Image: {imgURL}</p>
          <div className="flex justify-between gap-1">
            <button
              className="px-2  font-bold rounded-md bg-green-700 hover:bg-green-600 text-slate-50"
              onClick={() => setView(false)}
            >
              Update
            </button>
            <button
              className="px-2 font-bold rounded-md bg-red-700 hover:bg-red-600 text-slate-50"
              onClick={() => deleteProducts.mutate({ _id, token })}
            >
              Delete
            </button>
          </div>
        </article>
      )}
      {!view && (
        <article className="h-64 hover:scale-105 grid  bg-slate-500 hover:bg-slate-400 shadow-md shadow-slate-800 rounded-md py-5 px-3 text-center ">
          <Formik
            initialValues={{ name, category, price, imgURL }}
            onSubmit={async (values, actions) => {
              try {
                const newValues = { ...values };
                if (newValues.name === name || newValues.name === "") delete newValues.name;
                if (newValues.category === category || newValues.category === "") delete newValues.category;
                if (newValues.price === price || newValues.price === "") delete newValues.price;
                if (newValues.imgURL === price || newValues.price === "") delete newValues.imgURL;
                await updateProducts.mutateAsync({ newValues, _id, token });
              } catch (error) {
                console.log(error);
              } finally {
                setView(true);
              }

              /*  await updateUsers.mutateAsync({ newValues, id, token }); */
            }}
          >
            {({ handleSubmit }) => (
              <Form className="flex flex-col items" onSubmit={handleSubmit}>
                <div className="h-11">
                  <Field placeholder="Name" name="name" className=" rounded px-2 py-1 w-full" />
                </div>
                <div className="h-11">
                  <Field placeholder="Category" name="category" className=" rounded px-2 py-1 w-full" />
                </div>
                <div className="h-11">
                  <Field placeholder="Price" name="price" className="rounded px-2 py-1 w-full" />
                </div>
                <div className="h-11">
                  <Field placeholder="Image" name="imgURL" className="rounded px-2 py-1 w-full" />
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

export default AdminProductCard;
