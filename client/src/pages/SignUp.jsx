import React from "react";
import { Link } from "react-router-dom";
import blogger from "../assets/blog5.png";
import { Button, Label, TextInput } from "flowbite-react";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="">
            <span className="px-2 py-1">
              <img
                src={blogger}
                alt="blogger5ive logo"
                className="w-20 h-25 rounded"
              />
            </span>
          </Link>

          <p className="text-sm font-bold">
            Sign up with your email and password or with Google account.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter Username"
                id="username"
              />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput type="text" placeholder="Enter Email" id="email" />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput
                type="text"
                placeholder="Enter Password"
                id="password"
              />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 font-semibold">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
