import styles from "./forexcrmbuild.module.scss"

import Image from "next/image"
import Rightarrow from "assets/forecrmimages/svg/rightarrow.svg"
import Checksimage from "assets/forecrmimages/image/checksimage.png"
import Modernbackgrounimage from "assets/forecrmimages/image/modernbackgrounimage.png"

export default function Forexcrmbuild() {
    return (
        <div className={styles.forexcrmbuildmain}>
            <div className={styles.forexcrmbuildsectionmaindiv}>
                <div className={styles.forexcrmbuild}>
                    <div className={styles.forexcrmbuildcontent}>
                        <h2>Building a brokerage from scratch will cost you $5 mln. Our fees? Divide that by a thousand</h2>
                        <button>
                            Get Started Now
                            <Image src={Rightarrow} alt="Rightarrow " width={"24px"} height={"24px"} />
                        </button>
                    </div>
                    <div className={styles.checksimagediv}>
                        <Image src={Checksimage} alt="Checksimage" width={"100%"} height={"100%"} />
                    </div>
                </div>
                <div className={styles.forexcrmflotedimage}>
                    <Image src={Modernbackgrounimage} alt="Modernbackgrounimage" width={"100%"} height={"100%"} />
                </div>
            </div>
        </div>
    )
}
