import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import styles from "./algoadvantage.module.scss"
import Algoadvantageimage from "assets/algopageimages/image/advantagebackground.png"
import Image from 'next/image';
import Link from "next/link";

import Algocontenticon1 from "assets/algopageimages/svg/fasticon.svg"
import Algocontenticon2 from "assets/algopageimages/svg/automation.svg"
import Algocontenticon3 from "assets/algopageimages/svg/riskicon.svg"
import Algocontenticon4 from "assets/algopageimages/svg/humanerroricon.svg"
import Algocontenticon5 from "assets/algopageimages/svg/costicon.svg"
import Algocontenticon6 from "assets/algopageimages/svg/freealgoicon.svg"


export default function Algoadvantage() {
    return (
        <div className={styles.algoadvantagesectionmain}>
            <div className={styles.algoadvatagebackground}>
                <Image src={Algoadvantageimage} alt="Algoadvantageimage" width={"100%"} height={"100%"} />
            </div>
            <div className={styles.algoadvantagemain}>
                <div className={styles.algoadvantagecontainer}>
                    <div className={styles.algoadvantagemaincontent}>
                        <div className={styles.algoherobannerbuttontop}>
                            <Link href={"/"}>
                                <button>
                                    <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                    Algo Advantages
                                </button>
                            </Link>
                        </div>
                        <h3>Advantages of Algo Trading</h3>
                    </div>
                    <div className={styles.algocontentgrdmain}>
                        <div className={styles.algocontentgrdbox}>
                            <div className={styles.algocontenticon}>
                                <Image src={Algocontenticon1} alt="Algocontenticon1" width={50} height={50} />
                            </div>
                            <div className={styles.algocardcontent}>
                                <h4>Fast Execution of Orders</h4>
                                <p>Experience lightning-speed trading with high-frequency algorithms, executing thousands of trades per second for optimal performance.</p>
                            </div>
                        </div>
                        <div className={styles.algocontentgrdbox}>
                            <div className={styles.algocontenticon}>
                                <Image src={Algocontenticon2} alt="Algocontenticon2" width={50} height={50} />
                            </div>
                            <div className={styles.algocardcontent}>
                                <h4>Automation</h4>
                                <p>Enjoy seamless, automated trading with pre-programmed algorithms that handle everything from monitoring to execution, eliminating the need for human intervention.</p>
                            </div>
                        </div>
                        <div className={styles.algocontentgrdbox}>
                            <div className={styles.algocontenticon}>
                                <Image src={Algocontenticon3} alt="Algocontenticon3" width={50} height={50} />
                            </div>
                            <div className={styles.algocardcontent}>
                                <h4>Risk Management</h4>
                                <p>Algo trading integrates strategic risk management by automating entry/exit points, stop-loss, and fund rebalancing, reducing emotional trading decisions.</p>
                            </div>
                        </div>
                        <div className={styles.algocontentgrdbox}>
                            <div className={styles.algocontenticon}>
                                <Image src={Algocontenticon4} alt="Algocontenticon4" width={50} height={50} />
                            </div>
                            <div className={styles.algocardcontent}>
                                <h4>Human Error Reduction</h4>
                                <p>Avoid costly mistakes like wrong inputs or forgotten stop-losses, as algo trading ensures precise, flawless execution without human error.</p>
                            </div>
                        </div>
                        <div className={styles.algocontentgrdbox}>
                            <div className={styles.algocontenticon}>
                                <Image src={Algocontenticon5} alt="Algocontenticon5" width={50} height={50} />
                            </div>
                            <div className={styles.algocardcontent}>
                                <h4>Cost Reduction</h4>
                                <p>While setup costs can be high, algorithmic trading cuts long-term operational expenses and reduces transaction costs for efficient trading.</p>
                            </div>
                        </div>
                        <div className={styles.algocontentgrdbox}>
                            <div className={styles.algocontenticon}>
                                <Image src={Algocontenticon6} alt="Algocontenticon6" width={50} height={50} />
                            </div>
                            <div className={styles.algocardcontent}>
                                <h4>Free Algo Trading Software</h4>
                                <p>Stay agile with free algo trading software that allows you to modify algorithms in real-time, adapting to changing market conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
