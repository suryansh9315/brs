import React, { useState } from "react";
import Lottie from "react-lottie";
import loginAnimation from "../lottie/books_1.json";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (!username) {
        return toast.error("Please enter a valid Username");
      }
      if (!email) {
        return toast.error("Please enter a valid Email");
      }
      if (!password) {
        return toast.error("Please enter a valid Password");
      }
      if (!cPassword) {
        return toast.error("Please enter a valid Password");
      }
      if (password !== cPassword) {
        return toast.error("Password doesn't match");
      }
      const res = await fetch("https://brs-backend-z4da.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="text-xl font-light text-center">Logo</div>
          <div className="mt-5 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-semibold">Signup</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Confirm Password"
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  className="mt-5 tracking-wide font-semibold bg-[#0c1220] text-gray-100 w-full py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Signup</span>
                </button>
                <p className="pt-3 font-light">
                  Already have an account?{" "}
                  <Link className="font-semibold" to="/login">
                    Login
                  </Link>
                </p>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-orange-100 text-center hidden lg:flex px-20 py-20">
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: loginAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height="100%"
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
