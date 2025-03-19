import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Globe, ClipboardList, Brush } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "2nd Place - Pharma Entrepreneurship",
      description:
        "Won 2nd place at the National Level Pharma Entrepreneurship competition on 'Pharmaceutical Healthcare Product' at Sardar Patel College of Pharmacy, Bakrol.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    },
    {
      id: 2,
      title: "3rd Place - E-Oral Presentation",
      description:
        "Secured 3rd place in the E-Oral Presentation at a National Level event held at Sardar Patel College of Pharmacy, Bakrol.",
      icon: <Medal className="w-6 h-6 text-red-500" />,
    },
    {
      id: 3,
      title: "GTU Kabbadi Team Selection",
      description:
        "Selected as a reserved player for the Gujarat Technological University Kabbadi team.",
      icon: <Star className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 4,
      title: "MT-Shop E-Commerce Development",
      description:
        "Contributed to the development of an eCommerce website - MTShop, enhancing its functionality and user experience.",
      icon: <Globe className="w-6 h-6 text-green-500" />,
    },
    {
      id: 5,
      title: "National Conference - 'Can I Patent It'",
      description:
        "Participated in a National Conference on 'Can I Patent It' at Anand Pharmacy College, supported by SSIP, IIC, and IPA Anand local branch.",
      icon: <ClipboardList className="w-6 h-6 text-purple-500" />,
    },
    {
      id: 6,
      title: "Mahartcontest - Indian Art Competition",
      description:
        "Participated in 'Mahartcontest,' an Indian Art contest registered with MSME by the Government of India, certified by ISO 9001:2015, and authorized by the Government of Maharashtra.",
      icon: <Brush className="w-6 h-6 text-pink-500" />,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" className="space-y-16">
          <motion.div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Achievements</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing my contributions in research, competitions, and
              sports.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4"
              >
                {achievement.icon}
                <div>
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
