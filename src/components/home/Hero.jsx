import { motion } from "framer-motion";

import Scene3D from "../ui/Scene/Scene3D";

import "../../styles/hero.css";

function Hero(){

    return(

        <section className="hero">

            <motion.div

                className="hero-left"

                initial={{opacity:0,x:-100}}

                animate={{opacity:1,x:0}}

                transition={{duration:1}}

            >

                <p className="hero-tag">

                    LUXURY FURNISHING

                </p>

                <h1 className="hero-title">

                    USHA

                    <br/>

                    FURNISHING

                </h1>

                <p className="hero-desc">

                    Premium Mattresses,

                    Curtains,

                    Cushions,

                    Sofa Furnishing

                    and Custom Home Comfort Solutions.

                </p>

                <div className="hero-buttons">

                    <button className="hero-btn">

                        Explore

                    </button>

                    <button className="hero-btn">

                        Contact

                    </button>

                </div>

            </motion.div>

            <div className="hero-right">

                <Scene3D/>

            </div>

        </section>

    )

}

export default Hero;