import React from "react";
import Image from "next/image";
import Link from "next/link";

const registration = () => {
    return(
        <div className="flex h-screen w-screen">
      {/* Left: Form Section */}
      <section className="flex flex-col justify-center items-center bg-black-900 w-full md:w-1/2 h-full">
        <div className="sub-container max-w-[496px] w-full">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={160}
            alt="CarePulse Logo"
            className="mb-12 h-10 w-fit"
          />
          {/* <PatientForm /> */}
          <div className="text-14-regular mt-20 flex justify-between items-center">
            <p className="copyright">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500 hover:underline">
              Admin
            </Link>
          </div>
        </div>
      </section>
      {/* Right: Image Section */}
      <div className="hidden md:block w-1/2 h-full">
        <Image
          src="/assets/images/register-img.png"
          alt="patient"
          width={1000}
          height={1000}
          className="side-img max-w-[390px]"
          priority
        />
      </div>
    </div>
    )
}

export default registration