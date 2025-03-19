import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations
import emailjs from "emailjs-com";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "success" });

    emailjs
      .send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        USER_ID!
      )
      .then(
        () => {
          setStatus({ message: "Email sent successfully!", type: "success" });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus({ message: "Failed to send email.", type: "error" });
          console.error("EmailJS Error:", error);
        }
      );

    // Remove status message after 2 seconds
    setTimeout(() => setStatus(null), 2000);
  };

  return (
    <div id="contact" className="flex items-center justify-center pb-10">
      <motion.div className="max-w-3xl w-full p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Feel free to reach out for collaboration, research discussions, or
          opportunities!
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-500" />
            <a
              href="mailto:kushwahatanu175@gmail.com"
              className="text-gray-900 text-lg hover:underline"
            >
              kushwahatanu175@gmail.com
            </a>
          </div>

          {/* <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-green-500" />
            <a
              href="tel:+918160549382"
              className="text-gray-900 text-lg hover:underline"
            >
              +91 8160549382
            </a>
          </div> */}

          <div className="flex items-center space-x-4">
            <Linkedin className="w-6 h-6 text-blue-700" />
            <a
              href="https://www.linkedin.com/in/tanu-kushwaha-728185283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-lg hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Animated Status Message */}
        <AnimatePresence>
          {status && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`text-center mt-4 font-semibold ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Contact;
