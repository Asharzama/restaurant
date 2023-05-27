import styles from "../../styles/global.module.scss";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const StatusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;

  };

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderLeft}>
        <div className={styles.row}>
          <table
            className={styles.table}
            style={{ textAlign: "left", marginBottom: "50px" }}
          >
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>125624350879148</span>
                </td>
                <td>
                  <span className={styles.customer}>John Doe</span>
                </td>
                <td>
                  <span className={styles.customerAddress}>
                    Rendser Colony, Delhi
                  </span>
                </td>
                <td>
                  <span className={styles.total}>Rs. 298</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={StatusClass(0)}>
            <Image alt="" width={30} height={30} src="/img/paid.png" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" className={styles.checkedButton} />
            </div>
          </div>
          <div className={StatusClass(1)}>
            <Image alt="" width={30} height={30} src="/img/bake.png"/>
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" className={styles.checkedButton}/>
            </div>
          </div>
          <div className={StatusClass(2)}>
            <Image alt="" width={30} height={30} src="/img/bike.png" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" className={styles.checkedButton}/>
            </div>
          </div>
          <div className={StatusClass(3)}>
            <Image alt="" width={30} height={30} src="/img/delivered.png" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" className={styles.checkedButton}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderRight}>
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
          <button
            disabled
            className={styles.cartButton}
            style={{ cursor: "not-allowed" }}
          >
            paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
