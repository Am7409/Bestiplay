"use server";

import createSupabaseServerClient from "../supbaseServer/server";

export default async function readUserSession(){
    const result = await createSupabaseServerClient();
    return result.auth.getSession();
}