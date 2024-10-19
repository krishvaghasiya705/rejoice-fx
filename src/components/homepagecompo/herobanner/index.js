import styles from "./homeherobanner.module.scss";
import Image from "next/image";
import Link from "next/link";

import Rejoicefxherobannerprimage from "assets/homeimages/herobanner.png";
// import Homeherobannerbackground from "assets/algopageimages/image/algoherobanner.png";
import Crmicon from "assets/algopageimages/svg/crmicon.svg";
import Rightarrow from "assets/svg/rightarrow";
import CommonButton from "@components/buttons";

export default function Homeherobanner() {
    return (
        <div className={styles.homeherobannermain}>
            <div className={styles.homeherobannerbackground}>
                {/* <Image
                    src={Homeherobannerbackground}
                    alt="Homeherobannerbackground"
                    width={"100%"}
                    height={"100%"}
                /> */}
                <div className={styles.herobannercontentmain}>
                    <div className={styles.homeherobannercontainer}>
                        <CommonButton text={"Forex Trading Simplified"} />
                        <div className={styles.homeherobannermaincontent}>
                            <h1>Optimize Operations with Our CRM</h1>
                            <p>
                                Streamline your client management and enhance efficiency with our
                                tailored CRM solutions. Designed specifically for Forex brokers to
                                help you stay organized and boost performance.
                            </p>
                            <div className={styles.herobannerbuttonsmain}>
                                <button type="button">Get Started <Rightarrow /></button>
                                <button type="button">Try For Free <Rightarrow /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.homeherobannerprimage}>
                <Image
                    src={Rejoicefxherobannerprimage}
                    alt="Rejoicefxherobannerprimage"
                    width={"100%"}
                    height={"100%"}
                />
            </div>
        </div>
    );
}
