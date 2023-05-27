import React from "react";
import styles from "../styles/global.module.scss";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.cardContainer}>
      <Image alt="" src="/img/pizza.png" width={220} height={220} />
      <h1 className={styles.cardTitle}>Fiori di zucca</h1>
      <span className={styles.price}>Rs. 1999</span>
      <p className={styles.cardDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
