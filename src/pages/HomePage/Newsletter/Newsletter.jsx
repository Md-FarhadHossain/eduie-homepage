import React from "react";

const Newsletter = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className="lg:ml-52 md:ml-28">
        <h1 className="text-3xl font-semibold leading-relaxed text-gary-700">
          Story, emotion <br /> and purpose
        </h1>
        <p className="w-80 text-sm py-8 text-[#4F4F4F]">
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>

         <div>
         <span className="label-text text-[#828282] text-sm">Want us to contact you?</span>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered bg-[#F2F2F2] input-info w-full max-w-xs"
          />
          <button className="border-none py-2 text-white rounded-lg px-6 absolute left-[14.6rem] bg-[#2D9CDB]">
            Join
          </button>
        </div>
         </div>
      </div>
    </section>
  );
};

export default Newsletter;
