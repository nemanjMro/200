import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function Login() {
  return (
    // <main className="flex w-full h-screen bg-[#131419] via-[#5865F2] ">
    // <main className="flex w-full h-screen bg-gradient-to-r from-[#131419] via-[red] to-regal-blue  ">
    <main className="flex flex-col md:flex-row w-full h-screen">
      <div className=" w-full md:w-1/3 h-1/2 md:h-full flex justify-center items-center  bg-gradient-to-r from-[#5865F2] to-[#131419] ">
        <LoginForm />
      </div>
      <div className=" w-full md:w-2/3 h-1/2  md:h-full  flex items-center justify-center bg-gradient-to-r from-[#131419] via-[#0f0f16]  via-70% to-[#131419] ">
        <Image
          className="w-1/4 object-contain"
          src="/login.png"
          alt="Free slots games login page"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
