import styles from "./mauritiusherobanner.module.scss"
import Image from "next/image";

import CommonButton from "@components/buttons";

export default function Mauritiusherobanner({ text, title }) {
    return (
        <div className={styles.mauritiusherobannermain}>
            <div className={styles.mauritiusherobannerbackground}>
                <div className={styles.herobannercontentmain}>
                    <div className={styles.mauritiusherobannercontainer}>
                        <CommonButton text={text} />
                        <div className={styles.mauritiusherobannermaincontent}>
                            <h1>{title}</h1>
                            <p>Start your forex business in Mauritius with simple regulatory regime</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
