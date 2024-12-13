import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const User = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const image = user ? user.photoURL : "/userImage.png";
  const name = user ? user.displayName : "Aqui deberia ir tu nombre";

  return (
    <>
      <div className="cardi">
      <h1> <i className="fa-solid fa-fire"></i> SeprenChat</h1>
        <article className="card-user">
          <img src={image} alt="userImage" referrerPolicy="" />
          <p> {name} </p>
          {user ? <Logout /> : <Login />}
        </article>
      </div>
    </>
  );
};

export default User;
