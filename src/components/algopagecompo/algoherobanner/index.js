import styles from "./algodevelopmentherobanner.module.scss"
import Image from 'next/image';
import Link from "next/link";


import Algoherobannerprimage from "assets/algopageimages/image/algoherobannerprimage.png"
// import Algoherobannerbackground from "assets/algopageimages/image/algoherobanner.png"
import Crmicon from "assets/algopageimages/svg/crmicon.svg"


export default function Algodevelopmentherobanner() {
    return (
        <div className={styles.herobannermain}>
            <div className={styles.algoherobannerbackground}>
                {/* <Image src={Algoherobannerbackground} alt="Algoherobannerbackground" width={"100%"} height={"100%"} /> */}
                <div className={styles.herobannercontentmain}>
                <div className={styles.algoherobannercontainer}>
                    <div className={styles.algoherobannerbuttontop}>
                        <Link href={"/"}>
                            <button>
                                <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                Algo Bot
                            </button>
                        </Link>
                    </div>
                    <div className={styles.algoherobannermaincontent}>
                        <h1>Fast, Smart, and Tailored Algo Trading</h1>
                        <p>Rejoice FX’s Algo Trading empowers you to automate strategies with precision, transforming your trading into a seamless experience.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.algoherobannerprimage}>
                <Image src={Algoherobannerprimage} alt="Algoherobannerprimage" width={"100%"} height={"100%"} />
            </div>
        </div>
    )
}