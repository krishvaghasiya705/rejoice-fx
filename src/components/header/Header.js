import React, { useState, useEffect } from 'react';
import Headericon from "assets/svg/mainlogo.svg";
import Dropdownicon from "assets/svg/dropdownicon.svg";
import Image from 'next/image';
import Rightarrow from 'assets/svg/rightarrow';
import NavLink from 'next/link';
import styles from "./Header.module.scss"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
    document.body.style.overflow = 'hidden';
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  };

  // Clean up effect to ensure body overflow is reset when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <header className={styles.headermain}>
      <div className="container">
        <div className={styles.headermainalignment}>
          <div className={styles.headerlogo}>
            <NavLink href={"/"} passHref>
              <Image src={Headericon} alt="Headericon" width={"100%"} height={"100%"} />
            </NavLink>
          </div>
          <div className={styles.headeralllinks}>
            <div className={styles.linkContainer}>
              <div className={styles.dropdownLink}>
                <NavLink href={"/forexcrm"}>Forex CRM</NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter('forexLicenses')}
              onMouseLeave={handleMouseLeave}
              className={`${styles.linkContainer} ${styles.linkContainerfrst} ${styles.dropdownWrapper}`}
            >
              <div className={styles.dropdownLink}>
                <NavLink href={"/"}>
                  <span>Forex Licenses</span>
                  <Image src={Dropdownicon} alt="Dropdownicon" width={"16px"} height={"8px"} />
                </NavLink>
              </div>
              <div className={`${styles.headerdropdownmainalignmentfrst} ${activeDropdown === 'forexLicenses' ? styles.active : ''}`}>
                <div className={styles.headerdropdownmain}>
                  <div className="container">
                    <div className={styles.dropdownflexmain}>
                      <div className={styles.dropdownbox}>
                        <h3>AI bot development</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <NavLink href={"/algodevelopment"}>See Solution <Rightarrow /></NavLink>
                      </div>
                      <div className={styles.dropdownbox}>
                        <h3>Strategies</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <NavLink href={"/aidevelopment"}>See Solution <Rightarrow /></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Algo Bot & Strategies Dropdown */}
            <div
              onMouseEnter={() => handleMouseEnter('algoBot')}
              onMouseLeave={handleMouseLeave}
              className={`${styles.linkContainer} ${styles.linkContainersc} ${styles.dropdownWrapper}`}
            >
              <div className={styles.dropdownLink}>
                <NavLink href={"/"}>
                  <span>Algo Bot & Strategies</span>
                  <Image src={Dropdownicon} alt="Dropdownicon" width={16} height={8} />
                </NavLink>
              </div>
              <div className={`${styles.headerdropdownmainalignmentsc} ${activeDropdown === 'algoBot' ? styles.active : ''}`}>
                <div className={styles.headerdropdownmain}>
                  <div className="container">
                    <div className={styles.dropdownflexmain}>
                      <div className={styles.dropdownbox}>
                        <h3>AI Web/ Mobile Development</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <NavLink href={"/aiwebdevelopment"}>See Solution <Rightarrow /></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forex Services Dropdown */}
            <div
              onMouseEnter={() => handleMouseEnter('forexServices')}
              onMouseLeave={handleMouseLeave}
              className={`${styles.linkContainer} ${styles.linkContainerth} ${styles.dropdownWrapper}`}
            >
              <div className={styles.dropdownLink}>
                <NavLink href={"/"}>
                  <span>Forex Services</span>
                  <Image src={Dropdownicon} alt="Dropdownicon" width={16} height={8} />
                </NavLink>
              </div>
              <div className={`${styles.headerdropdownmainalignmentth} ${activeDropdown === 'forexServices' ? styles.active : ''}`}>
                <div className={styles.headerdropdownmain}>
                  <div className="container">
                    <div className={styles.dropdownflexmain}>
                      <div className={styles.dropdownbox}>
                        <h3>Mauritius Forex License</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <NavLink href={"/mauritiuslicense"}>See Solution <Rightarrow /></NavLink>
                      </div>
                      <div className={styles.dropdownbox}>
                        <h3>St. Vincent Forex License</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <NavLink href={"/vincentlicense"}>See Solution <Rightarrow /></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactbuttonmain}>
            <NavLink href={"/contactus"}><button>Contact Us <Rightarrow /></button></NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
