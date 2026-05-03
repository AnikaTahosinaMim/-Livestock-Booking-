"use client";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginPages = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log({ password, email });
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    console.log({ data, error });
    if (data) {
      toast.success("login successfully !!");
    }
    if (error) {
      toast.error(error.message);
    }
  };
  const singInGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="items-center justify-center mx-auto  border rounded-xl shadow-lg gap-[30px] flex my-6">
      <Form
        onSubmit={handleLogin}
        className="flex w-96 flex-col gap-4 border p-4 my-4 rounded-xl"
      >
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter your email" />

          <FieldError />
        </TextField>

        <TextField isRequired minLength={6} name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />

          <FieldError />
        </TextField>

        <div className="flex gap-2 items-center">
          <Button type="submit">
            <Check />
            Login
          </Button>
          <Link href={"/register"}>
            <p className="flex gap-1 items-center">
              ? Or <span className="text-pink-500">Register</span>{" "}
            </p>
          </Link>
        </div>
      </Form>
      <div>
        <p className="font-bold ">Or</p>
        <p className="font-semibold mb-2"> countinue with google</p>
        <Button onClick={singInGoogle} variant="secondary">
          <FaGoogle /> with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPages;
