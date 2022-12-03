import React from "react";
import smarthome from "../../../assets/smarthome.jpg";
import booking from "../../../assets/booking.png";
import onboard from "../../../assets/onboard.png";
import juice from "../../../assets/juice-product.png";
import { BsArrowRight } from "react-icons/bs";

const ShowServices = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0 py-52">
      <h1 className="text-3xl">
        Good design means <br /> good business
      </h1>

      <div className="grid lg:grid-cols-2 gap-4 lg:mx-32">
        {/* Left side */}
        <div className="mt-40">
            {/* 1 */}
          <div>
            <img className="rounded-2xl" src={smarthome} alt="smart home" />
            <div>
              <p className="text-xs text-[#828282] mt-5 mb-2">Full stack application</p>
              <h4 className="text-md font-semibold">Smart home dashboard</h4>
            </div>
          </div>
            {/* 2 */}
          <div className="mt-16">
            <img className="rounded-2xl" src={booking} alt="booking" />
            <div>
              <p className="text-xs text-[#828282] mt-5 mb-2">Mobile application</p>
              <h4 className="text-md font-semibold">Booking system</h4>
            </div>
          </div>

        </div>
        {/* Left side end */}


        {/* Right side */}
        <div className="">
            {/* 1 */}
          <div>
            <img className="rounded-2xl" src={onboard} alt="onboard" />
            <div>
              <p className="text-xs text-[#828282] mt-5 mb-2">Full stack application</p>
              <h4 className="text-md font-semibold">Smart home dashboard</h4>
            </div>
          </div>
            {/* 2 */}
          <div className="mt-16">
            <img className="rounded-2xl" src={juice} alt="juice" />
            <div>
              <p className="text-xs text-[#828282] mt-5 mb-2">Mobile application</p>
              <h4 className="text-md font-semibold">Booking system</h4>
            </div>
          </div>

        </div>
        <div>
            <h4 className="text-right hover:link-hover cursor-pointer flex items-center justify-end text-[#2D9CDB]">see more <span className="ml-4"><BsArrowRight /></span></h4>
        </div>
        {/* Right side end */}
      </div>
    </section>
  );
};

export default ShowServices;
