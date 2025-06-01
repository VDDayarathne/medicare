import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-black-900">
      {/* Form Section */}
      <section className="flex flex-1 justify-center items-center py-8 md:py-0">
        <div className="w-full max-w-md px-4 sm:px-8">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={160}
            alt="CarePulse Logo"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <div className="text-14-regular mt-20 flex justify-between items-center">
            <p className="copyright">© 2024 CarePulse</p>
            <Link href="/?admin=true" className="text-green-500 hover:underline">
              Admin
            </Link>
          </div>
        </div>
      </section>
      {/* Image Section */}
      <div className="hidden md:block md:w-2/5 h-full">
        <Image
          src="/assets/images/register-img.png"
          alt="patient"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default register;
