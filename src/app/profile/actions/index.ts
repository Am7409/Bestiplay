"use server";

import createSupabaseServerClient from "@/lib/supbaseServer/server";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
  name:string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options:{
      data:{
        name:data.name
      }
    }
  }
  );
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export async function getUserDetails() {
  const supabase = await createSupabaseServerClient();
  const{data:{user}} = await supabase.auth.getUser();
  return user?.user_metadata;
}