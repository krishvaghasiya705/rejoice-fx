import Image from "next/image";
import styles from "./aisolution.module.scss";

import Scifiimage from "assets/aidevelopmentimages/images/sci-fi.png";
import CommonButton from "@components/buttons";
import Crmicon from "assets/footerimage/svg/crmicon.svg";

export default function Aisolution() {
  return (
    <div className={styles.aisolutionmain}>
      <div className={styles.aisolutionscifibackground}>
        <Image src={Scifiimage} alt="Scifiimage" />
      </div>
      <div className="container">
        <div className={styles.aisolutioncontentmain}>
          <div className={styles.aisolutioncontenttitlemain}>
            <CommonButton
              text="AI Solution"
              justifycontent="center"
              icon={Crmicon}
            />
            <h1>Real-Time Data</h1>
            <p>
              Here is the real-time data to identify and understand impact on
              the business when businesses are moving into AI/ML solutions:
            </p>
          </div>
          <div className={styles.aisolutioncontentgridmain}>
            <div className={styles.aisolutioncontentgridcard}>
                <h2>85%</h2>
                <p>of companies report that AI and ML has provided them with a competitive advantage in the market.</p>
            </div>
            <div className={styles.aisolutioncontentgridcard}>
                <h2>80%</h2>
                <p>of enterprises are investing in AI and Machine Learning with the aim of increasing their productivity.</p>
            </div>
            <div className={styles.aisolutioncontentgridcard}>
                <h2>76%</h2>
                <p>of companies increased their ability to provide great customer experience with AI and ML based personalization.</p>
            </div>
            <div className={styles.aisolutioncontentgridcard}>
                <h2>70%</h2>
                <p>of businesses have already realized benefits to decision-making and enhancements to their business processes from leveraging AI and ML insights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
