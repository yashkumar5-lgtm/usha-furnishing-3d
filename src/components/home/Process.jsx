import { motion } from "framer-motion";
import SectionTitle from "../ui/common/SectionTitle";
import SectionContainer from "../ui/common/SectionContainer";
import processSteps from "../../data/process";

function Process() {
  return (
    <section className="process" id="process">
      <SectionContainer>

        <SectionTitle
          subtitle="HOW WE WORK"
          title="From Your Idea To Your Home"
          description="Every project follows a simple process focused on quality, craftsmanship and customer satisfaction."
        />

        <div className="timeline">

          {processSteps.map((step) => (

            <motion.div
              className="timeline-card"
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="timeline-number">
                {step.id}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </motion.div>

          ))}

        </div>

      </SectionContainer>
    </section>
  );
}

export default Process;