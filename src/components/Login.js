import React, { useState,useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate the form data
    //console.log("ssss",email.current.value);
    const message=checkValidData(email.current.value, password.current.value,name.current.value);
    //console.log("error", errorMessage);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg"
        />
      </div>
      <form onSubmit={ (e)=>e.preventDefault()} className=" w-3/12 my-36 absolute mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4   my-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4   my-2 w-full bg-gray-700"
        />
        <input
            ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2  w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
