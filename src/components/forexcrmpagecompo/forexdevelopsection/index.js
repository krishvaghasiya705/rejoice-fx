import Image from "next/image"
import styles from "./forexcrmdevelopment.module.scss"

import Checksimage from "assets/forecrmimages/image/checksimage.png"
import Link from "next/link"
import Squareicon from "assets/forecrmimages/svg/squareicon.svg"
import Crmicon from "assets/forecrmimages/svg/crmicon.svg"
import Bagicon from "assets/forecrmimages/svg/bagicon.svg"
import Pcicon from "assets/forecrmimages/svg/pcicon.svg"
import Gearicon from "assets/forecrmimages/svg/gearicon.svg"

export default function Forexcrmdevelopment() {
    return (
        <div className={styles.forexcrmdevelopmentmain}>
            <div className={styles.Forexcrmdevelopmentdiv}>
                <div className={styles.Checksimage}>
                    <Image src={Checksimage} alt='Checksimage' width={"100%"} height={"100%"} />
                </div>
                <div className="container">
                    <div className={styles.forexcrmdevelopmentbutton}>
                        <Link href={"/"}>
                            <button>
                                <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                Forex CRM
                            </button>
                        </Link>
                        <h1>Developing an in-house CRM system typically takes at least 25 people and 2 years</h1>
                    </div>
                    <div className={styles.forexcrmdeveloipmentflxmian}>
                        <div className={styles.forexcrmdevelopmentcards}>
                            <div className={styles.bussinessicon}>
                                <div className={styles.bussinessicondiv}>
                                    <Image src={Bagicon} alt="Bagicon" width={40} height={40} />
                                </div>
                                <p>Business</p>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Project manager</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Product manager</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Business & Data analyst</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Solution architector</span>
                            </div>
                        </div>
                        <div className={styles.forexcrmdevelopmentcards}>
                            <div className={styles.bussinessicon}>
                                <div className={styles.bussinessicondiv}>
                                    <Image src={Pcicon} alt="Pcicon" width={40} height={40} />
                                </div>
                                <p>Developers</p>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>QA testers</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Android Developers</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>iOS Developers</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>System administrator/DevOps engineer</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Sdet</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Front-end developer</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Back-end developers</span>
                            </div>
                        </div>
                        <div className={styles.forexcrmdevelopmentcards}>
                            <div className={styles.bussinessicon}>
                                <div className={styles.bussinessicondiv}>
                                    <Image src={Bagicon} alt="Bagicon" width={40} height={40} />
                                </div>
                                <p>Business</p>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Gearicon} alt='Gearicon' width={"24px"} height={"24px"} />
                                <span>Other teams</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Support & training staff</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Security specialist</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Tech writer</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>Database administrator</span>
                            </div>
                            <div className={styles.bussinesscontent}>
                                <Image src={Squareicon} alt='Squareicon' width={"24px"} height={"24px"} />
                                <span>UI/UX designers</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.forexcrmcostsdiv}>
                        <div className={styles.forexcrmcostbutton}>
                            <Link href={"/"}>
                                <button>
                                    <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                    Forex CRM
                                </button>
                            </Link>
                            <h2>Costs start at $200k per month, excluding taxes, infrastructure, equipment, and licenses. Total for 2 years: $5 million</h2>
                        </div>
                        <div className={styles.forexcrmcostgrdmain}>
                            <div className={styles.foremcrmcostgrcdiv}>
                                <p>Developers</p>
                                <span>Average salary for a software developer is around $100,000 per year</span>
                            </div>
                            <div className={styles.foremcrmcostgrcdiv}>
                                <p>Servers and hosting</p>
                                <span>Cloud hosting can cost between $10,000 to $50,000 annually, depending on usage requirements</span>
                            </div>
                            <div className={styles.foremcrmcostgrcdiv}>
                                <p>Development time</p>
                                <span>Building a CRM system from scratch can take 12-24 months</span>
                            </div>
                            <div className={styles.foremcrmcostgrcdiv}>
                                <p>Bugs and fixes</p>
                                <span>Unanticipated bugs and fixes can add 20-30% to the total development cost</span>
                            </div>
                        </div>
                        <div className={styles.forexcrmteamdivmain}>
                            <h3>Our team works tirelessly to improve Rejoice FX</h3>
                            <div className={styles.forexcrmteamlastgrd}>
                                <div>
                                    <p>70+</p>
                                    <span>Engineers working full-time</span>
                                </div>
                                <div>
                                    <p>30+</p>
                                    <span>Continuous Development</span>
                                </div>
                                <div>
                                    <p>160+</p>
                                    <span>Clients using Rejoice FX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}