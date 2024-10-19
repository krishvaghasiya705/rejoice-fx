import React, { useState } from 'react';
import CommonButton from "@components/buttons"
import styles from "./forexcrmfaqsection.module.scss"
import Faqdropicon from "assets/forecrmimages/svg/faqdropicon"

export default function Forexfaqsection() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What is a Forex CRM?",
            answer: "A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data and payment processing."
        },
        {
            id: 2,
            question: "What if I want to import the users from my previous solution?",
            answer: "A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data and payment processing."
        },
        {
            id: 3,
            question: "After the purchase how can I familiarise myself with the product functionalities?",
            answer: "A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data and payment processing."
        },
        {
            id: 4,
            question: "What if I need something extra development for my B2CORE solution?",
            answer: "A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data and payment processing."
        },
        {
            id: 5,
            question: "How do I report any issues regarding the product?",
            answer: "A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data and payment processing."
        }
    ];

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className={styles.forexfaqsectionmain}>
            <div className={styles.forexfaqcontainer}>
                <div className={styles.forexfaqtitle}>
                    <CommonButton text="FAQ" justifyContent="center" />
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className={styles.forexfaqaccordionmain}>
                    {faqData.map((faq, index) => (
                        <div key={faq.id} className={styles.forexfaqbox} style={{ borderTop: index === 0 ? "none" : "1px solid #BFBFBF", paddingTop: index === 0 ? "0" : "30px" }}>
                            <div className={styles.forexfaqboxtoplinemain} onClick={() => toggleFaq(faq.id)}>
                                <h2><span>{String(faq.id).padStart(2, '0')}.</span>{faq.question}</h2>
                                <div className={`${styles.forexfaqdropiconmain} ${openFaq === faq.id ? styles.open : ''}`}>
                                    <Faqdropicon />
                                </div>
                            </div>
                            <div className={`${styles.forexfaqboxdetailmain} ${openFaq === faq.id ? styles.open : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
