import { useState } from "react";

import { SignIn, SignUp } from "../components/";

const Sign = () => {
  const [sign, setSign] = useState(true);

  return <>{sign ? <SignIn /> : <SignUp />}</>;
};

export default Sign;
