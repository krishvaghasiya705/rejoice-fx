import React, { useState } from 'react';
import styles from "./forexcrmunmatch.module.scss"

import Image from 'next/image';
import Link from "next/link";

import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Dropdownicon from "assets/forecrmimages/svg/dropdownicon.svg"
import Unmatchimage from "assets/forecrmimages/image/unmatchimage.png"

const faqData = [
  {
    title: "Powerful dashboard",
    content: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard"
  },
  { title: "Deposit management", content: "Efficiently manage and track all deposits with our advanced deposit management system." },
  { title: "Profile Page", content: "Customize and manage user profiles with ease using our intuitive profile page." },
  { title: "Trading platforms", content: "Access multiple trading platforms seamlessly integrated into our CRM solution." },
  { title: "Balances", content: "Keep track of all account balances in real-time with our comprehensive balance management system." },
  { title: "Helpdesk", content: "Provide excellent customer support with our integrated helpdesk solution." },
  { title: "Bonuses", content: "Manage and distribute bonuses effectively with our flexible bonus system." },
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

                    <h1>Unmatched frontend</h1>
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
                        <Image src={Unmatchimage} alt="Unmatchimage" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
