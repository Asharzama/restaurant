import React, { useState } from "react";
import styles from "../styles/global.module.scss";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/feature1.png",
    "/img/feature1.png",
    "/img/feature3.png",
  ];

  const ImageHandler = (direction) => {
    if (direction === "l") {
      setIndex((prev) => (prev !== 0 ? prev - 1 : 2));
    }
    if (direction === "r") {
      setIndex((prev) => (prev !== 2 ? prev + 1 : 0));
    }
  };
  return (
    <div className={styles.featureContainer}>
      <AiOutlineLeft style={{ left: 0 }} onClick={() => ImageHandler("l")} />
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imageContainer} key={index}>
            <div className={styles.image}>
              <div>
                <h2>Fully Loaded Pizza</h2>
                <h4>Starting just at Rs. 999</h4>
                <p>Get 50% off</p>
                <p>order now</p>
              </div>
              <Image src={image} alt={image} width={360} height={360} />
            </div>
          </div>
        ))}
      </div>
      <AiOutlineRight style={{ right: 0 }} onClick={() => ImageHandler("r")} />
    </div>
  );
};

export default Featured;
