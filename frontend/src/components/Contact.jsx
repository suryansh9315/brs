import React, { useRef, useState } from "react";
import Lottie from "react-lottie";
import contactAnimation from "../lottie/contact_1.json";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_l0d0m6a", "template_itny2hl", form.current, {
        publicKey: "dX6zuecsqIn1suJwN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmail("");
          setName("");
          setMessage("");
          toast.success("Message Send");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Something went wrong");
        }
      );
  };

  return (
    <div
      className="flex items-center justify-center p-20 py-28 gap-2 lg:flex-row flex-col"
      id="contact"
    >
      <div className="flex flex-col gap-10 lg:w-1/3 sm:w-2/3 w-[90%]">
        <div className="text-4xl font-bold">Book a Consultation</div>
        <div className="flex flex-col gap-5 bg-gray-100 px-8 py-8 rounded-lg shadow-sm">
          <form ref={form}>
            <div className="flex flex-col gap-1">
              <div className="font-normal text-sm">Name</div>
              <input
                type="text"
                className="bg-white px-5 py-3 outline-none rounded border border-gray-200"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-normal text-sm">Email</div>
              <input
                type="text"
                className="bg-white px-5 py-3 outline-none rounded border border-gray-200"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="reply_to"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-normal text-sm">Message</div>
              <textarea
                placeholder="Enter message"
                className="bg-white px-5 py-3 outline-none rounded border border-gray-200 h-40"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              />
            </div>
            <div
              onClick={sendEmail}
              className="hover:bg-[#f9f8f6] hover:text-black border transition-all duration-300 border-[#0c1220] mt-2 bg-[#0c1220] rounded text-white h-12 sm:w-44 w-32 cursor-pointer text-sm flex items-center justify-center text-center"
            >
              Book Now
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: contactAnimation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          width="85%"
        />
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
