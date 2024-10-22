import CommonButton from "@components/buttons";
import styles from "./aiserivces.module.scss";
import Gearicon from "assets/aidevelopmentimages/svg/gearicon";
import Gearicon2 from "assets/aidevelopmentimages/svg/gearicon2";
import Gearicon3 from "assets/aidevelopmentimages/svg/gearicon3";
import Gearicon4 from "assets/aidevelopmentimages/svg/gearicon4";

export default function Aiservices() {
  return (
    <div className={styles.aidevelopmentmain}>
      <div className="container">
        <div className={styles.aidevelopmenttitlemain}>
          <CommonButton text="AI Services" justifycontent="center" />
          <h1>Transform Your Business with our AI & ML Solutions</h1>
          <p>
            Rejoice FX, We are providing advanced AI and ML Solutions as per
            your business requirements.
          </p>
        </div>
        <div className={styles.aidevelopmentcardsflxmain}>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Gearicon />
            </div>
            <div>
                <h2>Improved Decision Making</h2>
                <p>Drive with the data to inform and drive business decisions that you make and reduce risks.</p>
            </div>
          </div>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Gearicon2 />
            </div>
            <div>
                <h2>Operational Efficiency</h2>
                <p>Automate routine work and streamline processes to let your team put focus on more valuable work and increase productivity overall.</p>
            </div>
          </div>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Gearicon3 />
            </div>
            <div>
                <h2>Customer Experience</h2>
                <p>Use AI and ML to create personalized touchpoints with your customers and deliver great service which in turn will help you increase overall customer satisfaction and loyalty.</p>
            </div>
          </div>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Gearicon4 />
            </div>
            <div>
                <h2>Competitive Advantage</h2>
                <p>Being innovative, and having the ability to quickly adapt to market changes and take advantage of emerging opportunities by leveraging new AI/ML technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
