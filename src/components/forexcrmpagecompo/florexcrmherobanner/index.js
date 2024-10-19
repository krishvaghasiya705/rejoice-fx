import styles from "./forexcrmherobanner.module.scss"
import Image from 'next/image';
import Link from "next/link";


import Forexcrmherobannerprimage from "assets/forecrmimages/image/herobanner.png"
import Algoherobannerbackground from "assets/algopageimages/image/algoherobanner.png"
import Crmicon from "assets/algopageimages/svg/crmicon.svg"


export default function Forexcrmherobanner() {
    return (
        <div className={styles.herobannermain}>
            <div className={styles.algoherobannerbackground}>
                <Image src={Algoherobannerbackground} alt="Algoherobannerbackground" width={"100%"} height={"100%"} />
            </div>
            <div className={styles.algoherobannerprimage}>
                <Image src={Forexcrmherobannerprimage} alt="Forexcrmherobannerprimage" width={"100%"} height={"100%"} />
            </div>
            <div className={styles.herobannercontentmain}>
                <div className={styles.algoherobannercontainer}>
                    <div className={styles.algoherobannerbuttontop}>
                        <Link href={"/"}>
                            <button>
                                <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                Forex CRM
                            </button>
                        </Link>
                    </div>
                    <div className={styles.algoherobannermaincontent}>
                        <h1>Transform Client Management with Forex CRM</h1>
                        <p>This highlights the core purpose of the CRM while making it clear that it's tailored for Forex brokers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}