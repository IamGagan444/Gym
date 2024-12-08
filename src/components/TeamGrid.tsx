import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";

interface TeamMember {
  id: number;
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Alex Thompson", image: image1 },
  { id: 2, name: "Sarah Johnson", image: image2 },
  { id: 3, name: "Mike Williams", image: image3 },
  { id: 4, name: "Emma Davis", image: image4 },
  { id: 5, name: "Chris Wilson", image: image5 },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const subTextVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.2 },
  },
};

export default function TeamGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50%" });
  const [hasEnteredView, setHasEnteredView] = useState(false);

  // Manage animation trigger when the section enters the viewport
  useEffect(() => {
    if (isInView) {
      setHasEnteredView(true); // Trigger animation
    } else {
      setHasEnteredView(false); // Reset animation when out of view
    }
  }, [isInView]);

  return (
    <div
      className="min-h-screen bg-black p-8 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Yellow diagonal accent with lower opacity */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-full bg-yellow-400 opacity-20 transform rotate-45 translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 text-center relative">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-2 relative z-10"
            variants={headerVariants}
            initial="hidden"
            animate={hasEnteredView ? "visible" : "hidden"}
          >
            MEET THE TEAM
          </motion.h1>
          <motion.div
            className="text-8xl md:text-9xl font-bold text-gray-700 absolute z-30 top-12 right-0 left-0 opacity-0 pointer-events-none"
            variants={subTextVariants}
            initial="hidden"
            animate={hasEnteredView ? "visible" : "hidden"}
          >
            03
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          variants={container}
          initial="hidden"
          animate={hasEnteredView ? "show" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] w-[250px]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
