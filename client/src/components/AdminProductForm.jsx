import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const AdminProductForm = ({ setView }) => {
  return (
    <div className="flex-grow flex flex-col items-center ">
      <header className="w-2/6 pt-4 flex justify-between text-sm text-slate-50 cursor-pointer">
        <NavLink to="/products">Back</NavLink>{" "}
        <button className="" onClick={() => setView(false)}>
          Create Users
        </button>
      </header>

      <Formik
        initialValues={{ name: "", category: "", price: "", imgURL: "" }}
        validationSchema={Yup.object({
          name: Yup.string().min(1, "Minimum 1 characters").required("Name is required"),
          category: Yup.string().min(1, "Minimum 1 characters").required("Category is required"),
          price: Yup.number().min(1, "Minimum 1 characters").required("Price is required"),
          imgURL: Yup.string().min(1, "Minimum 1 characters").required("Image is required"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="h-5/6 w-2/6 bg-slate-500 px-5 py-5 shadow-md shadow-slate-800 rounded-md"
          >
            <h1 className="text-center text-2xl font-bold text-slate-50 mt-2">Create Products</h1>
            <div className="h-16">
              <label htmlFor="name" className="block w-100 mt-4 text-sm text-slate-50 ">
                Name
              </label>
              <Field name="name" id="name" className="rounded px-2 py-1 w-full"></Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="name" />
            </div>
            <div className="h-16 mt-1">
              <label htmlFor="category" className="block w-100 text-sm text-slate-50">
                Category
              </label>
              <Field name="category" id="category" className="rounded px-2 py-1 w-full"></Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="category" />
            </div>
            <div className="h-16 mt-1">
              <label htmlFor="price" className="block w-100 text-sm text-slate-50">
                Price
              </label>
              <Field name="price" id="price" className="rounded px-2 py-1 w-full"></Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="price" />
            </div>
            <div className="h-20 mt-1">
              <label htmlFor="imgURL" className="block w-100 text-sm text-slate-50">
                Image
              </label>
              <Field name="imgURL" id="imgURL" className="rounded px-2 py-1 w-full"></Field>
              <ErrorMessage component="p" className="text-pink-700 text-sm" name="imgURL" />
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

export default AdminProductForm;
