import styles from "./algoecosystem.module.scss"
import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Image from 'next/image';
import Link from "next/link";
import Lineimage from "assets/algopageimages/image/lineimage.png"
import Contentlineimage from "assets/algopageimages/image/linecontent.png"
import Contentlinecircleimage from "assets/algopageimages/image/linecontentcircle.png"


export default function Algoecosystem() {
    return (
        <div className={styles.algoecosystemmain}>
            <div className={styles.algoecosystemcontainer}>
                <div className={styles.algoecosystemtopdiv}>
                    <div className={styles.algoherobannerbuttontop}>
                        <Link href={"/"}>
                            <button>
                                <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                Algo Process
                            </button>
                        </Link>
                    </div>
                    <h5>Our Algo Trading eco System</h5>
                </div>
                <div className={styles.algoecosystemmaincontent}>
                    <div className={styles.algoecosystemlineimagemain}>
                        <Image src={Lineimage} alt="Lineimage" width={"100%"} height={"100%"} />
                    </div>
                    <div className={styles.algoecosystemcontentdevide}>
                        <div className={styles.algoecosystemcontentdevidepartone}>
                            <p>Trader Connects with <br /> RoboTrader</p>
                            <div className={styles.algocontentlinedivmain}>
                                <div className={styles.algocontentline}>
                                    <Image src={Contentlineimage} alt="Contentlineimage" width={"100%"} height={"100%"} />
                                </div>
                                <div className={styles.algocontentlinediv}>
                                    <div className={styles.linecontentcircle}>
                                        <Image src={Contentlinecircleimage} alt="Contentlinecircleimage" height={"30px"} width={"30px"} />
                                    </div>
                                    <span>Connect</span>
                                </div>
                                <div className={styles.algocontentlinediv}>
                                    <div className={styles.linecontentcircle}>
                                        <Image src={Contentlinecircleimage} alt="Contentlinecircleimage" height={"30px"} width={"30px"} />
                                    </div>
                                    <span>Select Secret Strategy</span>
                                </div>
                                <div className={styles.algocontentlinediv}>
                                    <div className={styles.linecontentcircle}>
                                        <Image src={Contentlinecircleimage} alt="Contentlinecircleimage" height={"30px"} width={"30px"} />
                                    </div>
                                    <span>Back Test & Deploy</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.algoecosystemcontentdevidepartone}>
                            <p>End to End Automation – <br /> Sending orders to Exchange</p>
                            <div className={styles.algocontentlinedivmain}>
                                <div className={styles.algocontentline}>
                                    <Image src={Contentlineimage} alt="Contentlineimage" width={"100%"} height={"100%"} />
                                </div>
                                <div className={styles.algocontentlinediv}>
                                    <div className={styles.linecontentcircle}>
                                        <Image src={Contentlinecircleimage} alt="Contentlinecircleimage" height={"30px"} width={"30px"} />
                                    </div>
                                    <span>Sit & Relax</span>
                                </div>
                                <div className={styles.algocontentlinediv}>
                                    <div className={styles.linecontentcircle}>
                                        <Image src={Contentlinecircleimage} alt="Contentlinecircleimage" height={"30px"} width={"30px"} />
                                    </div>
                                    <span>Language Outlin</span>
                                </div>
                                <div className={styles.algocontentlinediv}>
                                    <div className={styles.linecontentcircle}>
                                        <Image src={Contentlinecircleimage} alt="Contentlinecircleimage" height={"30px"} width={"30px"} />
                                    </div>
                                    <span>Translate Language</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
