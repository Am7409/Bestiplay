'use server';

import supabase from "@/hooks/supabase_client";

export async function getAllGames(filter:Array<string>){
  return await supabase.from('games').select('*').contains("filters",filter);
}

export async function getAllFilters(){
  return await supabase.from("config").select('*');
}