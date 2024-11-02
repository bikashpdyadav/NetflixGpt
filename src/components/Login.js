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
  const [showPassword, setShowPassword] = useState(false);

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
          Swal.fire({
            title: "Success",
            text: "Account created successfully!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Check for email already in use
          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage({ emailErrorMessage: "Email is already in use." });
          } else {
            setErrorMessage({ emailErrorMessage: errorMessage });
          }
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
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col items-center justify-center bg-black bg-opacity-80 rounded-lg text-white px-6 py-8 mx-4 sm:mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 mt-20 sm:mt-28 left-0 right-0"
      >
        <h1 className="font-bold text-3xl sm:text-4xl my-4 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-3 sm:p-4 w-5/6 bg-gray-800 rounded-lg"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="my-4 p-3 sm:p-4 w-5/6 bg-gray-800 rounded-lg"
        />

        {errorMessage?.emailErrorMessage && (
          <p className="text-red-500 w-5/6 text-lg flex items-center justify-center">
            {errorMessage?.emailErrorMessage}
          </p>
        )}

        <div className="relative w-full flex items-center justify-center">
          <input
            className="my-4 p-4 w-5/6 bg-gray-800 text-white rounded-lg placeholder-gray-400"
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            className="absolute right-10 lg:right-14 top-[35%] text-white"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errorMessage?.passwordErrorMessage && (
          <p className="text-red-500 w-5/6 text-lg flex items-center justify-center">
            {errorMessage?.passwordErrorMessage}
          </p>
        )}

        <button
          onClick={handleSignInForm}
          className="my-4 p-3 sm:p-4 bg-red-700 w-5/6 rounded-lg text-lg"
        >
          Submit
        </button>

        <p
          className="my-4 py-4 cursor-pointer text-center"
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

