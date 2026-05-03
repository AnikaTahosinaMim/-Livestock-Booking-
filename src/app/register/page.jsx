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
    }
    if (!error) {
      router.push("/login");
    }
  };
  const singInGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="">
      <Form
        onSubmit={handleRegsister}
        className="flex w-96 flex-col gap-4 border p-4 my-4 rounded-xl"
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
