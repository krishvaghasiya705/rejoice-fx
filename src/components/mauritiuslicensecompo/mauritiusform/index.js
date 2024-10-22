import React, { useState } from 'react';
import CommonButton from "@components/buttons";
import styles from "./mauritiusform.module.scss";
import Rightarrow from "assets/svg/rightarrow";
import Dropdownicon from 'assets/svg/dropdownicon';

export default function Mauritiusform() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = ['India', 'Nepal', 'Pakistan', 'China'];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.mauritiusformmain}>
      <div className="container">
        <div className={styles.mauritiusformflxmain}>
          <div className={styles.mauritiusformflx1}>
            <CommonButton text="OVERVIEW" justifyContent="start" />
            <h1>Why Choose Mauritius Your Forex Brokerage?</h1>
            <p>
              Rejoicefx offers a complete setup for establishing an unregulated
              Forex Company in St. Vincent and the Grenadines. While St. Vincent
              is an unregulated jurisdiction, we ensure your documents are
              prepared to allow smooth operation of your Forex brokerage. This
              makes St. Vincent an affordable and efficient solution for
              starting a Forex brokerage from a broker’s perspective. St.
              Vincent is recognized by the Organization for Economic
              Co-operation and Development (OECD) as a stable, independent, and
              politically free island.
            </p>
          </div>
          <div className={styles.mauritiusformflx2}>
            <div className={styles.mauritiusformflx2inner}>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
            </div>
            <div className={styles.mauritiusformflx2inner}>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>Phone</label>
                <input type="number" placeholder="Enter your number" />
              </div>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>Country</label>
                <div className={styles.customDropdown}>
                  <div className={styles.dropdownHeader} onClick={toggleDropdown}>
                    {selectedCountry || 'Select country'}
                    <span className={`${styles.arrow} ${isDropdownOpen ? styles.up : styles.down}`}>
                      <Dropdownicon />
                    </span>
                  </div>
                  {isDropdownOpen && (
                    <ul className={styles.dropdownList}>
                      {countries.map((country) => (
                        <li key={country} onClick={() => selectCountry(country)}>
                          {country}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.mauritiusformflx2inner}>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <label>Message</label>
                <textarea placeholder="Type your message here..."></textarea>
              </div>
            </div>
            <div className={styles.mauritiusformflx2inner}>
              <div className={styles.mauritiusformflx2innerinputmain}>
                <button type="submit"><p>Submit Now</p><Rightarrow /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
