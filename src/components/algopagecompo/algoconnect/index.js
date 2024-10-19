import styles from "./algoconnect.module.scss"
import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Image from 'next/image';
import Link from "next/link";
import Besttradeicon from "assets/algopageimages/svg/besttradicon.svg"
import Backtestinicon from "assets/algopageimages/svg/backtestinsicon.svg"
import Eliminationiconicon from "assets/algopageimages/svg/eliminationicon.svg"
import Plugicon from "assets/algopageimages/svg/plugicon.svg"


export default function Algoconnect() {
    return (
        <div className={styles.algoconnectsectionmain}>
            <div className={styles.algoconnectsectioncontainer}>
                <div className={styles.algoconnectsectiontopdiv}>
                    <div className={styles.algoherobannerbuttontop}>
                        <Link href={"/"}>
                            <button>
                                <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                Powerful Algorithms
                            </button>
                        </Link>
                    </div>
                    <h5>Simply Connect Your Trading with Powerful Algorithms</h5>
                </div>
                <div className={styles.algoconnectmaincontent}>
                    <div className={styles.algoconnectmaincontentbox}>
                        <div className={styles.algoconnectmaincontentboxcircle}>
                            <Image src={Besttradeicon} alt="Besttradeicon" width={"50px"} height={"50px"} />
                        </div>
                        <div>
                            <h6>Best trading strategies</h6>
                            <p>When it comes to trading strategies, there are thousands of trade systems are available on the internet and they all work on specific market conditions.</p>
                        </div>
                    </div>
                    <div className={styles.algoconnectmaincontentbox}>
                        <div className={styles.algoconnectmaincontentboxcircle}>
                            <Image src={Backtestinicon} alt="Backtestinicon" width={"50px"} height={"50px"} />
                        </div>
                        <div>
                            <h6>Backtesting</h6>
                            <p>Algorithmic trading is a form of automated investing that lets you test out strategies before putting real money on the line. This gives traders invaluable insight into whether or not their strategy will work.</p>
                        </div>
                    </div>
                    <div className={styles.algoconnectmaincontentbox}>
                        <div className={styles.algoconnectmaincontentboxcircle}>
                            <Image src={Eliminationiconicon} alt="Eliminationiconicon" width={"50px"} height={"50px"} />
                        </div>
                        <div>
                            <h6>Elimination of Emotions</h6>
                            <p>To minimize the emotional strain on traders, automated trading systems keep their emotions in check and allow them to follow a strategy more easily.</p>
                        </div>
                    </div>
                    <div className={styles.algoconnectmaincontentbox}>
                        <div className={styles.algoconnectmaincontentboxcircle}>
                            <Image src={Plugicon} alt="Plugicon" width={"50px"} height={"50px"} />
                        </div>
                        <div>
                            <h6>Plug and Play</h6>
                            <p>Automated trading is programmed to conduct trades on your behalf according to predetermined conditions by EA’s and automatically updated in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
