import VerificationForm from "@/components/VerificationForm";
import Image from "next/image";

export default function Verification() {
  return (
    <main className="flex h-screen">
      <div className="md:w-1/3 w-full flex justify-center items-center">
        <VerificationForm />
      </div>
      <div className="md:w-2/3 hidden bg-[#0f0f16] md:flex items-center justify-center">
        <Image
          width={400}
          height={400}
          className="w-1/4 object-contain"
          src="/login.png"
          alt=""
        />
      </div>
    </main>
  );
}
