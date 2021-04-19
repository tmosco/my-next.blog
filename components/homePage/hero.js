import Image from "next/image"

import styles from "./hero.module.css"


const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
              <Image src="/images/site/profile.jpg" alt="An image showing Tayo" width={300} height={300}/>
            </div>
            <h1>Hi, I'm Tayo Oyeniyi</h1>
            <p>I blog about the latest happenings in the world</p>
        </section>
    );
};

export default Hero;