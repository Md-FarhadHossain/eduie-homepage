import React from "react";
import heroimage from '../../../assets/heroimage-2.jpg'

const Hero = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className="lg:ml-52 md:ml-28">
        <p className="text-[#2D9CDB] mb-2">Unhappy with your website?</p>
        <h1 className="text-3xl text-gray-700 leading-relaxed font-semibold">We create beautiful <br /> and fast web services</h1>
      </div>

        <div className="flex justify-center py-12">
            <img className="rounded-2xl lg:h-[40vh] md:h-[35vh] h-full w-full object-cover" src={heroimage} alt="hero image" />
        </div>

    </section>
  );
};

export default Hero;
