import React, { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import TextField from "../../components/inputs/TextFields";
import axios from 'axios';
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { Link, useNavigate } from "react-router-dom";
import baseURL from "../../helper/baseURL";
import { addUser } from "../../redux/features/UserSlice";
import { Helpers } from "../../helper/helper";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [formatError, setFormatError] = useState({
    emailError: "",
    nameError: "",
    passwordError: ""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupAPI = async () => {
    let emailError = "", passwordError = "", nameError = "";
    if (!Helpers.validateEmail(email)) {
      emailError = "Please enter a valid email";
    }
    if (!Helpers.validatePassword(password)) {
      passwordError = 'Password must be at least 8 characters';
    }
    if (!Helpers.validateName(name)) {
      nameError = 'Name must be at least 3 characters';
    }
    if (emailError || passwordError || nameError) {
      setFormatError({ emailError: emailError, passwordError: passwordError, nameError: nameError })
    } else {
      try {
        const payload = { name, email, password };
        const res = await axios.post(`${baseURL}/api/auth/sign-up`, payload);
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
      title="Create Account"
      subtitle="Join Royal Sports and level up your game."
    >
      <TextField
        label="Full Name"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

        {formatError.nameError && <p className="text-red-500 mb-3">{formatError.nameError}</p>}


      <TextField
        label="Email Address"
        placeholder="john@example.com"
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
        />

        {formatError.passwordError && <p className="text-red-500">{formatError.passwordError}</p>}
      {authError && <p className="text-red-500">{authError}</p>}

      <PrimaryBtn onClick={SignupAPI} className="w-full bg-yellow-400 hover:bg-yellow-500">
        CREATE ACCOUNT →
      </PrimaryBtn>

      <p className="text-center text-sm mt-6">
        Already have an account?{" "}
        <Link to={"/login"} className="text-blue-600 font-semibold cursor-pointer">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
