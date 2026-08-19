import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonial() {

  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Amanda Diesuza",
      role: "Manager-Director",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et elit, sed do eiusmod tempor incididunt ut labore et."
    },

    {
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Amy Jones",
      role: "Chief Accountant",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
    },

    {
      img: "https://randomuser.me/api/portraits/women/72.jpg",
      name: "Sarah Taylor",
      role: "Software Tester",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
    },
  ];

  const [active, setActive] = useState(1)

  const prevSlide = () =>{
    setActive((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setActive((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  return (

    <section className="w-full min-h-screen bg-[#f8f8f8] relative overflow-hidden flex flex-col items-center justify-center py-20">

      {/* Bottom Blue Background */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-[#9ec9f0]"></div>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-800 relative z-20 mb-20">
        What our <span className="text-blue-500">user say?</span>
      </h1>

      {/* Testimonial Wrapper */}
      <div className="relative w-full max-w-6xl h-[420px] flex items-center justify-center">

        {testimonials.map((item, index) => {

          let position = "hidden";

          if (index === active) {
            position =
              "scale-100 opacity-100 z-20";
          }

          else if (
            index ===
            (active - 1 + testimonials.length) %
              testimonials.length
          ) {
            position =
              "translate-x-[-280px] scale-90 opacity-60 z-10";
          }

          else {
            position =
              "translate-x-[280px] scale-90 opacity-60 z-10";
          }

          return (

            <div
              key={index}
              className={`absolute transition-all duration-500 bg-white rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] w-[650px] h-[320px] flex flex-col items-center justify-center px-16 text-center ${position}`}
            >

              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full border-[5px] border-blue-500 p-1 bg-white absolute -top-10">

                <img
                  src={item.img}
                  alt="User"
                  className="w-full h-full rounded-full object-cover"
                />

              </div>

              {/* Name */}
              <h2 className="text-4xl font-bold text-gray-700 mt-12">
                {item.name}
              </h2>

              {/* Role */}
              <p className="text-gray-400 mt-2 text-lg">
                {item.role}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mt-8 text-lg">
                {item.desc}
              </p>

            </div>

          );
        })}

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-[18%] z-30 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
        >

          <ChevronLeft />

        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-[18%] z-30 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
        >

          <ChevronRight />

        </button>

      </div>

    </section>

  );
}

export default Testimonial;