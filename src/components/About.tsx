import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Microscope,
  GraduationCap,
  Code,
  Lightbulb,
  Beaker,
  Users,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("bpharm");

  const education = [
    {
      id: "bpharm",
      label: "B.Pharm",
      degree: "Bachelor of Pharmacy (B.Pharm)",
      school: "Anand Pharmacy College",
      graduation: "2024",
      cgpa: "8.51",
    },
    {
      id: "hsc",
      label: "HSC",
      degree: "Higher Secondary (HSC)",
      school: "ANKUR VIDHYALAYA DASHRATH",
      graduation: "2019",
      percentage: "74.9%",
    },
    {
      id: "ssc",
      label: "SSC",
      degree: "Secondary School (SSC)",
      school: "FERTILIZER NAGAR SCHOOL",
      graduation: "2017",
      percentage: "74.5%",
    },
  ];

  const skills = {
    instruments: [
      "UV-Spectrophotometer",
      "HPLC",
      "Karl Fischer Titrator",
      "Dissolution Apparatus",
      "pH Meter",
    ],
    professional: [
      "Time Management",
      "Team Leadership",
      "Research & Analysis",
      "Problem Solving",
      "Communication",
    ],
    technical: [
      "HTML & CSS",
      "MS Office Suite",
      "Canva Design",
      "Mendeley",
      "Laboratory Documentation",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate B.Pharm student with a keen interest in pharmaceutical
              research and development. Combining scientific expertise with
              creative problem-solving to contribute to healthcare innovation.
            </p>
          </motion.div>
          {/* Profile Section */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Image */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dfjuucoeq/image/upload/v1742387552/WhatsApp_Image_2025-03-19_at_17.56.48_4624e9ae_gjz7hr.jpg"
                alt="Professional Portrait"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute rounded-lg" />
            </div>

            {/* Right - Tabs & Content */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Education</h2>

                {/* Column-Wise Tabs */}
                <div className="grid grid-cols-3 gap-4">
                  {education.map((edu) => (
                    <button
                      key={edu.id}
                      onClick={() => setActiveTab(edu.id)}
                      className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-300 ${
                        activeTab === edu.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {edu.label}
                    </button>
                  ))}
                </div>

                {/* Education Details (Animated) */}
                <AnimatePresence mode="wait">
                  {education.map(
                    (edu) =>
                      activeTab === edu.id && (
                        <motion.div
                          key={edu.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 space-y-2 border-l-4 border-blue-600 pl-4"
                        >
                          <p className="text-lg font-medium">{edu.degree}</p>
                          <p className="text-gray-600">{edu.school}</p>
                          <p className="text-gray-600">
                            Year: {edu.graduation}
                          </p>
                          {edu.cgpa ? (
                            <p className="text-gray-600">CGPA: {edu.cgpa}</p>
                          ) : (
                            <p className="text-gray-600">
                              Percentage: {edu.percentage}
                            </p>
                          )}
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          {/* Skills Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Instruments */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Microscope className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Laboratory Instruments
              </h3>
              <ul className="space-y-2">
                {skills.instruments.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Beaker className="w-4 h-4 text-blue-600 mr-2" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Skills */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Professional Skills
              </h3>
              <ul className="space-y-2">
                {skills.professional.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Code className="w-4 h-4 text-blue-600 mr-2" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Fun Fact Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-gray-900 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Fun Fact</h3>
            <p className="text-lg">
              "I'm passionate about merging science with creativity in research
              & development, always seeking innovative ways to improve
              healthcare solutions!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
