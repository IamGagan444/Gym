
import { motion } from "framer-motion";

const Info = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  return (
    <div
      className="flex flex-col justify-center  w-full h-svh bg-black bg-cover bg-center "
      style={{
        backgroundImage: `url('https://www.thirdspace.london/wp-content/uploads/2024/09/image-13-1920x1012.webp')`,
      }}
    >
      <div className="ml-20">
        <motion.div
          className="text-white text-5xl font-bold mb-4 mt-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          THE ONLY
        </motion.div>
        <motion.div
          className="text-yellow-500 text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          IMPOSSIBLE
        </motion.div>
        <motion.div
          className="text-white text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          JOURNEY IS
        </motion.div>
        <motion.div
          className="text-white text-5xl font-bold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          THE ONE YOU
        </motion.div>
        <motion.div
          className="text-yellow-500 text-5xl font-bold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          NEVER BEGIN.
        </motion.div>
        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-4 rounded mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          BEGIN YOUR JOURNEY
        </motion.button>
      </div>
    </div>
  );
};

export default Info;
