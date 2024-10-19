import Image from "next/image"
import CommonButton from "@components/buttons"
import styles from "./homeservicesection.module.scss"
import homeservicessection from "assets/homeimages/sci-fi.png"
import Cardvector1 from "assets/homeimages/cardvector1.png"
import Cardvector2 from "assets/homeimages/cardvector2.png"
import Cardvector3 from "assets/homeimages/cardvector3.png"

export default function Homeservicessection() {
    const services = [
        { id: "01", title: "CRM", description: "Manage clients and streamline operations with a CRM designed specifically for Forex businesses.", image: Cardvector1 },
        { id: "02", title: "Licenses", description: "Obtain your Forex broker license seamlessly in jurisdictions like Mauritius and St. Lucia with our expert guidance.", image: Cardvector2 },
        { id: "03", title: "Algo Bot", description: "Automate your trading strategies using intelligent bots that execute trades based on real-time market analysis.", image: Cardvector3 },
    ]

    return (
        <div className={styles.homeservicessectionmain}>
            <Image src={homeservicessection} alt="homeservicessection" layout="fill" objectFit="cover" />
            <div className={styles.homeservicessectioncontentmain}>
                <div className={styles.homeservicessectioncontainer}>
                    <div className={styles.homeservicessectioncontenttop}>
                        <CommonButton text="Services" justifyContent="center" />
                        <h3>Services Tailored for Forex Success</h3>
                        <p>Comprehensive solutions for your Forex brokerage.</p>
                    </div>
                    <div className={styles.homeservicessectioncontentbottom}>
                        {services.map((service) => (
                            <div key={service.id} className={styles.homeservicessectioncontentbottomcard}>
                                <div className={styles.homeservicessectioncontentbottomcardtopcontent}>
                                    <button type="button"><span>{service.id}</span></button>
                                    <div className={styles.homeservicessectioncontentbottomcardtopcontenttitletexts}>
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                                <div className={styles.homeservicessectioncontentbottomcardbottomcontent}>
                                    <Image src={service.image} alt={`Cardvector${service.id}`} width={"100%"} height={"100%"} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
