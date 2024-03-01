"use server"
import React from 'react'
import { getUserDetails } from './actions'
import readUserSession from '@/lib/action';
import { redirect } from 'next/navigation';
import SignOut from './signOut/SignOut';

export default async function Profile() {
    const user =  await getUserDetails();
    const {data} = await readUserSession();
	if(!data.session){
     return redirect('/profile/login');
	}
  return (
    <>
    <div className=" bg-main-color h-screen flex gap-y-4 flex-col">
        <div className="flex justify-center">
          <div className="">
            <div></div>
            <div className=" h-auto flex justify-center items-center">
              <p className="font-flood text-3xl sm:text-5xl md:text-7xl text-white">
                Hello {user?.name}
              </p>
              {/* <Image
                src={
                  "https://res.cloudinary.com/dotkmstum/image/upload/v1707236244/BestiesPlay/tag_line.png"
                }
                alt="Tag Line"
                fill
              /> */}
            </div>
          </div>
        </div>
        <div className="border-2 border-dashed border-white" />
        <div className="flex flex-col items-center gap-y-6 ">
          <div className="w-96">
            <SignOut/>
            {/* <RegisterForm /> */}
          </div>
          {/* <div className="text-3xl text-white font-Marker">OR</div> */}
          {/* <div className="w-96 flex flex-col gap-y-6">
            <OAuthForm title="Google" />
            <OAuthForm title="Facebook" />
            <OAuthForm title="Apple" />
          </div> */}
          <div>
            {/* <p className="text-white font-Single text-xl">Already have an account? <Link href="/pofile/login" className="text-glow">Login</Link></p> */}
          </div>
        </div>
      </div>
    </>
  )
}
