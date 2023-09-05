import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
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
        <span>PACKAGES</span>
        <span>CONTACT</span>
        <Link className={styles.link} href={"/songs"}>
          SONGS
        </Link>
        <span>GALLERY</span>
        <Link className={styles.link} href={"/faqs"}>
          FAQS
        </Link>
      </div>
    </div>
  );
}
