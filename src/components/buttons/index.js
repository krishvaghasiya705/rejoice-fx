import styles from "./buttons.module.scss";
import Crmicon from "assets/algopageimages/svg/crmicon.svg";
import Image from "next/image";
import Link from "next/link";

export default function CommonButton({ text, href = "/", justifyContent = "center", icon = Crmicon }) {
    return (
        <div className={styles.algoherobannerbuttontop} style={{ justifyContent }}>
            <Link href={href}>
                <button>
                    {icon && (
                        <Image
                            src={icon}
                            alt="Button Icon"
                            width={28}
                            height={28}
                        />
                    )}
                    {text}
                </button>
            </Link>
        </div>
    );
}
