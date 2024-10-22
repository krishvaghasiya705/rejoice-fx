import styles from "./aidevelopment.module.scss"

import Image from "next/image"
import Aidevelopmentimage from "assets/aidevelopmentimages/images/aidevelopment.webp"
import CommonButton from "@components/buttons"
import Rightarrow from "assets/svg/rightarrow"

export default function Aidevelopmentsection() {
  return (
    <div className={styles.aidevelopmentsectionmain}>
        <div className="container">
            <div className={styles.aidevelopmentsectionflxmain}>
                <div className={styles.aidevelopmentimagemain}>
                    <Image src={Aidevelopmentimage} alt="Aidevelopmentimage" />
                </div>
                <div className={styles.aidevelopmentcontentmain}>
                    <CommonButton text="What Is AI Development?" justifyContent="start"/>
                    <h1>Building Intelligent Systems for Automation and Innovation</h1>
                    <p>AI development involves creating intelligent systems that can perform tasks typically requiring human intelligence, such as decision-making, problem-solving, and learning. By leveraging machine learning, data analysis, and automation, AI solutions streamline operations and boost business efficiency. From chatbots to predictive analytics, AI transforms how businesses operate and grow.</p>
                    <div className={styles.getstartedbutton}>
                        <button type="button"><span>Get Started</span><Rightarrow /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
