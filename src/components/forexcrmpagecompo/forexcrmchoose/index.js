import styles from "./forexcrmchoosesection.module.scss"

import Image from 'next/image';
import Link from "next/link";



import Crmicon from "assets/algopageimages/svg/crmicon.svg"
import Squareicon from "assets/forecrmimages/svg/squareicon2.svg"



export default function Forexcrmchoose() {
    return (
        <div className={styles.forexcrmchoosemain}>
            <div className="container">
                <div className={styles.forexcrmchoosetitle}>
                    <Link href={"/"}>
                        <button>
                            <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                            Forex CRM
                        </button>
                    </Link>
                    <h1>Why choose PheasanTech Forex CRM?</h1>
                </div>
                <div className={styles.Forexcrmchoosegrd}>
                    <div className={styles.Forexcrmchoosegrddiv}>
                        <h3>01 <span>Amazing Features</span></h3>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Allows your sales teams to execute the tasks digitally</p>
                        </div>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Integrates widgets and tools as per the requirements</p>
                        </div>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Prepares the foundation for automation with RPA & AI</p>
                        </div>
                    </div>
                    <div className={styles.Forexcrmchoosegrddiv}>
                        <h3>02 <span>Total Customization</span></h3>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Customized CRM as per the scale and target audience</p>
                        </div>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Easy upgrades/ updates to finetune the functionalities</p>
                        </div>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Constant insights & reports to monitor the performance</p>
                        </div>
                    </div>
                    <div className={styles.Forexcrmchoosegrddiv}>
                        <h3>03 <span>Ease of Using</span></h3>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Simple and straight forward user interface for the team</p>
                        </div>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Designed to save the time and efforts of the sales teams</p>
                        </div>
                        <div className={styles.cardcontent}>
                            <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                            <p>Easy to learn processes; and easier to use on daily basis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}