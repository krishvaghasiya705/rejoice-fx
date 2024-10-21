import React, { useState } from 'react';
import styles from "./forexcrmdream.module.scss"

import Image from 'next/image';
import Link from "next/link";

import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Dropdownicon from "assets/forecrmimages/svg/dropdownicon.svg"
import Unmatchimage2 from "assets/forecrmimages/image/unmatchimage2.png"

const faqData = [
    { title: "Clients", content: "Access a comprehensive table displaying key information about all clients for efficient management." },
    { title: "Accounts", content: "Manage and view all account details in one centralized location." },
    { title: "Transactions", content: "Track and monitor all financial transactions with ease." },
    { title: "Permissions", content: "Set and manage user access levels and permissions." },
    { title: "Reports", content: "Generate and analyze various reports for informed decision-making." },
    { title: "Requests", content: "Handle and process client requests efficiently." },
    { title: "Bonuses", content: "Manage and track bonus programs for clients." },
];

export default function Forexcrmunmatch() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

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
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.faqdiv} ${openIndex === index ? styles.active : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className={styles.faqtitle}>
                                    <h3>{faq.title}</h3>
                                    <Image
                                        src={Dropdownicon}
                                        alt="Dropdownicon"
                                        width={"32px"}
                                        height={"32px"}
                                    />
                                </div>
                                <div className={styles.faqContent}>
                                    <p>{faq.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.unmatchimagediv}>
                        <Image src={Unmatchimage2} alt="Unmatchimage2" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
