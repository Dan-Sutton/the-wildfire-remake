"use client";
import styles from "./footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

type Props = {
  dark?: boolean;
};

export default function Footer({ dark = false }: Props) {
  return (
    <div className={!dark ? styles.footer : styles.footerDark}>
      <div className={!dark ? styles.info : styles.infoDark}>
        © 2023. The Wildfire. All rights reserved. A website by Dan Sutton.
      </div>

      <div className={!dark ? styles.links : styles.linksDark}>
        <h3>View FAQs</h3>

        <AiFillFacebook className={!dark ? styles.icon : styles.iconDark} />
        <AiOutlineInstagram className={!dark ? styles.icon : styles.iconDark} />
      </div>
    </div>
  );
}
