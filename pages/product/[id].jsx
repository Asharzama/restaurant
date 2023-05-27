import Image from "next/image";
import styles from "../../styles/global.module.scss";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "campagnola",
    price: [199, 399, 579],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maiores placeat beatae voluptas ducimus blanditiis ratione architecto dolorum praesentium temporibus aut provident molestiae, error quam libero dignissimos saepe. Velit, corporis quisquam",
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.leftSide}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt=""
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.productTitle}>{pizza.name}</h1>
        <span className={styles.productPrice}>Rs.{pizza.price[size]}</span>
        <p className={styles.productDesc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" fill={true} alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" fill={true} alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" fill={true} alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Extra Spicy</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
