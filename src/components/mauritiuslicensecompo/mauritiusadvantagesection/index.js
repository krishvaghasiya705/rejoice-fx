import Image from "next/image";
import styles from "./mauritiusadvantagesection.module.scss";

import mauritiusadvantage from "assets/mauritiusimages/image/mauritiusadvantage.png";
import CommonButton from "@components/buttons";
import Customlisticon from "assets/mauritiusimages/svg/customlisticon";

export default function Mauritiusadvantagesection() {
    return (
        <div className={styles.mauritiusadvantagesectionmain}>
            <div className="container">
                <div className={styles.mauritiusadvantagesectionflxmain}>
                    <div className={styles.mauritiusadvantagesectionimage}>
                        <Image src={mauritiusadvantage} alt="mauritiusadvantage" />
                    </div>
                    <div className={styles.mauritiusadvantagesectioncontent}>
                        <CommonButton text="EXPLICIT" justifyContent="start" />
                        <h1>Advantages</h1>
                        <div className={styles.mauritiusadvantagesectioncontentlistmain}>
                            <div className={styles.mauritiusadvantagesectioncontentlist}>
                                <Customlisticon />
                                <p>All the companies are exempt from local tax for the first 25 years from the date of registration</p>
                            </div>
                            <div className={styles.mauritiusadvantagesectioncontentlist}>
                                <Customlisticon />
                                <p>No annual return has to be filed with the SVG authorities</p>
                            </div>
                            <div className={styles.mauritiusadvantagesectioncontentlist}>
                                <Customlisticon />
                                <p>No corporate or withholding taxes</p>
                            </div>
                            <div className={styles.mauritiusadvantagesectioncontentlist}>
                                <Customlisticon />
                                <p>The name of the directors, shareholders and officers are not disclosed on any public register</p>
                            </div>
                            <div className={styles.mauritiusadvantagesectioncontentlist}>
                                <Customlisticon />
                                <p>Low government and annual fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
