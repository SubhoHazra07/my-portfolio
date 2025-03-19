"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiCanva,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiOpencv,
  SiKeras,
  SiScikitlearn,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am Subho Hazra, a final-year Computer Science student at the Future Institute of Engineering and Management. With expertise in Java and Python, I specialize in competitive programming and leveraging modern technologies to solve real-world problems. My main mantra in life is 'Reset, Restart, Refocus' which drives me to adapt, improve, and move forward with clarity and determination.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Subho Hazra",
    },
    {
      fieldName: "Phone No",
      fieldValue: "(+91) 98315 81640",
    },
    {
      fieldName: "Address",
      fieldValue: "Gandhi Colony, Tollygunge",
    },
    {
      fieldName: "Email",
      fieldValue: "subho.hazra2003@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Age",
      fieldValue: "21+ Years",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bengali, Hindi, English",
    },
    {
      fieldName: "GitHub Id",
      fieldValue: "SubhoHazra07",
    },
    {
      fieldName: "Leetcode Id",
      fieldValue: "SubhoHazra007",
    },
    {
      fieldName: "Codechef Id",
      fieldValue: "cse14800321024",
    },
  ],
};

// Achievements Data

const experience = {
  icon: "",
  title: "My Achievement",
  description:
    "Showcasing my milestones, awards, and accomplishments on my journey in tech and innovation.",
  items: [
    {
      company: "Free Thinkers_2024",
      position: "Smart India Hackathon Finalist",
      duration: "2023",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "Explore my academic journey, qualifications, and the foundation of my technical expertise.",
  items: [
    {
      institute: "FIEM, Kolkata",
      degree: "B.Tech in CSE",
      duration: "2021 - 2025",
    },
    {
      institute: "Naktala High School",
      degree: "Class XI to Higher Secondary",
      duration: "2019 - 2021",
    },
    {
      institute: "G.C.M.V",
      degree: "Class V to Secondary",
      duration: "2013 - 2019",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "Discover my expertise in programming languages, frameworks, and cutting-edge technologies.",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML - 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS - 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiMysql />,
      name: "My SQL",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiNumpy />,
      name: "NumPy",
    },
    {
      icon: <SiPandas />,
      name: "Pandas",
    },
    {
      icon: <SiTensorflow />,
      name: "Tensorflow",
    },
    {
      icon: <SiKeras />,
      name: "Keras",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-Learn",
    },
    {
      icon: <SiOpencv />,
      name: "Open CV",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Achievements</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* achievements */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 leading-snug">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-bold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 leading-snug">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-bold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 leading-snug">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="captalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{about.title}</h3>
                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 leading-snug">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-accent">{item.fieldName}</span>
                          <span className="text-[18px] leading-tight font-bold">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
