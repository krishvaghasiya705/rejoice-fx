import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import Crmicon from "assets/footerimage/svg/crmicon.svg";
import Rightarrow from "assets/footerimage/svg/rightarrow.svg";
import Checksimage from "assets/footerimage/image/checksimage.png";
import Footerlogo from "assets/svg/mainlogo.svg";
import Footerrightarrow from "assets/svg/footerrightarrow";
import Footerticket from "common/footerticket";

export default function Footer() {
  return (
    <>
      {/* <------------------------- Footer ticket started -------------------------> */}
      <Footerticket />
      {/* <------------------------- Footer ticket ended -------------------------> */}

      {/* <------------------------- Footer started -------------------------> */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footermainflx}>
            <div>
                <div className={styles.footerlogo}>
                  <Link href="/">
                      <Image
                        src={Footerlogo}
                        alt="Headericon"
                        width={"100%"}
                        height={"100%"}
                      />
                  </Link>
                </div>
              <div className={styles.footerfirstcontent}>
                <div className={styles.footercontentflx}>
                  <div className={styles.footeremaildiv}>
                    <p>Email</p>
                    <a href="mailto:info@rejoicehub.com">
                      info@rejoicehub.com
                    </a>
                  </div>
                  <div className={styles.footeremaildiv}>
                    <p>Phone Number</p>
                    <a href="tel:+91 9825122840">+91 9825122840</a>
                  </div>
                </div>

                <div className={styles.footeraddressdiv}>
                  <p>Address</p>
                  <span>
                    A-301, Atlanta mall, Sudama chowk, Digital Valley (Mota
                    Varachha) , Surat, Gujarat, India 394101
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.footermiddlecontent}>
              <span>Links</span>
              <div className={styles.footermiddlecontentflxmain}>
                <Link href={"/forexcrm"}>Forex Licenses</Link>
                <Link href={"/algodevelopment"}>AI bot development</Link>
                <Link href={"/mauritiuslicense"}>Mauritius Forex License</Link>
                <Link href={"/mauritiuslicense"}>Strategies</Link>
                <Link href={"/vincentlicense"}>St. Vincent Forex License</Link>
                <Link href={"/forexcrm"}>Forex Services</Link>
                <Link href={"/forexcrm"}>Forex CRM</Link>
                <Link href={"/aidevelopment"}>AI Web/ Mobile Development</Link>
                <Link href={"/algodevelopment"}>Algo Bot & Strategies</Link>
                <Link href={"/contactus"}>Contact Us</Link>
              </div>
            </div>
            <div className={styles.footerlastcontent}>
              <p>Get started to up your business with personal Rejoice FX</p>
              <input type="email" placeholder="Enter your email address" />
              <button type="button">
                <span>Submit</span>
                <Footerrightarrow />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.footercopyrightmain}>
          <p>© 2024 Rejoicefx. All rights reserved.</p>
        </div>
      </footer>
      {/* <------------------------- Footer ended -------------------------> */}
    </>
  );
}
