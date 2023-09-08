import React, { use } from "react";
import { useState } from "react";
import styles from "./hamburger.module.css";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

export default function Hamburger({ open }) {
  const showSettings = (event) => {
    event.preventDefault();
  };

  const [isOpen, setOpen] = useState(open);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Menu
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      className={styles.icon}
      isOpen={isOpen}
    >
      <Link
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={styles.link}
        href={"/"}
      >
        HOME
      </Link>
      <Link
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={styles.link}
        href={"/#packages"}
      >
        PACKAGES
      </Link>
      <Link
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={styles.link}
        href={"/#contact"}
      >
        CONTACT
      </Link>
      <Link
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={styles.link}
        href={"/songs"}
      >
        SONGS
      </Link>
      {/* <span>GALLERY</span> */}
      <Link
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={styles.link}
        href={"/faqs"}
      >
        FAQS
      </Link>
    </Menu>
  );
}
