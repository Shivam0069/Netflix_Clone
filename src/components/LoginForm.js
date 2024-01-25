import React from "react";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { user_profile } from "../utils/constants";

const LoginForm = () => {
  const [signIn, setSignIn] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function signinHandler() {
    setLoading(true);
    const message = Validate(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) {
      setLoading(false);
      return;
    }
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_profile,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setLoading(false);
              setErrMessage(error.message);
            });
          setLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          setErrMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setErrMessage(error.code + " " + error.message);
        });
    }
  }
  const dispatch = useDispatch;
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="m-auto bg-black bg-opacity-80 p-8 sm:w-[340px]  w-[300px]  text-sm text-white"
    >
      <p className="text-3xl my-2">{signIn ? "Sign In" : "Sign Up"}</p>
      {!signIn && (
        <input
          ref={name}
          name="Full name"
          type="text"
          placeholder="Full name"
          className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
        />
      )}
      <input
        ref={email}
        autoComplete="on"
        type="text"
        placeholder="Email or phone number"
        className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
      />
      <input
        ref={password}
        autoComplete="on"
        type="password"
        placeholder="password"
        className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
      />
      <p className="text-red-600 text-sm font-semibold py-2">{errMessage}</p>
      <button
        className="p-2 my-6 w-full bg-red-600 rounded-sm"
        onClick={signinHandler}
      >
        {loading ? "Logging in..." : signIn ? "Sign In" : "Sign Up"}
      </button>
      <p className="my-8" onClick={() => setSignIn(!signIn)}>
        {signIn ? (
          <span>
            New to Netflix?
            <span
              onClick={() => {
                email.current.value = null;
                password.current.value = null;

                setErrMessage(null);
              }}
              className="font-semibold mx-1 cursor-pointer underline"
            >
              Sign Up
            </span>
            now
          </span>
        ) : (
          <span>
            Already registered?
            <span
              onClick={() => {
                email.current.value = null;
                password.current.value = null;

                setErrMessage(null);
              }}
              className="font-semibold mx-1 cursor-pointer underline"
            >
              Sign In
            </span>
          </span>
        )}
      </p>
    </form>
  );
};

export default LoginForm;
