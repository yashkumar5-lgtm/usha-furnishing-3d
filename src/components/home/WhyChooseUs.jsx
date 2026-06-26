import { motion } from "framer-motion";

import SectionTitle from "../ui/common/SectionTitle";
import SectionContainer from "../ui/common/SectionContainer";

import whyChooseUs from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why">

      <SectionContainer>

        <SectionTitle
          subtitle="WHY CHOOSE US"
          title="Why Families Trust Usha Furnishing"
          description="For over a decade, we've been delivering comfort, quality, and craftsmanship through custom furnishing solutions."
        />

        <div className="why-grid">

          {whyChooseUs.map((item) => (

            <motion.div
              className="why-card"
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </SectionContainer>

    </section>
  );
}

export default WhyChooseUs;