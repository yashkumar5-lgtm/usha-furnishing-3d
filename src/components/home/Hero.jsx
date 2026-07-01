import { motion } from "framer-motion";

import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          CUSTOM SOFAS • MATTRESSES • CURTAINS
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          USHA
          <br />
          FURNISHING
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Transform your home with premium custom sofas,
          mattresses, curtains, cushions and furnishing
          solutions crafted with quality materials and
          expert workmanship.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="hero-btn hero-btn-primary">
            Explore Collection
          </button>

          <button className="hero-btn hero-btn-secondary">
            Contact Us
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>5000+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>100%</h2>
            <p>Custom Made</p>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/images/blue-corner-sofa.jpeg"
          alt="Custom Corner Sofa"
          className="hero-image"
        />
      </motion.div>

    </section>
  );
}

export default Hero;