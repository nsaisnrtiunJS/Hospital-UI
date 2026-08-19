import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import LeftSection from './LeftSection'

import logo from '../../assets/logo.png'

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Validation
  const validateForm = () => {

    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      alert("Form Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (

    <section className="w-full min-h-screen bg-[#f8f8f8] flex items-center justify-center px-10">

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-md overflow-hidden grid grid-cols-2">

        {/* Left section  */}
        <LeftSection />

        {/* Right Form */}
        <div className="px-14 pb-14 flex flex-col justify-center">

          {/* Logo */}
          <div className=' overflow-y-hidden relative left-[-4.5rem] top-0'>
        <img src={logo} alt="logo" className='w-76 object-contain' />
      </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-8"
          >

            {/* Name */}
            <div>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b-2 border-blue-400 outline-none py-3 placeholder:text-gray-400"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name}
                </p>
              )}

            </div>

            {/* Email */}
            <div>

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-blue-400 outline-none py-3 placeholder:text-gray-400"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email}
                </p>
              )}

            </div>

            {/* Message */}
            <div>

              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b-2 border-blue-400 outline-none py-1 resize-none placeholder:text-gray-400"
              ></textarea>

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-fit px-14 py-4 bg-blue-500 text-white rounded-2xl flex items-center gap-3 text-2xl font-semibold shadow-[0_8px_20px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300 mt-4"
            >

              <SendHorizonal className="w-7 h-7" />

              Send

            </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default ContactForm;