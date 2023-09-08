"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import Hamburger from "./hamburger";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.hamburgerContain}>
        <Hamburger open={openMenu}></Hamburger>
      </div>

      <div>
        <span>
          <span className={styles.the}>THE </span>
          <span className={styles.wildfire}>WILDFIRE</span>
        </span>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href={"/"}>
          HOME
        </Link>
        <Link className={styles.link} href={"/#packages"}>
          PACKAGES
        </Link>
        <Link className={styles.link} href={"/#contact"}>
          CONTACT
        </Link>
        <Link className={styles.link} href={"/songs"}>
          SONGS
        </Link>
        {/* <span>GALLERY</span> */}
        <Link className={styles.link} href={"/faqs"}>
          FAQS
        </Link>

        <AiOutlineMenu
          className={styles.hamburgerIcon}
          onClick={() => {
            setOpenMenu(!setOpenMenu);
          }}
        ></AiOutlineMenu>
      </div>
    </div>
  );
}
