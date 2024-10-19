import Image from "next/image";
import styles from "./mauritiusstartsection.module.scss";
import CommonButton from "@components/buttons";
import Rightarrow from "assets/svg/rightarrow";

export default function Mauritiusstartsection({ imageSrc }) {
    return (
        <div className={styles.mauritiusstartsectionmain}>
            <div className="container">
                <div className={styles.mauritiusstartsectionflxmain}>
                    <div className={styles.mauritiusstartsectionimage}>
                        <Image
                            src={imageSrc}
                            alt="mauritius-image-not-found"
                            layout="responsive"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className={styles.mauritiusstartsectioncontentmain}>
                        <CommonButton text="Mauritius Company Formation" justifyContent="start" />
                        <h2>Start your forex broking business in Mauritius</h2>
                        <p>Mauritius offers amazing business experience with affordable capital requirements, fine banking services, payment service provider support, and easy application process for Mauritius forex license. The minimum paid-up capital requirement is MUR 700,000. Mauritius is the best destination for you, get a Mauritius Forex License! With PheasanTech, you get total support for Mauritius FSC and Mauritius forex company formation process. Contact us if you want to know more about company formation.</p>
                        <div className={styles.yesbuttonmain}>
                        <button type="button">Yes, I Want To Incorporate<Rightarrow /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
