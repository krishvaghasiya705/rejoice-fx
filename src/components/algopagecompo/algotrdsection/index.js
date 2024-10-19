import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import styles from "./algotradsection.module.scss"
import Algotradimage from "assets/algopageimages/image/algotradimage.png"
import Image from 'next/image';
import Link from "next/link";

export default function Algotradsection() {
    return (
        <div className={styles.algotradsectionmain}>
            <div className={styles.algotradsectioncontainer}>
                <div className={styles.algotradsectionflxmain}>
                    <div className={styles.algotradimagemain}>
                        <Image src={Algotradimage} alt="Algotradimage" width={"100%"} height={"100%"} />
                    </div>
                    <div>
                        <div className={styles.algoherobannerbuttontop}>
                            <Link href={"/"}>
                                <button>
                                    <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                    What Is Algo?
                                </button>
                            </Link>
                        </div>
                        <h2>Algo Trading</h2>
                        <p>Algo trading harnesses advanced algorithms to execute trading strategies with unparalleled precision, catering to traders seeking to customise their approach for a tailored trading experience. This innovative trading form allows individuals to leverage broker-provided API keys, granting access to automated operations that transform complex strategies into seamless actions. Algo trading, gaining momentum for its ability to simplify trading through technology, enables even those without programming skills to participate effectively. Traders can back-test strategies confidently, ensuring their moves are both smart and strategic. As Algo trading becomes increasingly popular, it represents the future of trading, offering a platform where strategies are not just executed but optimised, marking a significant shift in how trading success is achieved and redefining opportunities in the financial markets.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
