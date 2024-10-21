import Image from "next/image";
import styles from "./mauritiusstartsection.module.scss";
import CommonButton from "@components/buttons";
import Rightarrow from "assets/svg/rightarrow";

export default function Mauritiusstartsection({ imageSrc, text, contentitle, contentp }) {
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
                        <CommonButton text={text} justifyContent="start" />
                        <h2>{contentitle}</h2>
                        <p>{contentp}</p>
                        <div className={styles.yesbuttonmain}>
                        <button type="button">Yes, I Want To Incorporate<Rightarrow /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
