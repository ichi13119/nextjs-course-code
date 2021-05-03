import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/introvert-event.jpg"
          alt="Person image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello world.</h1>
      <p>Beginner developer</p>
    </section>
  );
};

export default Hero;
