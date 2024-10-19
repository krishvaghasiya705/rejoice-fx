
import Checksimage from "assets/footerimage/image/checksimage.png"
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import Crmicon from "assets/footerimage/svg/crmicon.svg"
import Rightarrow from "assets/footerimage/svg/rightarrow.svg"
import Footerlogo from "assets/svg/mainlogo.svg"
import Footerrightarrow from "assets/svg/footerrightarrow";

export default function Footer() {

  return (
    <>
      <div className={styles.footermain}>
        <div className={styles.footerticket}>
          <div className={styles.ticketmain}>
            <div className="container">
              <div className={styles.ticketflxmain}>
                <div>
                  <div className={styles.algoherobannerbuttontop}>
                    <Link href={"/"}>
                      <button>
                        <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                        Take the Next Step
                      </button>
                    </Link>
                  </div>
                  <h1>Start Trading Smarter with Rejoicefx</h1>
                  <p>Ready to elevate your Forex trading or brokerage operations? Whether you're looking to automate your trades, secure a broker license, or streamline client management, Rejoicefx has the tools and expertise to help you succeed. Don’t wait—unlock your trading potential today.</p>
                </div>
                <div className={styles.ticketbuttonmain}>
                  <Link href="/">
                    <button type="button">
                      Get Started Now
                      <Image src={Rightarrow} alt="Rightarrow" width={24} height={24} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.ticketbackground}>
              <Image src={Checksimage} alt="Checksimage" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>












        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footermainflx}>
              <div>
                <Link href="/">
                  <div className={styles.footerlogo}>
                    <Image src={Footerlogo} alt="Headericon" width={"100%"} height={"100%"} />
                  </div>
                </Link>
                <div className={styles.footerfirstcontent}>
                  <div className={styles.footercontentflx}>
                    <div className={styles.footeremaildiv}>
                      <p>Email</p>
                      <a href="mailto:info@rejoicehub.com">info@rejoicehub.com</a>
                    </div>
                    <div className={styles.footeremaildiv}>
                      <p>Phone Number</p>
                      <a href="tel:+91 9825122840">+91 9825122840</a>
                    </div>
                  </div>

                  <div className={styles.footeraddressdiv}>
                    <p>Address</p>
                    <span>A-301, Atlanta mall, Sudama chowk, Digital Valley (Mota Varachha) , Surat, Gujarat, India 394101</span>
                  </div>
                </div>
              </div>
              <div className={styles.footermiddlecontent}>
                <span>Links</span>
                <div className={styles.footermiddlecontentflxmain}>
                  <Link href={"/"}>Forex Licenses</Link>
                  <Link href={"/"}>Mauritius Forex License</Link>
                  <Link href={"/"}>Mauritius Forex License</Link>
                  <Link href={"/"}>St. Vincent Forex License</Link>
                  <Link href={"/"}>Forex CRM</Link>
                  <Link href={"/"}>Algo Bot & Strategies</Link>
                </div>
              </div>
              <div className={styles.footerlastcontent}>
                <p>Get started to up your business with personal Rejoice FX</p>
                <input type="email" placeholder="Enter your email address" />
                <button type="button"><span>Submit</span><Footerrightarrow /></button>
              </div>
            </div>
          </div>
          <div className={styles.footercopyrightmain}>
            <p>© 2024 Rejoicefx. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}