import { Button } from '@/components/ui/button'
import createSupabaseServerClient from '@/lib/supbaseServer/server';
import { redirect } from 'next/navigation';
import React from 'react'

export default function SignOut() {
    const logOut = async ()=>{
        'use server';
        const logOut = await createSupabaseServerClient()
        await logOut.auth.signOut();
        redirect('/profile/login');
    }
  return (
    <>
    <form action={logOut}>
        <div className='flex items-center'>
        <Button className='bg-white text-black font-Marker rounded-full p-6 text-3xl hover:bg-glow '>
            SingOut
        </Button>
        </div>
    </form>
    </>
  )
}
