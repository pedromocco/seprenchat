import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Logout = () => {
  const logOut = () => {
    signOut(auth);
  };

  return (
    <button className="btn-login btn-logout" onClick={logOut}>
      Logout
    </button>
  );
};

export default Logout;
