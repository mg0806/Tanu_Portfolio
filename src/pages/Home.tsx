import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FileDown, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

// Importing individual section components
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Activities from "../components/Activities";
import Contact from "../components/Contacts";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tanu Kushwaha
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
              Final Year B-Pharm Student
            </h2>
            <div className="h-12 mb-8">
              <TypeAnimation
                sequence={[
                  "Pharmaceutical Research",
                  2000,
                  "Drug Formulation",
                  2000,
                  "Quality Assurance",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-lg sm:text-xl text-blue-600 font-medium"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://res.cloudinary.com/dfjuucoeq/image/upload/v1742382009/CV_2025022216243154_gcbdx8.pdf"
                target="blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-gray-900 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FileDown size={20} />
                View Resume
              </a>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80} // Prevents overlap issues with sticky headers
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Explore Projects
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Pharmaceutical Research"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Sections */}
      <div className="space-y-24">
        {/* About Section */}
        <div id="about" className="  bg-gray-100">
          <About />
        </div>

        {/* Projects Section (Make sure ID matches `to="projects"`) */}
        <div id="projects" className="">
          <Projects />
        </div>

        {/* Experience Section */}
        <div id="experience" className=" bg-gray-100">
          <Experience />
        </div>

        {/* Achievements Section */}
        <div id="achievements" className="">
          <Achievements />
        </div>

        {/* Activities Section */}
        <div id="activities" className=" bg-gray-100">
          <Activities />
        </div>

        {/* Contact Section */}
        <div id="contact" className="">
          <Contact />
        </div>
      </div>

      {/* Floating Molecules Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-600/10 rounded-full"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "50%", "0%"],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
