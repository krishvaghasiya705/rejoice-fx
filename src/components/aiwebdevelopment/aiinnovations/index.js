import styles from "./aiinnovationsection.module.scss";

import Image from "next/image"
import Aidevelopmentimage2 from "assets/aidevelopmentimages/images/aidevelopment2.webp"
import CommonButton from "@components/buttons"
import Rightarrow from "assets/svg/rightarrow"

export default function Aiinnovationsection() {
  return (
    <div className={styles.aidevelopmentsectionmain}>
      <div className="container">
        <div className={styles.aidevelopmentsectionflxmain}>
          <div className={styles.aidevelopmentimagemain}>
            <Image src={Aidevelopmentimage2} alt="Aidevelopmentimage2" />
          </div>
          <div className={styles.aidevelopmentcontentmain}>
            <CommonButton
              text="Innovative Digital Solutions"
              justifyContent="start"
            />
            <h1>Why Rejoice FX for Mobile & Web Development?</h1>
            <p>
            At Rejoice FX, we don’t just build mobile apps and websites—we craft digital experiences that empower your business. Our team combines technical expertise, creative design, and a deep understanding of industry trends to deliver cutting-edge solutions that drive growth.
            </p>
            <div className={styles.getstartedbutton}>
              <button type="button">
                <span>Get Started</span>
                <Rightarrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}
