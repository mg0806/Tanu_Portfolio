import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FlaskRound as Flask, Brain, Pill } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  details: string[];
  link?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Enhanced Antiulcer Effect of Aegle Marmelos",
      description:
        "Development and exploration of natural antiulcer compounds from Aegle Marmelos, focusing on enhanced bioavailability and reduced side effects.",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      icon: <Flask className="w-6 h-6" />,
      details: [
        "Investigated natural compounds for antiulcer properties",
        "Conducted bioavailability studies",
        "Analyzed pharmacological effects",
        "Developed enhanced formulation techniques",
      ],
    },
    {
      id: 2,
      title: "Eco-friendly Pastilles for Alzheimer's Disease",
      description:
        "SSIP Grant Project focusing on developing environmentally conscious pastille formulations for Alzheimer's treatment.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      icon: <Brain className="w-6 h-6" />,
      details: [
        "Developed eco-friendly formulation methods",
        "Optimized drug delivery systems",
        "Conducted stability studies",
        "Evaluated environmental impact",
      ],
    },
    {
      id: 3,
      title: "Carbamazepine Pastilles for Epilepsy",
      description:
        "SSIP Grant Project aimed at developing innovative pastille formulations for improved epilepsy treatment.",
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80",
      icon: <Pill className="w-6 h-6" />,
      details: [
        "Innovated drug delivery mechanisms",
        "Performed dissolution studies",
        "Analyzed bioavailability enhancement",
        "Conducted patient compliance studies",
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
            <h1 className="text-4xl font-bold text-white mb-4">
              Research Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exploring innovative pharmaceutical solutions through research and
              development. Each project represents a step towards advancing
              healthcare and medical treatments.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image Container with Hover Effect */}
                <div className="relative h-48 overflow-hidden flex items-end group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Dark Gradient Overlay (Darkens on Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />

                  {/* Project Title and Icon (Stays at the Bottom) */}
                  <div className="absolute bottom-4 left-4 text-white flex items-center space-x-2 transition-all duration-300 group-hover:text-yellow-400">
                    {project.icon}
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>

                {/* Project Description */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
                    >
                      Learn More <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-gray-900 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-lg mb-6">
              I'm always open to discussing research opportunities and
              innovative pharmaceutical projects.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
