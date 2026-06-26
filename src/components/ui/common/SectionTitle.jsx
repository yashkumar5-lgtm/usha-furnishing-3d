import { motion } from "framer-motion";

function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="section-subtitle">
        {subtitle}
      </span>

      <h2 className="section-heading">
        {title}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;