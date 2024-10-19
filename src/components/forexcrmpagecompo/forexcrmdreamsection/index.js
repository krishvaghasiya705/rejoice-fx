import styles from "./forexcrmdream.module.scss"

import Image from 'next/image';
import Link from "next/link";

import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Dropdownicon from "assets/forecrmimages/svg/dropdownicon.svg"
import Unmatchimage2 from "assets/forecrmimages/image/unmatchimage2.png"

export default function Forexcrmdream() {
    return (
        <div className={styles.forexcrmunmatch}>
            <div className="container">
                <div className={styles.forexcrmunmatchtitle}>
                    <Link href={"/"}>
                        <button>
                            <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                            Projects
                        </button>
                    </Link>

                    <h1>Back office of dreams</h1>
                </div>

                <div className={styles.forexcrmunmatchmaingrd}>
                    <div className={styles.forexcrmunmatchfaq}>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Clients</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                            <p>Access a comprehensive table displaying key information about all clients for efficient management.</p>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Accounts</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Transactions</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Permissions</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Reports</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Requests</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Bonuses</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.unmatchimagediv}>
                        <Image src={Unmatchimage2} alt="Unmatchimage2" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>
        </div>
    )
}