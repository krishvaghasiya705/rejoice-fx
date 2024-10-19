import styles from "./forexcrmunmatch.module.scss"

import Image from 'next/image';
import Link from "next/link";

import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Dropdownicon from "assets/forecrmimages/svg/dropdownicon.svg"
import Unmatchimage from "assets/forecrmimages/image/unmatchimage.png"

export default function Forexcrmunmatch() {
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

                    <h1>Unmatched frontend</h1>
                </div>

                <div className={styles.forexcrmunmatchmaingrd}>
                    <div className={styles.forexcrmunmatchfaq}>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Powerful dashboard</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                            <p>Experience real-time analytics and streamlined management with our intuitive and powerful dashboard</p>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Deposit management</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Profile Page</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Trading platforms</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Balances</h3>
                                <Image src={Dropdownicon} alt="Dropdownicon" width={"32px"} height={"32px"} />
                            </div>
                        </div>
                        <div className={styles.faqdiv}>
                            <div className={styles.faqtitle}>
                                <h3>Helpdesk</h3>
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
                        <Image src={Unmatchimage} alt="Unmatchimage" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>
        </div>
    )
}