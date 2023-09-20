"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { useState } from "react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { data, error } = await sendEmail(formData);
  
    if (error) {
      toast.error(error.toString());
      return;
    }
  
    toast.success("Email sent successfully!");
    setFormSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        {formSubmitted
        ? "Thank you for your message! I will get back to you as soon as possible from: "
        : "Please contact me directly at "}
        <a className="underline" href="mailto:jenna.otten@gmail.com">
          jenna.otten@gmail.com
        </a>{" "}
        {formSubmitted ? null : "or through the form below."}
      </p>
      <form
        className="mt-10 flex flex-col"
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error.toString());
            return;
          }

          toast.success("Email sent successfully!");
          setFormSubmitted(true);
        }}
       
      >
        {!formSubmitted && (
    <>
        <label htmlFor="senderEmail" className="sr-only">
          Your email
        </label>
        <input
          id="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
        </>
        )}
      </form>
    </motion.section>
  );
}
