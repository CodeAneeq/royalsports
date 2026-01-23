import React, { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import TextField from "../../components/inputs/TextFields";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Helpers } from "../../helper/helper";
import axios from "axios";
import baseURL from "../../helper/baseURL";
import { addUser } from "../../redux/features/UserSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [formatError, setFormatError] = useState({
      emailError: "",
      passwordError: ""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const LoginAPI = async () => {
      let emailError = "", passwordError = "";
      if (!Helpers.validateEmail(email)) {
        emailError = "Please enter a valid email";
      }
      if (!Helpers.validatePassword(password)) {
        passwordError = 'Password must be at least 8 characters';
      }
      if (emailError || passwordError) {
        setFormatError({ emailError: emailError, passwordError: passwordError})
      } else {
        try {
          const payload = { email, password };
          const res = await axios.post(`${baseURL}/api/auth/login`, payload);
          console.log(res);
          dispatch(addUser(res?.data?.data));
          localStorage.setItem("token", res?.data?.data?.token);
          alert("User Login Successfully");
          navigate("/")
        } catch (error) {
          console.log(error);
          setAuthError(error?.response?.data?.message);
        }
      }
  
    }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to access your Royal Sports account."
    >
      <TextField
        label="Email Address"
        placeholder="e.g. alex@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {formatError.emailError && <p className="text-red-500 mb-3">{formatError.emailError}</p>}


      <TextField
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rightElement={<FaEye />}
      />

              {formatError.passwordError && <p className="text-red-500">{formatError.passwordError}</p>}
      {authError && <p className="text-red-500">{authError}</p>}


      <div className="flex items-center justify-between text-sm mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Keep me logged in
        </label>
      </div>

      <PrimaryBtn onClick={LoginAPI} className="w-full bg-yellow-400 hover:bg-yellow-500">
        LOGIN →
      </PrimaryBtn>

      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <Link to={"/sign-up"} className="text-blue-600 font-semibold cursor-pointer">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
