import React from "react";
import styles from "../styles/global.module.scss";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <FiPhoneCall />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>order now!</div>
          <div className={styles.text}>012 345 6789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/img/logo.png"
            alt="logo"
            width={69}
            height={69}
            priority={true}
            style={{cursor: "pointer"}}
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <BiCartAlt />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
