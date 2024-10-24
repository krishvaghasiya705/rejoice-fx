import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import Headericon from "assets/svg/mainlogo.svg";
import Dropdownicon from "assets/svg/dropdownicon.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.asideheadermain}>
        <Link href="/" onClick={() => {toggleSidebar()}}>
          <Image src={Headericon} alt="Headericon" />
        </Link>
      </div>
      <div className={styles.asidebody}>
        <div className={styles.asidecontentmain}>
          <div className={styles.asidecontent}>
            <Link href="/" onClick={() => {toggleSidebar()}}>Forex CRM</Link>
          </div>
        </div>
        <div className={styles.asidecontentmain}>
          <div className={styles.asidecontent} onClick={() => {toggleDropdown(1)}}>
            <Link href="/" onClick={() => {toggleSidebar()}}>Forex Licenses</Link>
            <Image
              src={Dropdownicon}
              alt="Dropdownicon"
              width={"16px"}
              height={"8px"}
            />
          </div>
          <div className={`${styles.asidedropdowncontent} ${openDropdown === 1 ? styles.open : ""}`}>
            <Link href="/mauritiuslicense" onClick={toggleSidebar}>Mauritius Forex License</Link>
            <Link href="/vincentlicense" onClick={toggleSidebar}>St. Vincent Forex License</Link>
          </div>
        </div>
        <div className={styles.asidecontentmain}>
          <div className={styles.asidecontent} onClick={() => {toggleDropdown(2)}}>
            <Link href="/" onClick={() => {toggleSidebar()}}>Algo Bot & Strategies</Link>
            <Image
              src={Dropdownicon}
              alt="Dropdownicon"
              width={"16px"}
              height={"8px"}
            />
          </div>
          <div className={`${styles.asidedropdowncontent} ${openDropdown === 2 ? styles.open : ""}`}>
            <Link href="/algodevelopment" onClick={toggleSidebar}>AI bot development</Link>
            <Link href="/algodevelopment" onClick={toggleSidebar}>Strategies</Link>
          </div>
        </div>
        <div className={styles.asidecontentmain}>
          <div className={styles.asidecontent} onClick={() => {toggleDropdown(3)}}>
            <Link href="/" onClick={() => {toggleSidebar()}}>Forex Services</Link>
            <Image
              src={Dropdownicon}
              alt="Dropdownicon"
              width={"16px"}
              height={"8px"}
            />
          </div>
          <div className={`${styles.asidedropdowncontent} ${openDropdown === 3 ? styles.open : ""}`}>
            <Link href="/aiwebdevelopment" onClick={toggleSidebar}>AI Web/ Mobile Development</Link>
            <Link href="/aidevelopment" onClick={toggleSidebar}>AI Development</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
