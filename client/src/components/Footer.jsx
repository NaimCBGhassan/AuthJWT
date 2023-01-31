const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-slate-900  px-10 py-2">
      <div>
        <button className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50 mx-4">
          SignIn
        </button>
        <button className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50">SignUp</button>
      </div>
    </div>
  );
};

export default Footer;
