import { VscEmptyWindow } from "react-icons/vsc";

export const EmptyWindow = ({ value }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full text-slate-50 mt-5">
      <p>There is no {value} </p>
      <VscEmptyWindow className="w-20 h-20" />
    </div>
  );
};
