import CommonButton from "@components/buttons";
import styles from "./aiwebandmobile.module.scss";
import Image from "next/image";

import aipagegirlwithpc from "assets/aidevelopmentimages/images/aipagegirlwithpc.webp";
import Customlisticon from "assets/mauritiusimages/svg/customlisticon";

export default function Aiwebandmobile() {
  return (
    <div className={styles.aiwebandmobilemain}>
      <div className="container">
        <div className={styles.aiwebandmobiletitlemain}>
          <CommonButton text="Mobile & Web" justifyContent="center" />
          <h1>Empowering Your Business Through Digital Solutions</h1>
        </div>
        <div className={styles.aiwebandmobilecontentflxmain}>
          <div className={styles.aiwebandmobilecontentflxcard1}>
            <h2>Benefits of Mobile Development:</h2>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Wider Customer Reach</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Enhanced User Engagement</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Real-Time Communication</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Monetization Opportunities</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Offline Access</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Brand Visibility</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Improved Efficiency</p>
            </div>
          </div>
          <div className={styles.aiwebandmobilecontentflxcard2}>
            <Image src={aipagegirlwithpc} alt="aipagegirlwithpc" />
          </div>
          <div className={styles.aiwebandmobilecontentflxcard1}>
            <h2>Benefits of Web Development:</h2>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Broader Online Presence</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Responsive Design</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>SEO & Traffic Growth</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Easy Updates & Scalability</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>E-Commerce Integration</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Cost-Effective Marketing</p>
            </div>
            <div className={styles.aiwebandmobilecontentflxcard1list}>
              <Customlisticon />
              <p>Data Analytics & Insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
