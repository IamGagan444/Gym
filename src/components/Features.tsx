import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { InfiniteSlider } from "../ui/InfniteSlider";
import Features2 from "./Features2";

export default function Features() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50%" }); // Trigger animation when 50% is visible

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-black py-10 space-y-10"
    >
      {/* Header with animation */}
      <motion.div
        className="mb-12 text-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          MEET THE TEAM
        </h1>
        <div className="text-8xl md:text-9xl font-bold text-gray-800 absolute -top-8 md:-top-12 right-0 left-0 opacity-10 pointer-events-none">
          02
        </div>
      </motion.div>

      {/* Infinite Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <InfiniteSlider gap={24} reverse>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
            alt="Yung Lean - Stardust"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
            alt="A$AP Rocky - Tailor Swif"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
            alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
            className="aspect-square w-[120px] rounded-[4px]"
          />
        </InfiniteSlider>
      </motion.div>

      {/* Features2 Component */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <Features2 />
      </motion.div>
    </motion.div>
  );
}
