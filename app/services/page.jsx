"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "Experienced in backend development using Java, Jakarta EE, Servlets, JSP, and JDBC to build secure, scalable applications. Skilled in RESTful APIs, database management, and optimizing performance for enterprise solutions.",
    href: "",
  },
  {
    num: "02",
    title: "ML Development",
    description:
      "Experienced in Machine Learning development using TensorFlow, PyTorch, and Scikit-Learn to build scalable AI solutions. Skilled in data preprocessing, model optimization, and deployment for NLP, computer vision, and predictive analytics.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Experienced in UI/UX design using Figma, Adobe XD, Canva, and FlutterFlow to create intuitive digital experiences. Skilled in wireframing, prototyping, and interaction design, with a focus on usability, accessibility, and seamless collaboration.",
    href: "",
  },
  {
    num: "04",
    title: "Graphic Design",
    description:
      "Experienced in graphic design using Canva, Adobe Illustrator, and Figma to create engaging content. Skilled in marketing materials, social media graphics, event posters, and print design, with a focus on creativity and high-quality visuals.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 md:mt-10 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group -mt-6"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-7xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* titles */}
                <h2 className="text-[42px]  font-bold leading-none text-white group-hover:text-accent transition-all duration-500 -mt-4 md:mt-0">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 leading-normal text-[14px]">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
