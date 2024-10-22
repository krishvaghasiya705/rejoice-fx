import Image from "next/image"
import styles from "./aidigitalsection.module.scss"

import CommonButton from "@components/buttons"
import Scifiimage from "assets/aidevelopmentimages/images/sci-fi2.png"
import aihandmobileimage from "assets/aidevelopmentimages/images/aihandmobileimage.webp"
import aiuiuximage from "assets/aidevelopmentimages/images/aiuiuximage.webp"
import aiselectimage from "assets/aidevelopmentimages/images/aiselectimage.webp"

export default function Aidigitalsection() {
  return (
    <div className={styles.aidigitalsectionmain}>
        <div className={styles.scifiimagemain}>
            <Image src={Scifiimage} alt="Scifiimage" />
        </div>
        <div className="container">
            <div className={styles.aidigitaltitlemain}>
                <CommonButton text="Digital Solutions for Every Device" justifyContent="center" />
                <h1>Mobile & Web Development for Your Success</h1>
            </div>
            <div className={styles.aidigitalcardsmain}>
                <div className={styles.aidigitalcard}>
                    <div className={styles.aidigitalcardtopcontent}>
                        <div className={styles.aidigitalcardtopcontentcircle}>
                            <span>01</span>
                        </div>
                        <h2>Custom App Development</h2>
                        <p>We create tailored mobile applications for iOS and Android, designed to meet your business needs and engage your users.</p>
                    </div>
                    <div className={styles.aidigitalcardtopcontentimagemain}>
                        <Image src={aihandmobileimage} alt="aihandmobileimage" />
                    </div>
                </div>
                <div className={styles.aidigitalcard}>
                    <div className={styles.aidigitalcardtopcontent}>
                        <div className={styles.aidigitalcardtopcontentcircle}>
                            <span>02</span>
                        </div>
                        <h2>Responsive Web Design</h2>
                        <p>Create visually appealing, high-performance websites that deliver a seamless experience across all devices.</p>
                    </div>
                    <div className={styles.aidigitalcardtopcontentimagemain}>
                        <Image src={aiuiuximage} alt="aiuiuximage" />
                    </div>
                </div>
                <div className={styles.aidigitalcard}>
                    <div className={styles.aidigitalcardtopcontent}>
                        <div className={styles.aidigitalcardtopcontentcircle}>
                            <span>03</span>
                        </div>
                        <h2>E-Commerce Integration</h2>
                        <p>Develop secure and scalable e-commerce platforms with integrated payment gateways and CRM systems for streamlined operations.</p>
                    </div>
                    <div className={styles.aidigitalcardtopcontentimagemain}>
                        <Image src={aiselectimage} alt="aiselectimage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
