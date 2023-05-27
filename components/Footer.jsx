import React from "react";
import styles from "../styles/global.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItem}>
        <Image src="/img/bg.png" fill alt="" style={{objectFit: "cover"}}/>
      </div>
      <div className={styles.footerItem}>
        <div className={styles.footerCard}>
          <h2 className={styles.motto}>
            oh yes, we did it, we have well baked slice of pizza
          </h2>
        </div>
        <div className={styles.footerCard}>
          <h1 className={styles.footerTitle}>find our restaurants</h1>
          <p className={styles.address}>
            165, Lane Road.
            <br /> Delhi, 300123
            <br /> (+91) 432-12341
          </p>
          <p className={styles.address}>
            32, Maharana Building.
            <br /> Gurugram, 321312
            <br /> (+91) 432-12342
          </p>
          <p className={styles.address}>
            91A, Demin Complex.
            <br /> Noida, 310325
            <br /> (+91) 432-12343
          </p>
          <p className={styles.address}>
            87, Leader Park.
            <br /> Mumbai, 129482
            <br /> (+91) 432-12344
          </p>
        </div>
        <div className={styles.footerCard}>
          <h1 className={styles.footerTitle}>working hours</h1>
          <p className={styles.address}>
            MONDAY TO FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.address}>
            SATURDAY AND SUNDAY
            <br /> 11:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
