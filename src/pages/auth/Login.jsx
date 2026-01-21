import React, { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import TextField from "../../components/inputs/TextFields";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <TextField
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rightElement={<FaEye />}
      />

      <div className="flex items-center justify-between text-sm mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Keep me logged in
        </label>

        <span className="text-blue-600 cursor-pointer">
          Forgot Password?
        </span>
      </div>

      <PrimaryBtn className="w-full bg-yellow-400 hover:bg-yellow-500">
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
