"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={openMenu ? styles.menu : styles.menuClose}>
        <AiOutlineClose
          className={styles.closeMenuButton}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        ></AiOutlineClose>
        <div
          className={
            openMenu ? styles.sideMenuLinks : styles.sideMenuLinksClose
          }
        >
          <a
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className={styles.menuLink}
            href={"/"}
          >
            HOME
          </a>
          <a
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className={styles.menuLink}
            href={"/#packages"}
          >
            PACKAGES
          </a>
          <a
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className={styles.menuLink}
            href={"/#contact"}
          >
            CONTACT
          </a>
          <a
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className={styles.menuLink}
            href={"/songs"}
          >
            SONGS
          </a>
          {/* <span>GALLERY</span> */}
          <a
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className={styles.menuLink}
            href={"/faqs"}
          >
            FAQS
          </a>
        </div>
      </div>

      <div className={styles.siteName}>
        <span>
          <span className={styles.the}>THE </span>
          <span className={styles.wildfire}>WILDFIRE</span>
        </span>
      </div>
      <div className={styles.links}>
        <a className={styles.link} href={"/"}>
          HOME
        </a>
        <a className={styles.link} href="/#packages">
          PACKAGES
        </a>
        <a className={styles.link} href="/#contact">
          CONTACT
        </a>
        <a className={styles.link} href="/songs">
          SONGS
        </a>
        {/* <span>GALLERY</span> */}
        <a className={styles.link} href="/faqs">
          FAQS
        </a>

        <AiOutlineMenu
          className={
            !openMenu ? styles.hamburgerIcon : styles.hamburgerIconClose
          }
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        ></AiOutlineMenu>
      </div>
    </div>
  );
}
