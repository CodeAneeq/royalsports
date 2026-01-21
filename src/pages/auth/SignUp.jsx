import React, { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import TextField from "../../components/inputs/TextFields";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Royal Sports and level up your game."
    >
      <TextField
        label="Full Name"
        placeholder="John Doe"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <TextField
        label="Email Address"
        placeholder="john@example.com"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <TextField
        label="Password"
        type="password"
        placeholder="••••••••"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <PrimaryBtn className="w-full bg-yellow-400 hover:bg-yellow-500">
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
