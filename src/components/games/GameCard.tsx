"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import useWindowSize from '@/hooks/useWindowSize';

interface Props {
  image: string;
  title?: string;
  subTitle?: string;
  ytLink?: string;
  slug?: string;
}

export default function GameCard({ image, title, subTitle, ytLink, slug }: Props) {
 const width = useWindowSize();
  return (
    <>
      <Card className="w-80 h-auto p-0">
        <Sheet>
          <div className=" w-full h-52 rounded-xl">
            <Link href={`/games/${slug}`}>
             <Image
                src= {image}
                width={500}
                height={0}
                className="rounded-t-xl"
                alt=""
              />
            </Link>
            <SheetTrigger asChild>
              <button className="relative -top-[10.5rem] left-3">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1118_2137)">
                    <path
                      d="M20.625 0C21.5417 0 22.4583 0 23.375 0C23.485 0.0240625 23.5939 0.061875 23.705 0.0698958C27.4324 0.351771 30.8791 1.49302 33.9866 3.5624C39.2631 7.07667 42.5093 11.9602 43.662 18.2084C43.8098 19.0071 43.8889 19.8195 43.9989 20.625V23.375C43.9748 23.485 43.9358 23.595 43.9278 23.7073C43.6058 27.8609 42.2297 31.6365 39.7501 34.9777C36.2553 39.6859 31.609 42.5964 25.8305 43.6597C25.0181 43.8086 24.1931 43.8889 23.3739 44.0011H20.6239C20.5288 43.9782 20.4336 43.9404 20.3374 43.9335C16.1689 43.615 12.3784 42.2434 9.02458 39.7535C4.3175 36.2565 1.40479 31.6135 0.342604 25.834C0.193646 25.0204 0.112292 24.1954 0 23.375C0 22.4583 0 21.5417 0 20.625C0.0630208 20.1014 0.118021 19.5777 0.191354 19.0552C0.821563 14.5819 2.62052 10.6391 5.65354 7.29094C9.05208 3.53948 13.2527 1.19854 18.2531 0.332292C19.0392 0.195937 19.8344 0.11 20.625 0ZM2.20688 21.9851C2.19656 32.9232 11.0539 41.7897 21.9966 41.7943C32.9209 41.7989 41.7622 32.9736 41.7931 22.0355C41.8241 11.1031 32.9817 2.23323 22.0252 2.20573C11.0974 2.17823 2.21719 11.0412 2.20688 21.9851Z"
                      fill="#ff4d29"
                    ></path>
                    <path
                      d="M15.3932 22.0057C15.3932 19.4287 15.4001 16.8529 15.3886 14.2759C15.3852 13.577 15.588 13.0018 16.2296 12.6615C16.8587 12.328 17.4316 12.4942 17.9977 12.8723C21.8373 15.4412 25.6851 17.9999 29.5293 20.5631C30.7622 21.3847 30.7668 22.6096 29.5396 23.4277C25.6839 26.0001 21.8247 28.5668 17.9724 31.1426C17.4041 31.523 16.8266 31.6651 16.2033 31.3214C15.5822 30.9799 15.3863 30.4161 15.3886 29.7344C15.3978 27.1574 15.392 24.5816 15.392 22.0046L15.3932 22.0057ZM27.7201 22C24.3307 19.7404 20.9974 17.5186 17.6424 15.282V28.7203C21.0101 26.4745 24.3284 24.263 27.7201 22.0011V22Z"
                      fill="#ff4d29"
                    ></path>
                  </g>
                </svg>
              </button>
            </SheetTrigger>
          </div>
          <Link href={`/games/${slug}`}>
            <CardHeader className="p-2">
              <CardTitle className="font-Marker text-4xl underline">
                {title}
              </CardTitle>
              <CardDescription>{subTitle}</CardDescription>
            </CardHeader>
          </Link>
          <SheetContent className="p-0" side={width < 768 ? "bottom": "left"}>
            <iframe
              src={ytLink}
              loading="lazy"
              className="h-full w-full p-0"
              allow="autoplay; encrypted-media"
            />
          </SheetContent>
        </Sheet>
      </Card>
    </>
  );
}
