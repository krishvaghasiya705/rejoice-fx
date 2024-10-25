import styles from "./footerticket.module.scss";
import Image from "next/image";
import Link from "next/link";
import Crmicon from "assets/svg/crmwhiteicon.svg";
import Rightarrow from "assets/footerimage/svg/rightarrow.svg";
import Checksimage from "assets/footerimage/image/checksimage.png"
import CommonButton from "@components/buttons";

export default function Footerticket() {
  return (
    <div className={styles.footerticket}>
      <div className={styles.ticketmain}>
        <div className="container">
          <div className={styles.ticketflxmain}>
            <div className={styles.ticketflx1}>
              <div className={styles.algoherobannerbuttontop}>
                <CommonButton text={"Take the Next Step"} icon={Crmicon}/>
                {/* <Link href={"/"}>
                  <button>
                    <Image
                      src={Crmicon}
                      alt="Crmicon"
                      width={"28px"}
                      height={"28px"}
                    />
                    Take the Next Step
                  </button>
                </Link> */}
              </div>
              <h1>Start Trading Smarter with Rejoicefx</h1>
              <p>
                Ready to elevate your Forex trading or brokerage operations?
                Whether you're looking to automate your trades, secure a broker
                license, or streamline client management, Rejoicefx has the
                tools and expertise to help you succeed. Don’t wait—unlock your
                trading potential today.
              </p>
            </div>
            <div className={styles.ticketbuttonmain}>
              <Link href="/">
                <button type="button">
                  Get Started Now
                  <Image
                    src={Rightarrow}
                    alt="Rightarrow"
                    width={24}
                    height={24}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.ticketbackground}>
          <Image
            src={Checksimage}
            alt="Checksimage"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
