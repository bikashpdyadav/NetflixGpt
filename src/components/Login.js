import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
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
          className=" h-screen w-screen"
        />
      </div>
      <div>
        <form className="absolute flex flex-col xs:w-3/4 xsm:w-2/4 sm:w-2/4 lmd:w-1/4 m-auto left-0 right-0 gap-4 items-center justify-center bg-black h-5/6 mt-20 bg-opacity-80">
          <h1 className="text-white text-2xl ">
            {isSignInForm ? "Sign in" : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-4/5 h-12 bg-gray-500 placeholder-white p-2"
              autoComplete="off"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email or phone number"
            className="w-4/5 h-12 bg-gray-500 placeholder-white p-2"
            autoComplete="off"
          />
          {errorMessage?.emailErrorMessage && (
            <p className="text-red-500 w-[80%] text-xs flex items-center justify-center">
              {errorMessage?.emailErrorMessage}
            </p>
          )}
          <input
            className="w-4/5 h-12 bg-gray-500 placeholder-white p-2"
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
          {errorMessage?.passwordErrorMessage && (
            <p className="text-red-500 w-[80%] text-xs flex items-center justify-center">
              {errorMessage?.passwordErrorMessage}
            </p>
          )}
          <button
            onClick={(e) => handleSignInForm(e)}
            className="text-white bg-red-800 w-3/5 h-12"
          >
            Submit
          </button>
          <p className="text-white cursor-pointer" onClick={handleToggleSignIn}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already Registered? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
