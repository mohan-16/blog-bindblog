import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <b>Hey, Mohan here!!</b> Discover my stories and creative ideas
        </h1>
      </div>

      <div className={styles.titlecontainer}>
        <div className={styles.Imagegallery}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.sentence}>
          <div className={styles.posttitle}>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          </div>
          <div className={styles.postdescription}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta,
              laboriosam placeat nesciunt accusamus tempora veritatis! Sint sed
              deleniti vitae esse ex, incidunt itaque amet molestias dolores
              quam beatae atque!
            </p>
          </div>
          <button className={styles.ctn}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
