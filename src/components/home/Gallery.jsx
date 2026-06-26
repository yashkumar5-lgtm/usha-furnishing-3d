import { motion } from "framer-motion";
import SectionTitle from "../ui/common/SectionTitle";
import SectionContainer from "../ui/common/SectionContainer";
import gallery from "../../data/gallery";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <SectionContainer>

        <SectionTitle
          subtitle="OUR GALLERY"
          title="Craftsmanship in Every Detail"
          description="A glimpse of our premium furnishing work and custom home comfort solutions."
        />

        <div className="gallery-grid">

          {gallery.map((item) => (

            <motion.div
              key={item.id}
              className="gallery-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <span>{item.category}</span>

                <h3>{item.title}</h3>

              </div>

            </motion.div>

          ))}

        </div>

      </SectionContainer>
    </section>
  );
}

export default Gallery;