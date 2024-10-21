import CommonButton from "@components/buttons"
import styles from "./mauritiusproccesssection.module.scss"
import Globicon from "assets/mauritiusimages/svg/globicon"
import Applyicon from "assets/mauritiusimages/svg/applyicon"
import Donateicon from "assets/mauritiusimages/svg/donateicon"
import Documenticon from "assets/mauritiusimages/svg/documenticon"

export default function Mauritiusproccesssection({title, cardcontent1, cardcontent2 ,cardcontent3 ,cardcontent4 ,cardcontentspan5 ,cardcontentp5}) {
  return (
    <div className={styles.mauritiusproccesssectionmain}>
      <div className={styles.mauritiusproccesssectiontitle}>
        <CommonButton text="Process" justifyContent="center" />
        <h1>{title}</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="container">
        <div className={styles.mauritiusproccesssectioncardsmain}>
          <div className={styles.mauritiusproccesssectioncard}>
            <div className={styles.mauritiusproccesssectioncardicon}>
              <Globicon />
            </div>
            <p>{cardcontent1}</p>
            <div className={styles.mauritiusproccesssectioncardnumber}>
              <span>01</span>
            </div>
          </div>
          <div className={styles.mauritiusproccesssectioncard}>
            <div className={styles.mauritiusproccesssectioncardicon}>
              <Applyicon />
            </div>
            <p>{cardcontent2}</p>
            <div className={styles.mauritiusproccesssectioncardnumber}>
              <span>02</span>
            </div>
          </div>
          <div className={styles.mauritiusproccesssectioncard}>
            <div className={styles.mauritiusproccesssectioncardicon}>
              <Donateicon />
            </div>
            <p>{cardcontent3}</p>
            <div className={styles.mauritiusproccesssectioncardnumber}>
              <span>03</span>
            </div>
          </div>
          <div className={styles.mauritiusproccesssectioncard}>
            <div className={styles.mauritiusproccesssectioncardicon}>
              <Documenticon />
            </div>
            <p>{cardcontent4}</p>
            <div className={styles.mauritiusproccesssectioncardnumber}>
              <span>04</span>
            </div>
          </div>
          <div className={styles.mauritiusproccesssectionlastcard}>
            <span>{cardcontentspan5}</span>
            <p>{cardcontentp5}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
