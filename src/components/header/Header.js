import React, { useState, useEffect } from "react";
import Headericon from "assets/svg/mainlogo.svg";
import Dropdownicon from "assets/svg/dropdownicon.svg";
import Image from "next/image";
import Rightarrow from "assets/svg/rightarrow";
import NavLink from "next/link";
import styles from "./Header.module.scss";
import "../../styles/pagesstyles.scss";
import Sidebar from "@components/sidebar";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
    document.body.style.overflow = "hidden";
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    document.body.style.overflow = "auto";
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.documentElement.style.overflowY = isSidebarOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <header className={`${styles.headermain} ${isSidebarOpen ? styles.absolute : styles.fixed}`}>
        <div className="container">
          <div className={styles.headermainalignment}>
            <div className={styles.headerlogo}>
              <NavLink href={"/"} passHref>
                <Image
                  src={Headericon}
                  alt="Headericon"
                  width={"100%"}
                  height={"100%"}
                />
              </NavLink>
            </div>
            <div className={styles.headeralllinks}>
              <div className={styles.linkContainer}>
                <div className={styles.dropdownLink}>
                  <NavLink href={"/forexcrm"}>Forex CRM</NavLink>
                </div>
              </div>
              <div
                onMouseEnter={() => handleMouseEnter("forexLicenses")}
                onMouseLeave={handleMouseLeave}
                className={`${styles.linkContainer} ${styles.linkContainerfrst} ${styles.dropdownWrapper}`}
              >
                <div className={styles.dropdownLink}>
                  <NavLink href={"/"}>
                    <span>Forex Licenses</span>
                    <Image
                      src={Dropdownicon}
                      alt="Dropdownicon"
                      width={"16px"}
                      height={"8px"}
                    />
                  </NavLink>
                </div>
                <div
                  className={`${styles.headerdropdownmainalignmentfrst} ${
                    activeDropdown === "forexLicenses" ? styles.active : ""
                  }`}
                >
                  <div className={styles.headerdropdownmain}>
                    <div className="container">
                      <div className={styles.dropdownflexmain}>
                        <div className={styles.dropdownbox}>
                          <h3>Mauritius Forex License</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <NavLink href={"/mauritiuslicense"}>
                            See Solution <Rightarrow />
                          </NavLink>
                        </div>
                        <div className={styles.dropdownbox}>
                          <h3>St. Vincent Forex License</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <NavLink href={"/vincentlicense"}>
                            See Solution <Rightarrow />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Algo Bot & Strategies Dropdown */}
              <div
                onMouseEnter={() => handleMouseEnter("algoBot")}
                onMouseLeave={handleMouseLeave}
                className={`${styles.linkContainer} ${styles.linkContainersc} ${styles.dropdownWrapper}`}
              >
                <div className={styles.dropdownLink}>
                  <NavLink href={"/"}>
                    <span>Algo Bot & Strategies</span>
                    <Image
                      src={Dropdownicon}
                      alt="Dropdownicon"
                      width={16}
                      height={8}
                    />
                  </NavLink>
                </div>
                <div
                  className={`${styles.headerdropdownmainalignmentsc} ${
                    activeDropdown === "algoBot" ? styles.active : ""
                  }`}
                >
                  <div className={styles.headerdropdownmain}>
                    <div className="container">
                      <div className={styles.dropdownflexmain}>
                        <div className={styles.dropdownbox}>
                          <h3>AI bot development</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <NavLink href={"/algodevelopment"}>
                            See Solution <Rightarrow />
                          </NavLink>
                        </div>
                        <div className={styles.dropdownbox}>
                          <h3>Strategies</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <NavLink href={"/algodevelopment"}>
                            See Solution <Rightarrow />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forex Services Dropdown */}
              <div
                onMouseEnter={() => handleMouseEnter("forexServices")}
                onMouseLeave={handleMouseLeave}
                className={`${styles.linkContainer} ${styles.linkContainerth} ${styles.dropdownWrapper}`}
              >
                <div className={styles.dropdownLink}>
                  <NavLink href={"/"}>
                    <span>Forex Services</span>
                    <Image
                      src={Dropdownicon}
                      alt="Dropdownicon"
                      width={16}
                      height={8}
                    />
                  </NavLink>
                </div>
                <div
                  className={`${styles.headerdropdownmainalignmentth} ${
                    activeDropdown === "forexServices" ? styles.active : ""
                  }`}
                >
                  <div className={styles.headerdropdownmain}>
                    <div className="container">
                      <div className={styles.dropdownflexmain}>
                        <div className={styles.dropdownbox}>
                          {/* <h3>AI Web/ Mobile Development</h3> */}
                          <h3>Web and Mobile App Development</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <NavLink href={"/aiwebdevelopment"}>
                            See Solution <Rightarrow />
                          </NavLink>
                        </div>
                        <div className={styles.dropdownbox}>
                          <h3>AI/ML Development</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <NavLink href={"/aidevelopment"}>
                            See Solution <Rightarrow />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerlastcontent}>
              <div className={styles.contactbuttonmain}>
                <NavLink href={"/contactus"}>
                  <button>
                    Contact Us <Rightarrow />
                  </button>
                </NavLink>
              </div>
              <div className={styles.hemburgermain}>
                <label className="hamburger" onChange={toggleSidebar} >
                  <input type="checkbox" />
                  <svg viewBox="0 0 32 32">
                    <path
                      className="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
