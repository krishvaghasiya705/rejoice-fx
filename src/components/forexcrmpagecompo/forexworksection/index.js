import styles from "./forexwork.module.scss"
import Image from 'next/image';
import Link from "next/link";


import qualityimage from "assets/forecrmimages/image/logogroupimage.png"
import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Seamlessicon from "assets/forecrmimages/svg/seamlessicon.svg"
import Seamlessicon2 from "assets/forecrmimages/svg/seamlessicon2.svg"


export default function Forexcrmwork() {
    return (
        <div className={styles.forexcrmworkmain}>
            <div className="container">
                <div className={styles.algoherobannerbuttontop}>
                    <Link href={"/"}>
                        <button>
                            <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                            Forex CRM
                        </button>
                    </Link>
                    <h1>Works like a clock</h1>
                </div>
                <div className={styles.qualityboxmain}>
                    <div className={styles.qualitybox}>
                        <div className={styles.qualityboxtitle}>
                            <h1>01<span>Quality-oriented</span></h1>
                            <p>Our robust technology stack helps produce the highest-quality solution on the market</p>
                        </div>
                        <div className={styles.seamlessboxmain}>
                            <div className={styles.seamlessdiv}>
                                <div className={styles.seamlessicondiv}>
                                    <Image src={Seamlessicon} alt="Seamlessicon" width={"46px"} height={"46px"} />
                                </div>
                                <div>
                                    <p>Seamless Data Integration with Web API</p>
                                    <span>Powerful Web API allows getting direct data retrieval from trading platforms through our system for various reporting purposes</span>
                                </div>
                            </div>
                            <div className={styles.seamlessdiv}>
                                <div className={styles.seamlessicondiv}>
                                    <Image src={Seamlessicon2} alt="Seamlessicon2" width={"46px"} height={"46px"} />
                                </div>
                                <div>
                                    <p>Interface Design with React and Angular</p>
                                    <span>Cutting-edge design frameworks like React and Angular get you the most of your interface</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.qualityboximage}>
                        <Image src={qualityimage} alt="qualityimage" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>
        </div>
    )
}