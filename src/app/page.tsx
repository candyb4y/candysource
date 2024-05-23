import Navigation from "@/components/global/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        </div>
        <p className="text-center">Join our agency, your place</p>
        <div className='bg-gradient-to-r from-[#F491C0] to-white text-transparent bg-clip-text relative'>
          <h1 className="text-7xl font-bold text-center md:text-[300px]">candybay</h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <div className="bottom-0 top-[-50%] bg-gradient-to-r dark:from-transparent left-0 absolute z-10"></div>
        </div>
      </section>
    </>
  );
}
