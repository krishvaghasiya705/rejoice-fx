import styles from "./forexcrmsavings.module.scss"

import Image from 'next/image';
import Link from "next/link";

import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Savingsimage from "assets/forecrmimages/image/savingsimage.png"


export default function Forexcrmsavings() {
    return (
        <div className={styles.forexcrmsavingsmain}>
            <div className={styles.forexcrmsavings}>
                <div className="container">
                    <div className={styles.forexcrmsavingsflxmain}>
                        <div>
                            <div className={styles.savingstitle}>
                                <Link href={"/"}>
                                    <button>
                                        <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                        fund retention
                                    </button>
                                </Link>
                                <h1>Savings</h1>
                                <p>Create your saving program where your clients can invest funds to earn interest</p>
                            </div>
                            <div className={styles.savingscontentmain}>
                                <div className={styles.savingscontentone}>
                                    <div className={styles.savingscontentonetitle}>
                                        <p>Fixed savings</p>
                                    </div>
                                    <div className={styles.savingscontentonecontent}>
                                        <p>Fixed savings</p>
                                        <p>Person commits particular amount of funds and receives %</p>
                                        <p>Broker can configure various plans per customer</p>
                                        <p>Broker can apply fees such as participation or redeem</p>
                                    </div>
                                </div>
                                <div className={styles.savingscontentone}>
                                    <div className={styles.savingscontentonetitle}>
                                        <p>Flexible savings</p>
                                    </div>
                                    <div className={styles.savingscontentonecontentec}>
                                        <p>Unlimited top-ups of the program</p>
                                        <p>Broker can apply tiers to attract more funds</p>
                                        <p>Percentage can be adjusted by the broker depending on the demand</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.savingsimagediv}>
                            <Image src={Savingsimage} alt="Savingsimage" width={"100%"} height={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}