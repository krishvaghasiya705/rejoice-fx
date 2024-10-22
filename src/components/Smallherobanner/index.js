import styles from "./smallherobanner.module.scss"
import CommonButton from "@components/buttons"

export default function Smallerobanner({text, heading, paragraph}) {
  return (
    <div className={styles.smallerobannerherobannermain}>
        <div className="container">
            <div className={styles.smallerobannerherobannercontentmain}>
                <CommonButton text={text} justfycontent="center"/>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    </div>
  )
}
