"use client";
import { Card } from "@/components/ui/card";
import supabase from "@/hooks/supabase_client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { error } from "console";

export default function page() {
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);
  const [filters, setFilters] = useState<any>();
  const [data, setData] = useState<any>();
  async function fectchData() {
    try {
      const { data, error } = await supabase.from("config").select();
      if (error) console.log(error);
      setFilters(data);
    } catch (error) {}
  }
  async function GameData() {
    try {
      const { data, error } = await supabase.from("games").select().contains('filters',selectedFilters);
      if (error) console.log(error);
      setData(data);
    } catch (error) {}
  }
  useEffect(() => {
    fectchData();
  }, []);

  useEffect(() => {
    GameData();
  }, [selectedFilters]);
  
  const handleSubmit = (filter: string, e: any) => {
    e.preventDefault();
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((el) => el !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  console.log(selectedFilters, "the filters are here");

  return (
    <div>
      <div className="flex justify-center">
        <Card className="w-96 sm:w-[30rem] h-auto  flex flex-wrap p-3 gap-x-2 gap-y-4">
          {filters?.[0]?.filtersOrder?.map((filter: string) => (
            <Button
              key={filter}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(filter, e);
              }}
              className={`p-[6px] rounded-lg  flex-grow text-center text-2xl text-white font-Marker ${
                selectedFilters?.includes(filter) ? "bg-glowbg" : "bg-main-button-color"
              }`}
            >
              {filter.toUpperCase()}
            </Button>
          ))}
        </Card>
      </div>
      <div>
        {data?.map((item: any,index:number) => (
          <div key={index}>
            <div className="bg-red-600"> {index+1} {item.title} </div>
            <br />
            {item.filters.map((it: any) => (
              <div className="bg-green-600"> {it}</div>
            ))}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { data: filters } = await supabase.from("config").select();
//   return {
//     props: {
//       filters: filters || [],
//     },
//   };
// }

// export default  function Page() {
//   const { data: filters } = await supabase.from("config").select();
//   const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);
//   // const { data, error } = await supabase
//   //   .from("games")
//   //   .select()
//   //   .contains("filters", ['']);

//   const handleSubmit = (filter: any) => {
//     // if (selectedFilters.includes(filter)) {
//     //   let selectfilter = selectedFilters.filter((el: any) => el !== filter);
//     //   setSelectedFilters(selectfilter);
//     // } else {
//       setSelectedFilters(()=> [...selectedFilters, filter]);
//     // }
//   };
// console.log(selectedFilters,"the filters are here")
//   return (
//     <div>
//       <div className="flex justify-center">
//         <Card className="w-96 sm:w-[30rem] h-auto  flex flex-wrap p-3 gap-x-2 gap-y-4">
//           {filters?.[0]?.filtersOrder?.map((filter: string) => (
//             <Button
//               key={filter}
//               onClick={() => handleSubmit(filter)}
//               className={`p-[6px] rounded-lg bg-main-button-color flex-grow text-center text-2xl text-white font-Marker ${
//                 selectedFilters?.includes(filter) ? "active:bg-emerald-600" : ""
//               }`}
//             >
//               {filter.toUpperCase()}
//             </Button>
//           ))}
//         </Card>
//       </div>
//       {/* <div>
//         {data?.map((item: any) => (
//           <div>
//             <div className="bg-red-600"> {item.title} </div>
//             <br />
//             {item.filters.map((it: any) => (
//               <div className="bg-green-600"> {it}</div>
//             ))}
//             <br />
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }
