import { motion } from "framer-motion";
import SectionTitle from "../ui/common/SectionTitle";
import SectionContainer from "../ui/common/SectionContainer";

function About() {
  return (
    <section className="about" id="about">
      <SectionContainer>
        <SectionTitle
          subtitle="ABOUT US"
          title="10+ Years of Trusted Craftsmanship"
          description="Creating comfort with quality workmanship, custom furnishing and premium home solutions."
        />

        <div className="about-container">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80"
              alt="Luxury Bedroom"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>
              Crafting Comfort For Every Home
            </h3>

            <p>
              For more than 10 years,
              <strong> Usha Furnishing & Gadi Karkhana </strong>
              has been manufacturing custom mattresses,
              cushions, pillows and sofa furnishing while
              supplying premium curtains and home furnishing
              products for homes and businesses.
            </p>

            <p>
              Our focus is simple:
              quality materials,
              skilled craftsmanship,
              comfortable products
              and complete customer satisfaction.
            </p>

            <div className="about-features">

              <div className="feature">
                <span>✓</span>
                <p>Custom Mattresses</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Sofa Furnishing</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Curtains & Blinds</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Cushions & Pillows</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Home Measurement</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Doorstep Delivery</p>
              </div>

            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default About;