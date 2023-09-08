import styles from "./footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

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
        <Link className={styles.links} href={"/faqs"}>
          <h3>View FAQs</h3>
        </Link>{" "}
        <Link href={"https://www.facebook.com/TheWildfireMusic"}>
          <AiFillFacebook className={!dark ? styles.icon : styles.iconDark} />
        </Link>
        <Link href={"https://www.instagram.com/thewildfire_band/"}>
          <AiOutlineInstagram
            className={!dark ? styles.icon : styles.iconDark}
          />
        </Link>
      </div>
    </div>
  );
}
