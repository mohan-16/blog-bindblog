import Image from "next/image";
import styles from "./card.module.css";
import Button from "../button/Button";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imagecontainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>

        <div className={styles.textcontainer}>
          <div className={styles.details}>
            <span className={styles.date}>11.02.2024</span>
            <span className={styles.category}>CULTURE</span>
          </div>

          <h1>Lorem ipsum dolor sitamet consectetur adipisicing elit.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aliquid, temporibus minima reprehenderit sint vero!
          </p>
          <Button button="Read More" />
        </div>
      </div>
    </div>
  );
};

export default Card;
