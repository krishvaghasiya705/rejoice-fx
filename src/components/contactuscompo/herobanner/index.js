import CommonButton from "@components/buttons"
import styles from "./contactusherobanner.module.scss"

export default function Contactusherobanner() {
  return (
    <div className={styles.contactusherobannermain}>
        <div className="container">
            <div className={styles.contactusherobannercontentmain}>
                <CommonButton text="Get in Touch with Rejoicefx" justfycontent="center"/>
                <h1>Reach Out for Any Inquiries or Support</h1>
                <p>Simply fill out the form below, and we’ll get back to you as soon as possible.</p>
            </div>
        </div>
    </div>
  )
}
