import Image from "next/image";
import styles from "../styles/global.module.scss";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartLeft}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extra</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.cartImgContainer}>
                  <Image
                    alt=""
                    src="/img/pizza.png"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>coralzo</span>
              </td>
              <td className={styles.extras}>Double ingredient, Extra spicy</td>
              <td className={styles.cartPrice}>Rs.199</td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>Rs. 298</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.cartRight}>
        <div className={styles.cartWrapper}>
          <h2 className={styles.cartTotal}>cart total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> Rs.298
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> Rs.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> Rs.298
          </div>
          <button className={styles.cartButton}>Checkout now!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
