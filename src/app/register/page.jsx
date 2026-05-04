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
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const LogOut = () => {
  const router = useRouter();
  const handleRegsister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    console.log({ name, password, email, image });
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/",
    });
    console.log({ data, error });
    if (data) {
      toast.success("Register successfully !!");
    }
    if (error) {
      toast.error(error.message);
      return;
    }
    if (!error) {
      router.push("/login");
    }
  };
  const singInGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      toast.success("register with google");
    }
  };
  return (
    <div className="items-center justify-center mx-auto border rounded-xl shadow-lg  gap-5 md:gap-[30px] flex flex-col md:flex-row  my-6">
      <Form
        onSubmit={handleRegsister}
        className="flex w-96 flex-col gap-4 border rounded-lg  p-4 my-4 "
      >
        <TextField isRequired name="name" type="text">
          <Label>name</Label>
          <Input placeholder="Enter Your name" />
          <FieldError />
        </TextField>
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

        <TextField isRequired name="image" type="text">
          <Label>Image url</Label>
          <Input placeholder="Enter your Image url" />

          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Register
          </Button>
          <p className="flex gap-1 items-center">
            Or{" "}
            <Link href={"/login"}>
              {" "}
              <span className="text-pink-500">Login</span>
            </Link>{" "}
          </p>
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

export default LogOut;
