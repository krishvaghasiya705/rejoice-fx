import styles from "./aidigitaldevelopment.module.scss";
import CommonButton from "@components/buttons";
import Cloudicon from "assets/aidevelopmentimages/svg/cloudicon";
import Pcmobileicon from "assets/aidevelopmentimages/svg/pcmobileicon";
import Carticon from "assets/aidevelopmentimages/svg/carticon";
import Cloudapiicon from "assets/aidevelopmentimages/svg/cloudapiicon";

export default function Aidigitaldevelopment() {
  return (
    <div className={styles.aidevelopmentmain}>
      <div className="container">
        <div className={styles.aidevelopmenttitlemain}>
          <CommonButton text="Digital Development" justifycontent="center" />
          <h1>Comprehensive Solutions for Modern Businesses</h1>
        </div>
        <div className={styles.aidevelopmentcardsflxmain}>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Cloudicon />
            </div>
            <div>
              <h2>Cloud Solutions</h2>
              <p>
              Implementing cloud services for scalable and secure data storage and management.
              </p>
            </div>
          </div>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Pcmobileicon />
            </div>
            <div>
              <h2>Responsive Web Design</h2>
              <p>Creating adaptable websites that offer a seamless user experience across all devices.
              </p>
            </div>
          </div>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Carticon />
            </div>
            <div>
              <h2>E-Commerce Solutions</h2>
              <p>Developing secure online stores with integrated payment gateways for smooth transactions.</p>
            </div>
          </div>
          <div className={styles.aidevelopmentcard}>
            <div className={styles.aidevelopmentcardcircle}>
              <Cloudapiicon />
            </div>
            <div>
              <h2>API Integration Services</h2>
              <p>Connecting third-party services to enhance functionality and streamline business processes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
