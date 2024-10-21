import Image from "next/image";
import CommonButton from "@components/buttons";
import styles from "./mauritiusminimumsection.module.scss";

import mauritiuscompanyimage from "assets/mauritiusimages/image/mauritiuscompanyimage.png";

export default function Mauritiusminimumsection() {
  return (
    <div className={styles.mauritiusminimumsectionmain}>
      <div className="container">
        <div className={styles.mauritiusminimumsectiontitlemain}>
          <CommonButton text="Minimum Paid-up Capital Required" />
          <h1>Mauritius Forex License Requirements</h1>
        </div>
      </div>
      <div className={styles.mauritiusminimumsectioncontentmain}>
        <div className="container">
          <div className={styles.mauritiusminimumsectioncontentflxmain}>
            <div className={styles.mauritiusminimumsectioncontentflxfirst}>
              <div
                className={
                  styles.mauritiusminimumsectioncontentflxfirsttitletexts
                }
              >
                <h2>MUR 700,000</h2>
                <span>License Renewal Cost</span>
              </div>
              <p>
                <span>Note:</span> The company must be registered in Mauritius and have a
                registered office in Mauritius. Starting forex business in
                Mauritius is low cost, as there are strict confidentiality laws
                and flexible incorporation regulations.
              </p>
            </div>
            <div className={styles.mauritiusminimumsectioncontentflximage}>
              <Image src={mauritiuscompanyimage} alt="mauritiuscompanyimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
