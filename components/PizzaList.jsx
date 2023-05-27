import React from "react";
import styles from "../styles/global.module.scss";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.listContainer}>
      <h1 className={styles.title}>The Best Pizza in Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel et
        voluptatum iste consequatur, optio reiciendis nesciunt. Eos dignissimos
        ea, nulla itaque sunt molestiae iste beatae!
      </p>
      <div className={styles.listWrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
