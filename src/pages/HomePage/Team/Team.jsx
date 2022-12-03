import React from "react";
import person1 from '../../../assets/person1.png'
import person2 from '../../../assets/person2.png'
import person3 from '../../../assets/person3.png'

const Team = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0 py-52">
      <div className="flex justify-between items-center lg:flex-row flex-col">
        {/* Left side */}
        <div className="mb-8 lg:mb-0">
            <p className="text-[#EB5757]">Meet the team</p>
            <h1 className="text-3xl leading-relaxed">We are chilled and a laidback <br /> team</h1>
            <p>A group of players forming one side  in a<br /> competitive  game or sport.</p>
        </div>
        {/* Right side */}
        <div className="grid grid-cols-2 items-center gap-6">
            {/*  */}
            <div>
                <img className="rounded-2xl" src={person3} alt="" />
            </div>
            {/*  */}
            <div className="grid gap-6">
            <img className="rounded-2xl" src={person1} alt="" />
            <img className="rounded-2xl" src={person2} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
