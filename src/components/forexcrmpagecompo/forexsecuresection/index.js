import styles from "./forexcrmsecure.module.scss"
import Image from 'next/image';


import qualityimage from "assets/forecrmimages/image/logogroupimageth.png"
import secureicon from "assets/forecrmimages/svg/secureicon.svg"
import secureicon2 from "assets/forecrmimages/svg/secureicon2.svg"


export default function Forexsecure() {
    return (
        <div className={styles.forexcrmworkmain}>
            <div className="container">
                <div className={styles.qualityboxmain}>
                    <div className={styles.qualitybox}>
                        <div className={styles.qualityboxtitle}>
                            <h1>03<span>Secure</span></h1>
                            <p>We value our reputation & long-term relations. Your funds are safe with us</p>
                        </div>
                        <div className={styles.seamlessboxmain}>
                            <div className={styles.seamlessdiv}>
                                <div className={styles.seamlessicondiv}>
                                    <Image src={secureicon} alt="secureicon" width={"46px"} height={"46px"} />
                                </div>
                                <div>
                                    <p>Automated Monitoring</p>
                                    <span>Each client's setup has a dedicated server with fully automated monitoring system to track the uptime of your production environment</span>
                                </div>
                            </div>
                            <div className={styles.seamlessdiv}>
                                <div className={styles.seamlessicondiv}>
                                    <Image src={secureicon2} alt="secureicon2" width={"46px"} height={"46px"} />
                                </div>
                                <div>
                                    <p>2FA and User Management</p>
                                    <span>Our support department monitors any potential errors and resolves them quickly and effectively</span>
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