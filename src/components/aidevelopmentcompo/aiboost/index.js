import CommonButton from "@components/buttons";
import styles from "./aiboost.module.scss";

export default function Aiboost() {
  return (
    <div className={styles.aiboostsectionmain}>
      <div className="container">
        <div className={styles.aiboostsectionflxmain}>
          <div className={styles.aiboostsectionflx1}>
            <CommonButton
              text="Boost to Your Business"
              justifyContent="start"
            />
            <h1>
              Get Significant Boost to Your Business with AI/ML Devleopment
              Services
            </h1>
            <p>
              Gives information about how Rejoice FX has grown and what they
              have achieved since the year 2019 which clearly portrays our
              commitment to quality and client satisfaction.
            </p>
          </div>
          <div className={styles.aiboostsectionflx2}>
            <div className={styles.aiboostsectionflxcard}>
              <h2>810+</h2>
              <p>Remarkable Project</p>
            </div>
            <div className={styles.aiboostsectionflxcard}>
              <h2>500+</h2>
              <p>Happy customers</p>
            </div>
            <div className={styles.aiboostsectionflxcard}>
              <h2>120+</h2>
              <p>Strong Team</p>
            </div>
            <div className={styles.aiboostsectionflxcard}>
              <h2>90+</h2>
              <p>Repeat Business Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
