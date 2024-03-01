"use server";
import React from "react";
import SignUser from "./SignUser";
import readUserSession from "@/lib/action";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/profile");
  }

  return (
    <>
      <SignUser />
    </>
  );
}
