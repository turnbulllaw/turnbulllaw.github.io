import React from "react"
import Header from "../components/header";
import Footer from "../components/footer";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.main}>
        <h1>Site currently under construction</h1>

        <div className={styles.contactInfo}>
          <h2>Contact Information:</h2>
          <h3>Address:</h3>
          <p>
            Office 3, 1st Floor<br />
            6B Cathedral Square<br />
            Gibraltar<br />
            GX11 1AA<br />
          </p>

          <h3>Telephone:</h3>
          <p>+350 200 67000</p>

          <h3>Email:</h3>
          <p>lturnbull@turnbull.law</p>
        </div>

      </div>
      <Footer/>
    </div>
  );
}
