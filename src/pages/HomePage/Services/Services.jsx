import React from "react";
import { FaPen, FaCode, FaServer } from "react-icons/fa";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      icon: <FaPen />,
      iconBG: "bg-[#2D9CDB]",
      title: "UI/UX Design",
      description: `What is UI and UX design? Image result for UI/UX Design UI refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website.`,
    },
    {
      id: 2,
      icon: <FaCode />,
      iconBG: "bg-[#27AE60]",
      title: "Front End",
      description: `Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. `,
    },
    {
      id: 3,
      icon: <FaServer />,
      iconBG: "bg-[#EB5757]",
      title: "Back End",
      description: `The back end refers to parts of a computer application or a program's code that allow it to operate and that cannot be accessed by a user.Most data and operating syntax are stored.`,
    },
  ];
  return (
    <section id="service" className="container mx-auto px-4 lg:px-0 pt-52">
      <h1 className="text-3xl text-gray-700 mb-16">
        We offer high <br /> demand services{" "}
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 cursor-pointer lg:px-8 md:px-4 px-0">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className=" rounded-lg transition ease-in-out shadow-gray-200 hover:shadow-2xl grid gap-8 px-5 py-5"
          >
            <div
              className={` ${service.iconBG} text-white w-14 flex justify-center items-center py-4 rounded-2xl text-xl`}
            >
              <span className={`bg-[${service.iconBG}]`}>{service.icon}</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">{service.title}</h1>
              <p className="text-sm">{service.description}</p>
            </div>
            <div>
              <button className="btn bg-[#2D9CDB] border-none btn-sm w-full rounded-full">
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
