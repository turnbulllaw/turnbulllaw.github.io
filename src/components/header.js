import React from "react"
import styles from "./header.module.scss"

import Logo from "../assets/TL-Logo.png"

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.headerLogo} src={Logo} alt="Turnbull Law logo" />
      <h1>Turnbull Law</h1>
    </div>
  );
}
