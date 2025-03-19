"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 98315 81640",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "subho.hazra2003@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Gandhi Colony, Tollygunge",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [buttonText, setButtonText] = React.useState("Send Message");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "eaece13d-4633-4ac2-bae4-1d724f8773fc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setButtonText("Sent Successfully!");
        event.target.reset();

        // Reset button text after 3 seconds
        setTimeout(() => {
          setButtonText("Send Message");
        }, 3000);
      } else {
        console.log("Error", data);
        setButtonText("Send Message");
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setButtonText("Send Message");
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 mt-0 md:-mt-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[0px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl"
              onSubmit={onSubmit}
            >
              <h3 className="text-4xl font-bold text-white">
                Let's Work Together
              </h3>
              <p className="text-white/80 leading-snug">
                Feel free to reach out for collaborations, opportunities, or
                just a tech chat!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  name="firstname"
                  required
                />
                <Input
                  type="lirstname"
                  placeholder="Lastname"
                  name="lastname"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>
              {/* text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type Your Message here....."
                name="message"
                required
              />
              <Button
                size="md"
                className="min-w-40 whitespace-nowrap text-center"
                disabled={isSubmitting}
                type="submit"
              >
                {buttonText}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/80">{item.title}</p>
                      <h3 className="text-[17px] font-bold text-accent">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
