import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import Swal from "sweetalert2";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const handleSignInForm = (e) => {
    e.preventDefault();
    const { success, obj } = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm
    );
    setErrorMessage(obj);
    if (!success) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          Swal.fire({
            title: "Success",
            text: "Login Successfully",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          const user = userCredential.user;
        })
        .catch((error) => {
          Swal.fire({
            title: "Login Failed",
            text: "Email or Password does not match",
            icon: "error",
            timer: 2000,
            showConfirmButton: false,
          });
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  console.log(errorMessage);

  const handleToggleSignIn = () => {
    email.current.value = null;
    password.current.value = null;
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
          className="w-screen h-screen"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-2/5 absolute px-10 py-8 bg-black mx-auto left-0 right-0 mt-28 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-4xl my-4 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-800 rounded-lg"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="my-4 p-4 w-full bg-gray-800 rounded-lg"
        />

        {errorMessage?.emailErrorMessage && (
          <p className="text-red-500 w-full text-xs flex items-center justify-center">
            {errorMessage?.emailErrorMessage}
          </p>
        )}

        <input
          className="my-4 p-4 w-full bg-gray-800 rounded-lg"
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />

        {errorMessage?.passwordErrorMessage && (
          <p className="text-red-500 w-full text-xs flex items-center justify-center">
            {errorMessage?.passwordErrorMessage}
          </p>
        )}

        <button
          onClick={handleSignInForm}
          className="my-4 p-4 bg-red-700 w-full rounded-lg text-lg"
        >
          Submit
        </button>

        <p
          className="my-4 py-4 cursor-pointer"
          onClick={handleToggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
