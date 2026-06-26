import { motion } from "framer-motion";
import SectionTitle from "../ui/common/SectionTitle";
import SectionContainer from "../ui/common/SectionContainer";
import products from "../../data/products";

function Products() {
  return (
    <section className="products" id="products">
      <SectionContainer>

        <SectionTitle
          subtitle="OUR PRODUCTS"
          title="Premium Home Furnishing Collection"
          description="Crafted with quality materials, attention to detail and over 10 years of trusted workmanship."
        />

        <div className="products-grid">

          {products.map((product) => (

            <motion.div
              className="product-card"
              key={product.id}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 }
              }}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <div className="product-content">

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <button className="product-btn">
                  Explore
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </SectionContainer>
    </section>
  );
}

export default Products;