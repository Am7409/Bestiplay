'use client';
import { Button } from "@/components/ui/button";
import React from "react";
import { createBrowserClient } from '@supabase/ssr'

export default function OAuthForm({title}:{title:string}) {
	
		const supabase = createBrowserClient(
		  process.env.NEXT_PUBLIC_SUPABASE_URL!,
		  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
		)

	const LoginWithGithub = ()=>{
     supabase.auth.signInWithOAuth({
		provider:'github',
		options:{
			redirectTo:`${location.origin}/auth-server-action/callback`,
		}
	 })
	}
	return <Button className="w-full bg-white text-black font-Marker rounded-full p-6 text-3xl hover:bg-glow " onClick={LoginWithGithub}>Login With {title}</Button>;
}
