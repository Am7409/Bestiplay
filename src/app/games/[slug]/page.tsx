import React from 'react'
import GameDetails from './GameDetails'
import readUserSession from '@/lib/action';
import { redirect } from 'next/navigation';

export default async function SlugGame() {

//   const {data} = await readUserSession();
//   if(!data.session){
//     return redirect('/profile/login');
//  }
 
  return (
    <>
    <GameDetails/>
    </>
  )
}
