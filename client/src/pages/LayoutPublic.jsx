import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/index";

const LayoutPublic = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPublic;
