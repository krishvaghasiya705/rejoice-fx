import styles from "./forexbuildsection.module.scss";

import Homeforexbuildimage from "assets/homeimages/homeforexbuildimage.png";
import CommonButton from "@components/buttons";
import Image from "next/image";

export default function Forexbuildsection() {
    return (
        <div className={styles.algotradsectionmain}>
            <div className={styles.algotradsectioncontainer}>
                <div className={styles.algotradsectionflxmain}>
                    <div className={styles.algotradimagemain}>
                        <Image
                            src={Homeforexbuildimage}
                            alt="Homeforexbuildimage"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div>
                        <CommonButton text={"About Us"} justifyContent={"start"} />
                        <h2>Building Your Forex Business from the Ground Up</h2>
                        <p>
                            Rejoicefx is a global forex technology provider, offering
                            everything you need to establish and grow a successful forex
                            brokerage. From company formation to licensing, and beyond, we are
                            your trusted partner in creating world-class forex brokerage
                            solutions. With extensive experience in forex technology,
                            Rejoicefx provides seamless access to retail forex trading markets
                            and cutting-edge tools.
                        </p>
                        <p>
                            At Rejoicefx, we deliver comprehensive forex technology solutions
                            including company formation, broker licensing, web development,
                            trader’s room setup, MT4 White Label, and CRM integration to help
                            your brokerage thrive in the competitive market.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
