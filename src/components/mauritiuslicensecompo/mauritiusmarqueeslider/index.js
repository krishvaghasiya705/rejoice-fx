import styles from "./mauritiusmarqueeslider.module.scss";

import Logoipsumicon from "assets/mauritiusimages/marqueesvg/logoipsumicon";
import Logoipsumicon2 from "assets/mauritiusimages/marqueesvg/logoipsumicon2";
import Logoipsumicon3 from "assets/mauritiusimages/marqueesvg/logoipsumicon3";
import Logoipsumicon4 from "assets/mauritiusimages/marqueesvg/logoipsumicon4";
import Logoipsumicon5 from "assets/mauritiusimages/marqueesvg/logoipsumicon5";
import Logoipsumicon6 from "assets/mauritiusimages/marqueesvg/logoipsumicon6";

export default function Mauritiusmarqueeslider() {
    const logos = [
        Logoipsumicon,
        Logoipsumicon2,
        Logoipsumicon3,
        Logoipsumicon4,
        Logoipsumicon5,
        Logoipsumicon6,
    ];

    return (
        <div className={styles.mauritiusmarqueeslidermain}>
            <div className="container">
                <div className={styles.mauritiusmarqueeslidertitle}>
                    <h1>Trusted Partners</h1>
                </div>
            </div>
            <div className={styles.marqueeWrapper}>
                <div className={styles.marquee}>
                    {Array(50).fill(
                        <>
                            {[...logos, ...logos].map((Logo, index) => (
                                <Logo key={index} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
