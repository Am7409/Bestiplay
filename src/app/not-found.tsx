import Link from 'next/link'
import svg from '../../public/404.svg';
import Image from 'next/image';

export default async function NotFound() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-4;">
        <Image  width={500} height={700} src={svg} alt="svg" />
         <Link href="/">
          <button  className="bg-main-button-color font-Single text-3xl cursor-pointer text-white transition-[0.3s] px-[15px] py-3 rounded-xl border-[none] hover:bg-orange">
            Back to Home
          </button>
          </Link>
      </div>

    </>
  )
}