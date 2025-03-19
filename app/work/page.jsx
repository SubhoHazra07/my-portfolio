"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "AI/ML in Healthcare",
    title: "Self-Identify Mental Health Status and Get Guidance For Support",
    description:
      "Developed during SIH Grand Finale 2023 by Free Thinkers_2024, this AI-powered chatbot assesses mental health risks using validated screening tools while ensuring data privacy and secure interactions. It provides personalized self-help strategies and educational resources, with future enhancements like IoT integration and emotion analysis for real-time support.",
    stack: [
      { name: "NLTK" },
      { name: "Tensorflow" },
      { name: "Pytorch" },
      { name: "Fernet" },
      { name: "Tkinter" },
    ],
    image: "/assets/work/work1.png",
    live: "https://github.com/SubhoHazra07/Self-identifying-Mental-Health-status-and-get-guidance-for-support",
    github:
      "https://github.com/SubhoHazra07/Self-identifying-Mental-Health-status-and-get-guidance-for-support",
  },
  {
    num: "02",
    category: "Computer Vision & DL",
    title: "Binary Image Classifer using CNN",
    description:
      "This project aims to develop a deep neural network (DNN) model, specifically a Sequential Convolutional Neural Network (Conv2D), to effectively classify human faces as happy or sad based on static images. The objective is to leverage the power of deep learning to automatically learn discriminative features from facial data.",
    stack: [{ name: "Tensorflow" }, { name: "OpenCV" }, { name: "Conv2D" }],
    image: "/assets/work/work2.png",
    live: "https://github.com/SubhoHazra07/Binary-Image-Classifier-using-CNN",
    github: "https://github.com/SubhoHazra07/Binary-Image-Classifier-using-CNN",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Bank Management System",
    description:
      "The Bank Management System is an online platform enabling users to manage bank accounts, perform transactions, and view account details securely from anywhere. Built with Java, JSP, and MySQL, it features account management, fund transfers, and admin controls, providing a comprehensive and efficient digital banking experience.",
    stack: [{ name: "Java" }, { name: "JSP" }, { name: "MySQL" }],
    image: "/assets/work/work3.png",
    live: "https://github.com/SubhoHazra07/Bank-Management-System",
    github: "https://github.com/SubhoHazra07/Bank-Management-System",
  },
  {
    num: "04",
    category: "Computer Vision & DL",
    title: "Sensitive Content Detection",
    description:
      "This project leverages AI techniques, including Convolutional Neural Networks (CNNs) and Natural Language Processing (NLP), to detect and minimize sensitive content on social media. It identifies personal documents in images and text, enhancing privacy protection and raising awareness of online risks associated with sharing sensitive information.",
    stack: [
      { name: "Tensorflow" },
      { name: "Keras" },
      { name: "Conv2D" },
      { name: "NLTK" },
    ],
    image: "/assets/work/work4.png",
    live: "https://github.com/SubhoHazra07/Sensitive-Content-Detection-and-Minimization-of-Their-Influence",
    github:
      "https://github.com/SubhoHazra07/Sensitive-Content-Detection-and-Minimization-of-Their-Influence",
  },
  {
    num: "05",
    category: "ML Development",
    title: "Malicious URL Detection",
    description:
      "The Malicious URL Detection project uses machine learning to classify URLs into categories like Phishing, Malware, Defacement, or Benign. It employs feature engineering and models such as Random Forest, LightGBM, and XGBoost, trained on a labeled dataset to identify and assess potential URL threats.",
    stack: [
      { name: "Scikit-Learn" },
      { name: "Pandas" },
      { name: "XGBoost" },
      { name: "LightGBM" },
    ],
    image: "/assets/work/work5.png",
    live: "https://github.com/SubhoHazra07/Malicious-URL-Detection",
    github: "https://github.com/SubhoHazra07/Malicious-URL-Detection",
  },
  {
    num: "06",
    category: "Conversational AI & Chatbots",
    title: "Java AI Chatbot",
    description:
      "Pookie Chatbot: A Streamlit-powered conversational AI built with Google's Gemini LLM and Pinecone vector database. Features context-aware responses, query refinement, and conversation history tracking. Perfect for RAG applications and customizable knowledge bases.",
    stack: [
      { name: "Lanchain" },
      { name: "Streamlit" },
      { name: "Gemini LLM" },
      { name: "Pinecone" },
      { name: "NLTK" },
    ],
    image: "/assets/work/work6.png",
    live: "https://pookie-chatbot.streamlit.app/",
    github: "https://github.com/SubhoHazra07/Java-AI-Chatbot",
  },
  {
    num: "07",
    category: "NLP & ML Development",
    title: "Fake News Detection",
    description:
      "A Machine Learning project to Detect Fake News by classifying articles as 'Fake' or 'Not Fake' using Logistic Regression, Decision Tree, Gradient Boosting, and Random Forest. Includes text preprocessing (cleaning, tokenization, lemmatization), TF-IDF vectorization, model training, evaluation, and manual testing with saved models for reuse.",
    stack: [
      { name: "Pandas" },
      { name: "Scikit-Learn" },
      { name: "NLTK" },
      { name: "Spellchecker" },
    ],
    image: "/assets/work/work7.png",
    live: "https://github.com/SubhoHazra07/Fake-News-Detection",
    github: "https://github.com/SubhoHazra07/Fake-News-Detection",
  },
  {
    num: "08",
    category: "AI/ML in Healthcare",
    title: "Human Disease Prediction using Symptoms",
    description:
      "This project predicts diseases based on user-provided symptoms using multiple machine learning models (Random Forest, SVM, Naive Bayes, Decision Tree, KNN). Each model independently predicts a disease, and the final result is determined by a majority-vote approach. It aims to assist in early disease detection.",
    stack: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Scikit-Learn" },
      { name: "Seaborn" },
    ],
    image: "/assets/work/work8.png",
    live: "https://github.com/SubhoHazra07/Human-Disease-Prediction-based-on-Symptoms-using-Machine-Learning",
    github:
      "https://github.com/SubhoHazra07/Human-Disease-Prediction-based-on-Symptoms-using-Machine-Learning",
  },
  {
    num: "09",
    category: "Electronics",
    title: "Smart Blind Stick",
    description:
      "The Smart Blind Stick is an assistive device using Arduino UNO, ultrasonic sensors, and a buzzer to detect obstacles and alert visually impaired users. It also features a water sensor for wet surface detection, enhancing mobility and safety.",
    stack: [
      { name: "Ardiuno UNO" },
      { name: "Ultrasonic Sensor" },
      { name: "Water Sensor" },
      { name: "Buzzer" },
    ],
    image: "/assets/work/work9.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide  index
    const currentIndex = swiper.realIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 mt-0 md:-mt-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-[10px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-[100px] leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/80 leading-normal text-[14px]">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[17px] text-accent font-semibold leading-tight"
                    >
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              loop={true}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[335px] sm:h-[460px] relative group flex justify-center items-center bg-pink-50/10">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover object-center"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[30px] h-[40px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
