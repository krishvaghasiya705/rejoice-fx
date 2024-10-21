import Image from "next/image";
import CommonButton from "@components/buttons";
import styles from "./mauritiusminimumsection.module.scss";

import mauritiuscompanyimage from "assets/mauritiusimages/image/mauritiuscompanyimage.png";
import Customlisticon from "assets/mauritiusimages/svg/customlisticon";

export default function Mauritiusminimumsection({title, note}) {
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
              <div className={styles.mauritiusminimumsectioncontentflxfirsttexts}>
                <div
                  className={
                    styles.mauritiusminimumsectioncontentflxfirsttitletexts
                  }
                >
                  <h2>{title}</h2>
                  <span>License Renewal Cost</span>
                </div>
                <p>
                  <span>Note:</span> {note}
                </p>
              </div>
              <div className={styles.mauritiusminimumsectioncontentflxsecondtexts}>
                <h3>Documents Required :</h3>
                <div className={styles.mauritiusminimumsectioncontentflxsecondcontentdevider}>
                  <div className={styles.mauritiusminimumsectioncontentflxsecondcontentdeviderfirst}>
                    <div className={styles.customline}><Customlisticon /><p>Notarized Passport copy (Should be notarized in English - 2 copies)</p></div>
                    <div className={styles.customline}><Customlisticon /><p>Last 3 months Utility Bill (Should be notarized in English - 2 copies with original)</p></div>
                    <div className={styles.customline}><Customlisticon /><p>Director/Shareholder's Bank Reference Letter</p></div>
                    <div className={styles.customline}><Customlisticon /><p>Director/Shareholder's CV</p></div>
                  </div>
                  <div className={styles.mauritiusminimumsectioncontentflxsecondcontentdeviderfirst}>
                    <div className={styles.customline}><Customlisticon /><p>Formed and verified corporate documents</p></div>
                    <div className={styles.customline}><Customlisticon /><p>Certificate of Incumbency</p></div>
                    <div className={styles.customline}><Customlisticon /><p>Bank Application Forms</p></div>
                    <div className={styles.customline}><Customlisticon /><p>AML Procedures</p></div>
                  </div>
                </div>
              </div>
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
