import CommonButton from "@components/buttons"
import styles from "./aiwork.module.scss"
import Image from "next/image"

import Scifiimage from "assets/aidevelopmentimages/images/sci-fi2.png"

export default function Aiwork() {
  return (
    <div className={styles.aiworksectionmain}>
        <div className={styles.aiworkscifiiamge}>
            <Image src={Scifiimage} alt="Scifiimage" />
        </div>
        <div className="container">
            <div className={styles.aiworktitlemain}>
                <CommonButton text="How It Work" justifyContent="center"/>
                <h1>Our Work Process</h1>
                <p>The systematic approach of Rejoice FX is worth an in-depth exploration, where expertise is combined for results that are beyond compare.</p>
            </div>
            <div className={styles.aiworkproccesstepdivmain}>
                <div className={styles.aiworkproccesstepdivline}></div>
                <div className={styles.aiworkproccesstepdiv}>
                    <div className={styles.aiworkproccesstepdivcircle}>
                        <span>01</span>
                    </div>
                    <h2>Requirement Analysis</h2>
                    <p>We start by understanding your forex business needs, ensuring our solutions are perfectly aligned with your goals and challenges. This deep dive sets the foundation for a successful collaboration.</p>
                </div>
                <div className={styles.aiworkproccesstepdiv}>
                    <div className={styles.aiworkproccesstepdivcircle}>
                        <span>02</span>
                    </div>
                    <h2>Design & Development</h2>
                    <p>Our team crafts tailored forex solutions with a focus on innovation and functionality. From web platforms to AI bots, we design and develop to ensure seamless performance.</p>
                </div>
                <div className={styles.aiworkproccesstepdiv}>
                    <div className={styles.aiworkproccesstepdivcircle}>
                        <span>03</span>
                    </div>
                    <h2>Testing & Quality Assurance</h2>
                    <p>We rigorously test every solution to meet top industry standards. Our focus is on ensuring that your platforms operate smoothly and reliably in the fast-paced forex market.</p>
                </div>
                <div className={styles.aiworkproccesstepdiv}>
                    <div className={styles.aiworkproccesstepdivcircle}>
                        <span>04</span>
                    </div>
                    <h2>Deployment & Support</h2>
                    <p>After successful testing, we deploy the solution and offer continuous support. Whether it’s trading platforms or CRM systems, we ensure smooth operations post-launch.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
