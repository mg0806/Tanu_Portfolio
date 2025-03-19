import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  Globe,
  Brain,
  Newspaper,
  Factory,
  Leaf,
  FileText,
  Book,
  Lightbulb,
  Cpu,
} from "lucide-react";

interface Activity {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Activities = () => {
  const activities: Activity[] = [
    {
      id: 1,
      title: "Coordinator - Meghdhanush",
      description:
        "Organized the inter-college event at Anand Pharmacy College on 10th-11th January 2023, ensuring smooth event execution.",
      icon: <ClipboardList className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Volunteer - 11th Pharmavision",
      description:
        "Actively participated in event management for the national-level pharmacy conference at Anand Pharmacy College on 18th-19th September 2023.",
      icon: <Users className="w-6 h-6 text-green-500" />,
    },
    {
      id: 3,
      title: "Cure Controversy - Pharmaspectre 2.0",
      description:
        "Participated in 'Cure Controversy' focused on General Healthcare and Awareness at Shree Dhanvantary College of Pharmacy, Surat.",
      icon: <Brain className="w-6 h-6 text-yellow-500" />,
    },
    {
      id: 4,
      title: "National Service Scheme (NSS) Volunteer",
      description:
        "Served as a volunteer in various adopted villages under the National Service Scheme (NSS).",
      icon: <Globe className="w-6 h-6 text-purple-500" />,
    },
    {
      id: 5,
      title: "Bill Board Committee Member",
      description:
        "Facilitated services for College posters, flyers, and banners as a member of the Bill Board Committee.",
      icon: <Newspaper className="w-6 h-6 text-gray-600" />,
    },
    {
      id: 6,
      title: "Industrial Visit - Amanta Healthcare",
      description:
        "Visited Amanta Healthcare in Kheda to study Large Volume Parenterals (LVP) and Small Volume Parenterals (SVP).",
      icon: <Factory className="w-6 h-6 text-indigo-500" />,
    },
    {
      id: 7,
      title: "Medicinal Garden Visit - Anand Agriculture University",
      description:
        "Explored the huge biodiversity of Indian traditional medicines at Anand Agriculture University.",
      icon: <Leaf className="w-6 h-6 text-green-500" />,
    },
    {
      id: 8,
      title: "Patent & POC Workshop",
      description:
        "Participated in a Patent & POC workshop at Gujarat Technological University, supported by SSIP and Patent Agents, Ahmedabad.",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
    },
    {
      id: 9,
      title: "National Paper Presentation - Novel Formulations",
      description:
        "Presented a research paper on 'Novel Formulation/Techniques in Pharmacy' at Anand Pharmacy College, supported by SSIP, IIC, and IPA Anand.",
      icon: <Book className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 10,
      title: "Idea Presentation - Enlightening Flames of Talent",
      description:
        "Participated in the Idea Presentation event at Anand Institute of Management and Information Science, Anand.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    },
    {
      id: 11,
      title: "National Conference - AI in Pharmaceutical Innovations",
      description:
        "Attended a national conference at Nirma University on 'Harnessing AI/ML in Pharmaceutical Innovations' supported by GSBTM, CSIR, NRF, NSERB India, USP, and the Government of Gujarat.",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
    },
    {
      id: 12,
      title: "Paper Presentation - Minor Research Project",
      description:
        "Presented a minor research project at the National Conference at Nirma Institute of Pharmacy, supported and sponsored by Govt. of Gujarat, CSIR, and the Dept. of Biotechnology.",
      icon: <FileText className="w-6 h-6 text-gray-700" />,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" className="space-y-16">
          <motion.div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Activities</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leadership, event coordination, and social contributions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4"
              >
                {activity.icon}
                <div>
                  <h3 className="text-lg font-semibold">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;
