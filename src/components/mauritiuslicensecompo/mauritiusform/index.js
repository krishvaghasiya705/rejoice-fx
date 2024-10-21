import CommonButton from "@components/buttons";
import styles from "./mauritiusform.module.scss";
export default function Mauritiusform() {
  return (
    <div className={styles.mauritiusformmain}>
      <div className="container">
        <div className={styles.mauritiusformflxmain}>
          <div className={styles.mauritiusformflx1}>
            <CommonButton text="OVERVIEW" justifyContent="start" />
            <h1>Why Choose Mauritius Your Forex Brokerage?</h1>
            <p>
              Rejoicefx offers a complete setup for establishing an unregulated
              Forex Company in St. Vincent and the Grenadines. While St. Vincent
              is an unregulated jurisdiction, we ensure your documents are
              prepared to allow smooth operation of your Forex brokerage. This
              makes St. Vincent an affordable and efficient solution for
              starting a Forex brokerage from a broker’s perspective. St.
              Vincent is recognized by the Organization for Economic
              Co-operation and Development (OECD) as a stable, independent, and
              politically free island.
            </p>
          </div>
          <div className={styles.mauritiusformflx2}>
            <div className={styles.mauritiusformflx2inner}>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>Email Address</label>
                <input type="Email" placeholder="Enter your email address" />
              </div>
            </div>
            <div className={styles.mauritiusformflx2inner}>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>Phone</label>
                <input type="number" placeholder="Enter your number" />
              </div>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>Country</label>
                <div>
                  <select placeholder="Select country">
                    <option>India</option>
                    <option>Nepal</option>
                    <option>Pakistan</option>
                    <option>China</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
