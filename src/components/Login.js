import React, { useEffect } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div className="relative" style={backgroundStyle}>
      <Header />
      <div className="h-full w-full flex">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
