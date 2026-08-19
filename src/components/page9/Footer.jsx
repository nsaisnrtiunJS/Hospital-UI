import 'remixicon/fonts/remixicon.css'


function Footer() {

  return (

    <footer className="w-full bg-[#444444] text-white py-10">

      {/* Logo */}
      <div className="flex justify-center items-center gap-3">

        <div className="text-blue-500 text-4xl">
          ❤
        </div>

        <h1 className="text-4xl font-bold text-blue-500">
          Pollo Hospital
        </h1>

      </div>

      {/* Nav Links */}
      <div className="flex justify-center gap-12 mt-10 text-2xl text-gray-200">

        <a
          href="#"
          className="hover:text-blue-400 transition-all duration-300"
        >
          Home
        </a>

        <a
          href="#"
          className="hover:text-blue-400 transition-all duration-300"
        >
          About
        </a>

        <a
          href="#"
          className="hover:text-blue-400 transition-all duration-300"
        >
          Service
        </a>

        <a
          href="#"
          className="hover:text-blue-400 transition-all duration-300"
        >
          Our Team
        </a>

        <a
          href="#"
          className="hover:text-blue-400 transition-all duration-300"
        >
          Articles
        </a>

        <a
          href="#"
          className="hover:text-blue-400 transition-all duration-300"
        >
          Contact
        </a>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-14 px-10 flex justify-between items-center">

        {/* Copyright */}
        <p className="text-xl text-gray-200">
          © 2026 Pollo Hospital. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">

             <i className="ri-twitter-x-line text-[#444444]"></i>

          </div>

          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">

            <i className="ri-facebook-fill text-[#444444]"></i>

          </div>

          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">

            <i className="ri-linkedin-fill text-[#444444]"></i>

          </div>

          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">

            <i className="ri-instagram-line text-[#444444]"></i>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer;