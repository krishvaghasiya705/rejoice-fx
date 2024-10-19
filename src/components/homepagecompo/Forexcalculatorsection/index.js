import { useState } from 'react';
import CommonButton from "@components/buttons";
import styles from "./forexcalculatorsection.module.scss";
import First from 'assets/Paymentcardsvg/First';
import Second from 'assets/Paymentcardsvg/Second';
import Third from 'assets/Paymentcardsvg/Third';
import Fourth from 'assets/Paymentcardsvg/Fourth';
import Nexticons from 'assets/Paymentcardsvg/nexticons';
import Proceedicon from 'assets/Paymentcardsvg/Proceedicon';

export default function Forexcalculatorsection() {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);

    const steps = [
        "Compliance",
        "Logo",
        "Website",
        "Trading Platform",
        "CRM & Trader's Room",
        "Cabinet Mobile App",
        "CRM Mobile App",
        "Risk Management System",
        "Liquidity",
        "Copy Trading",
        "PAMM"
    ];

    const handleClick = (index) => {
        setActiveStep(index);
        setSelectedCard(null);
        setTotalAmount(0);
    };

    const handleCardSelection = (index, cost) => {
        setSelectedCard(index);
        setTotalAmount(parseFloat(cost.replace(/[^0-9.-]+/g, "")));
    };

    const renderCards = (slot) => {
        let cards;  
        switch (slot) {
            case 0:
                cards = [
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "03-04 Month", cost: "$ 8,000.00" },
                    { Icon: Second, title: "Lorem Ipsum is simply", duration: "02-03 Month", cost: "$22,050.00" },
                    { Icon: Third, title: "Lorem Ipsum is simply", duration: "01 Month", cost: "$ 19,800.00" },
                    { Icon: Fourth, title: "Lorem Ipsum is simply", duration: "04-07 Month", cost: "$ 19,600.00" },
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "03 Week", cost: "$ 25,000.00" }
                ];
                break;
            case 1:
                cards = [
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "05 Days", cost: "$500.00" },
                    { Icon: Second, title: "Lorem Ipsum is simply", duration: "10 Days", cost: "$ 1,000.00" },
                ];
                break;
            case 2:
                cards = [
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 2,000.00", pages: "Upto 30" },
                    { Icon: Second, title: "Lorem Ipsum is simply", duration: "30-45 Days", cost: "$ 4,800.00", pages: "Upto 30" },
                ];
                break;
            case 3:
                cards = [
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "15 Days", cost: "$ 6,000.00" },
                    { Icon: Second, title: "Lorem Ipsum is simply", duration: "15 Days", cost: "$ 5,000.00" },
                    { Icon: Third, title: "Lorem Ipsum is simply", duration: "15 Days", cost: "$ 3,500.00" },
                    { Icon: Fourth, title: "Lorem Ipsum is simply", duration: "15 Days", cost: "$ 2,500.00" },
                ];
                break;
            case 4:
                cards = [
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,000.00", monthly: "$ 500.00" },
                    { Icon: Third, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 2,000.00", monthly: "$ 1,00.00" },
                    { Icon: Fourth, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 2,000.00", monthly: "$ 1,500.00" },
                ];
                break;
            case 5:
                cards = [
                    { Icon: Second, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,000.00", monthly: "$ 250.00" },
                    { Icon: Fourth, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,000.00", monthly: "$ 1350.00" },
                    { Icon: Third, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,500.00", monthly: "$ 500.00" },
                ];
                break;
            case 6:
                cards = [
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,000.00", monthly: "$ 250.00" },
                    { Icon: Fourth, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,000.00", monthly: "$ 350.00" },
                    { Icon: Second, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,500.00", monthly: "$ 500.00" },
                ];
                break;
            case 7:
                cards = [
                    { Icon: Third, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,000.00", monthly: "$ 500.00" },
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "$ 1,500.00", monthly: "$ 500.00" },
                ];
                break;
            case 8:
                cards = [
                    { Icon: Third, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "Minimum deposit $ 20k", monthly: "$ 2,000.00" },
                    { Icon: First, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "-", monthly: "$ 500.00-$ 700.00" },
                ];
                break;
            case 9:
                cards = [
                    { Icon: Second, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "-", monthly: "$ 880.00" },
                ];
                break;
            case 10:
                cards = [
                    { Icon: Third, title: "Lorem Ipsum is simply", duration: "20-30 Days", cost: "-", monthly: "$ 1,099.00" },
                ];
                break;
            default:
                cards = [];
        }

        return cards.map((card, index) => (
            <div
                key={index}
                className={styles.forexcalculatorpaymentcardsdivone}
                onClick={() => handleCardSelection(index, card.cost)}
            >
                <div className={styles.forexcalculatorpaymentcardsdivonefirst}>
                    <card.Icon />
                    <div className={styles.radiobutton}>
                        <div
                            className={styles.radiobuttoncircle}
                            style={{ backgroundColor: selectedCard === index ? '#014EFF' : 'transparent' }}
                        ></div>
                    </div>
                </div>
                <div className={styles.forexcalculatorpaymentcardsdivonetwoname}>
                    <p>{card.title}</p>
                    <span>{card.duration}</span>
                </div>
                <div className={styles.forexcalculatorpaymentcardspricediv}>
                    <span>Total Cost</span>
                    <p style={{maxWidth: "158px"}}>{card.cost}</p>
                </div>
                {card.monthly && (
                    <div className={styles.forexcalculatorpaymentcardspricediv}>
                        <span>Monthly</span>
                        <p>{card.monthly}</p>
                    </div>
                )}
                {card.pages && (
                    <div className={styles.forexcalculatorpaymentcardspricediv}>
                        <span>Total Pages</span>
                        <p>{card.pages}</p>
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div className={styles.forexcalculatorsectionmain}>
            <div className={styles.forexcalculatorsectioncontainer}>
                <div className={styles.forexcalculatorsectiontitlediv}>
                    <CommonButton text="Calculator" justifyContent="center" />
                    <h6>Forex Calculator</h6>
                </div>
                <div className={styles.forexcalculatorstepsmdivmain}>
                    <div className={`${styles.forexcalculatorstepsmdivmainsidelinesone} ${activeStep >= 0 ? styles.activeSideline : ''}`}></div>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${styles.forexcalculatorboxes} ${activeStep >= index ? styles.active : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            <div className={`${styles.forexcalculatorboxcircle} ${activeStep >= index ? styles.activeCircle : ''}`}></div>
                            <span>{step}</span>
                        </div>
                    ))}
                    <div className={`${styles.forexcalculatorstepsmdivmainsidelinestwo} ${activeStep === 10 ? styles.activeSideline : ''}`}></div>
                </div>
                <div className={styles.forexcalculatormaintitle}>
                    <h1 title="slot title">{steps[activeStep]}</h1>
                </div>
                <div className={styles.forexcalculatorpaymentcardsmain}>
                    {renderCards(activeStep)}
                </div>
                <div className={styles.forexcalculatorpaymentsteps}>
                    <div
                        className={`${styles.forexcalculatorpaymentstepspreviusbutton} ${activeStep === 0 ? styles.forexcalculatorpaymentstepspreviusbuttondisabled : styles.forexcalculatorpaymentstepspreviusbuttonenabled}`}
                        title="back sloting"
                        onClick={() => activeStep > 0 && handleClick(activeStep - 1)}
                    >
                        <Nexticons />
                    </div>
                    <div
                        className={`${styles.forexcalculatorpaymentstepsnextbutton} ${activeStep === 10 ? styles.forexcalculatorpaymentstepsnextbuttondisabled : styles.forexcalculatorpaymentstepsnextbuttonenabled}`}
                        title="next sliding"
                        onClick={() => activeStep < 10 && handleClick(activeStep + 1)}
                    >
                        <Nexticons />
                    </div>
                </div>
                <div className={styles.forexcalculatorpaymentstotalamount}>
                    <div className={styles.forexcalculatorpaymentstotalamounttitle}>
                        <p>Total Amount</p>
                    </div>
                    <div className={styles.forexcalculatorpaymentstotalamountprice}>
                        <span title="slot total amount">$ {totalAmount.toFixed(2)}</span>
                        <button type='submit' aria-label="proceed"><p>Proceed</p><Proceedicon /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}