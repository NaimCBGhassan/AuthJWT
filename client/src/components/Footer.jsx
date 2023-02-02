import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { TbWebhook } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 max-w-screen-2xl z-0 flex justify-between items-center bg-slate-900  px-8 py-2">
      <div className=" flex justify-center gap-7">
        <AiOutlineInstagram className="h-4 w-4 p-0 text-slate-50" />
        <AiOutlineTwitter className="h-4 w-4 p-0 text-slate-50" />
        <AiFillFacebook className="h-4 w-4 p-0 text-slate-50" />
        <AiOutlineMail className="h-4 w-4 p-0 text-slate-50" />
      </div>
      <p className="text-slate-50 ">
        <TbWebhook className="inline" /> <span className="text-xs">Naim Chaya</span>
      </p>
    </div>
  );
};

export default Footer;
