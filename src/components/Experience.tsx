import React from "react";
import { motion } from "framer-motion";
import {
  // Briefcase,
  Microscope,
  // FlaskRound as Flask,
  Building,
} from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  details: string[];
}

const ExperiencePage = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Intern",
      company: "Farmson Basic Drugs Pvt Ltd",
      duration: "June - July 2024",
      description:
        "Hands-on experience across QA, QC, ADL, and Production departments, including Microbiology and Validation.",
      image:
        "https://img.etimg.com/thumb/msid-112846102,width-300,height-225,imgsize-9560,resizemode-75/farmson.jpg",
      icon: <Microscope className="w-6 h-6" />,
      details: [
        "Performed HPLC and GC analysis",
        "Worked in aseptic area and microbiology labs",
        "Quality testing and validation of pharmaceutical products",
        "Gained insights on effluent treatment and regulatory compliance",
      ],
    },
    {
      id: 2,
      role: "Industrial Visit",
      company: "Amanta Healthcare, Kheda",
      duration: "2023",
      description:
        "Explored pharmaceutical manufacturing processes for large & small volume parenterals.",
      image: "https://www.amanta.co.in/images/amanta-logo.png",
      icon: <Building className="w-6 h-6" />,
      details: [
        "Understanding of sterile drug manufacturing",
        "Exposure to quality control processes",
        "Study of automated production and packaging systems",
      ],
    },
  ];

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
            <h1 className="text-4xl font-bold text-black mb-4">
              Professional Experience
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A journey through hands-on experience in pharmaceutical research,
              quality assurance, and industrial visits.
            </p>
          </motion.div>

          {/* Experience Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-gray-900">
                    <div className="flex items-center space-x-2">
                      {exp.icon}
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {exp.role}
                  </h2>
                  <p className="text-gray-600 italic mb-2">{exp.duration}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Key Learnings:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exp.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
