import styles from "./forexreliablesection.module.scss"
import Image from 'next/image';
import Link from "next/link";


import qualityimage from "assets/forecrmimages/image/logogroupimagesc.png"
import reliableicon from "assets/forecrmimages/svg/reliableicon.svg"
import reliableicon2 from "assets/forecrmimages/svg/reliableicon2.svg"


export default function Forexreliable() {
    return (
        <div className={styles.forexcrmworkmain}>
            <div className="container">
                <div className={styles.qualityboxmain}>
                    <div className={styles.qualitybox}>
                        <div className={styles.qualityboxtitle}>
                            <h1>02<span>Reliable</span></h1>
                            <p>Not just a word to us. Meticulous testing and well-thought architecture are highly prioritised</p>
                        </div>
                        <div className={styles.seamlessboxmain}>
                            <div className={styles.seamlessdiv}>
                                <div className={styles.seamlessicondiv}>
                                    <Image src={reliableicon} alt="reliableicon" width={"46px"} height={"46px"} />
                                </div>
                                <div>
                                    <p>Client-Focused Solutions Since 2014</p>
                                    <span>Client-oriented since 2014. We offer user-friendly solutions with helpful guides and educational sessions to easily work with our products</span>
                                </div>
                            </div>
                            <div className={styles.seamlessdiv}>
                                <div className={styles.seamlessicondiv}>
                                    <Image src={reliableicon2} alt="reliableicon2" width={"46px"} height={"46px"} />
                                </div>
                                <div>
                                    <p>Advanced Architecture</p>
                                    <span>Experience unparalleled stability with our product. By leveraging Docker, microservices, and advanced architecture, we deliver seamless integration and reliable performance</span>
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