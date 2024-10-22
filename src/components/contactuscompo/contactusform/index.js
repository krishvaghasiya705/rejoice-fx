import styles from "./contactusform.module.scss";
import Rightarrow from "assets/svg/rightarrow";


export default function Contactusform() {
  return (
    <div className={styles.contactusformmain}>
      <div className="container">
        <div className={styles.contactusformcontentflxmain}>
          <div className={styles.contactusformcontentflx1}>
            <h1>We're Here to Help</h1>
            <p>
              Need assistance? Get in touch with our team for any queries about
              our services.
            </p>
          </div>
          <div className={styles.contactusformcontentflx2}>
            <div className={styles.contactusformcontentflx2inner}>
              <div className={styles.contactusformcontentflx2innerinputmain}>
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className={styles.contactusformcontentflx2innerinputmain}>
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>
            <div className={styles.contactusformcontentflx2inner}>
              <div className={styles.contactusformcontentflx2innerinputmain}>
                <label>Email</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className={styles.contactusformcontentflx2innerinputmain}>
                <label>Phone</label>
                <input type="number" placeholder="Enter your number" />
              </div>
            </div>
            <div className={styles.contactusformcontentflx2inner}>
              <div className={styles.contactusformcontentflx2innerinputmain}>
                <label>Message</label>
                <textarea placeholder="Type your message here..."></textarea>
              </div>
            </div>
            <div className={styles.contactusformcontentflx2inner}>
              <div className={styles.contactusformcontentflx2innerinputmain}>
                <button type="submit">
                  <p>Submit Now</p>
                  <Rightarrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
