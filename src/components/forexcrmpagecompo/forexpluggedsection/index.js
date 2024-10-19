import CommonButton from "@components/buttons"
import styles from "./forexpluggedsection.module.scss"

import Image from 'next/image';

import Forexcrmpluggedimage from "assets/forecrmimages/image/forexpluggedimage.png"

export default function Forexpluggedsection() {
    return (
        <div className={styles.forexpluggedsectionmain}>
            <div className="container">

                <div className={styles.forexpluggedsectionflxmain}>
                    <div className={styles.forexpluggedsectionflxcontent1}>
                        <CommonButton text="The best marketing tool" justifyContent="start" />
                        <h1>Plugged-in referral program</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className={styles.forexpluggedsectionflxcontent2}>
                        <Image src={Forexcrmpluggedimage} alt="Forexcrmpluggedimage" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
