import { motion } from "framer-motion";

import SectionTitle from "../ui/common/SectionTitle";
import SectionContainer from "../ui/common/SectionContainer";

import contact from "../../data/contact";

function Contact() {
  return (
    <section className="contact" id="contact">

      <SectionContainer>

        <SectionTitle
          subtitle="CONTACT US"
          title="Let's Create Your Perfect Comfort"
          description="Get in touch with us for custom mattresses, sofa furnishing, curtains and complete home furnishing solutions."
        />

        <div className="contact-container">

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="contact-card">

              <h3>{contact.business}</h3>

              <p>📍 {contact.address}</p>

              <p>📞 {contact.phone}</p>

              <p>🕒 {contact.timing}</p>

              <a
                href="https://www.google.com/maps/place/Usha+Furnishing+%26+Gadi+Karkhana/@18.5857325,73.9688928,17z"
                target="_blank"
                rel="noreferrer"
                className="directions-btn"
              >
                📍 Get Directions
              </a>

            </div>

          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
              />

              <select>

                <option>Select Product</option>

                <option>Custom Mattress</option>

                <option>Sofa Furnishing</option>

                <option>Curtains</option>

                <option>Cushions & Pillows</option>

              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your requirement..."
              ></textarea>

              <a
                className="contact-btn"
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
              >
                Request a Quote on WhatsApp
              </a>

            </form>

          </motion.div>

        </div>

      </SectionContainer>

    </section>
  );
}

export default Contact;