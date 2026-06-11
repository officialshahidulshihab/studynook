"use client";
import { authClient } from "@/lib/auth-client";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  Separator,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { use } from "react";
import { FcGoogle } from "react-icons/fc";

import { MdOutlinePolymer } from "react-icons/md";
import { toast } from "react-toastify";

const LogInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
    console.log(data, error);
  };

  const handleGoogleSign = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };
  return (
    <div className="bg-[#0d1e1a]">
      <div className="pb-10 max-w-275 mx-auto">
        <div className="flex  items-center gap-3 justify-center pt-6 mb-6">
          <MdOutlinePolymer className="text-[#c7a64b]" />
          <Link
            href="/"
            className="no-underline hover:no-underline decoration-transparent"
          >
            {" "}
            <p className="font-bold font-playfair text-xl text-center">
              <span className="text-white">Study</span>
              <span className="text-[#c7a64b]">Nook</span>
            </p>
          </Link>
        </div>
        <div className="flex flex-col justify-center bg-[#162820] max-w-110 rounded-2xl border border-[#2b3725] mx-auto p-5 ">
          <Form
            onSubmit={onSubmit}
            className="w-full max-w-96 font-plus_jakarta "
          >
            <Fieldset>
              <Fieldset.Legend className="text-[#f0ebe0] text-2xl">
                Welcome back
              </Fieldset.Legend>
              <Description className="text-[#527c74] font-plus_jakarta mt-2">
                Sign in to access your bookings and listings.
              </Description>
              <FieldGroup>
                <TextField isRequired name="email" type="email">
                  <Label className="text-[#6c9e87]">EmailL</Label>
                  <Input
                    className="bg-[#1f3530] text-[#f0ebe0]"
                    placeholder="john@example.com"
                  />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }
                    return null;
                  }}
                >
                  <Label className="text-[#6c9e87]">Password</Label>
                  <Input
                    className="bg-[#1f3530] text-[#f0ebe0]"
                    placeholder="Enter Your Password"
                  />
                  <FieldError />
                </TextField>
              </FieldGroup>
              <Fieldset.Actions>
                <Button
                  className="bg-[#c9a84c] text-[#15241c] w-full font-plus_jakarta"
                  type="submit"
                >
                  LogIn
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
          <div className="flex justify-center items-center space-x-3 mt-4 mb-4">
            <Separator className="my-4 max-w-30 text-[12px] bg-[#2b3725]" />
            <p className="text-[#6c9892] text-[12px]">or continue with</p>
            <Separator className="my-4 max-w-30 text-[12px] bg-[#2b3725]" />
          </div>
          <div className="mb-3">
            <Button onClick={handleGoogleSign} className=" bg-[#1f3530] border border-[#344333] text-[#15241c] w-full font-plus_jakarta">
              <p className="flex items-center gap-3 ">
                <FcGoogle />
                <span className="text-white">Continue with Google</span>
              </p>
            </Button>
          </div>
          <p className="text-[12px] text-center font-plus_jakarta text-[#6c9e87] ">
            Do not have an account?{" "}
            <Link href={"/signup"}>
              <span className="text-[#c9a84c] link">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
