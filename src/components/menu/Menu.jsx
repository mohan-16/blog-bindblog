import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuCategories from "./menu categories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}> {" Whats new "}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>


      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              coding
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>


        
      </div>

      <MenuCategories/>

      <h2 className={styles.subtitle}> {" Whats new "}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Travel
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>


      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
            Fashion
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              coding
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.posttitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G  </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>


        
      </div>
    </div>
  );
};

export default Menu;
