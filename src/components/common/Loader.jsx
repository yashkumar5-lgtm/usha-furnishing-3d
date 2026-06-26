import { motion } from "framer-motion";
import "../../styles/loader.css";

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="loader-logo"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        USHA
      </motion.h1>

      <p className="loader-subtitle">
        Furnishing & Gadi Karkhana
      </p>

      <div className="loader-line">
        <div className="loader-progress"></div>
      </div>

      <p className="loader-text">
        Crafting Comfort...
      </p>
    </motion.div>
  );
}

export default Loader;