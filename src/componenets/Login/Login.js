import React, { useState } from "react";
import Header from "../Header/Header";

const Login = () => {
  const [signInForm, setsignInForm] = useState(true);
  const togglesignInForm = () => {
    setsignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        {" "}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form className="p-12 w-3/12 absolute my-40 mx-auto right-0 left-0 bg-black   rounded-lg bg-opacity-80 text-white">
        <h1 className="text-3xl font-bold my-5">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-700  rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-slate-700  rounded-lg"
        ></input>
        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg"
        ></input>
        <button className="bg-red-600 w-full  rounded-lg  my-6 p-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={togglesignInForm}>
          {signInForm
            ? "New to Netflix ? Sign Up here"
            : "Already a user ? Sign In here.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
