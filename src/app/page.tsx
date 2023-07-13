import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      {/* LOGO SECTION */}
      <section className={styles.mainLogo}>
        <h1>madai</h1>
        <h2>social media</h2>
        <span>
          <span>📳</span>
          <span>📳</span>
          <span>📳</span>
        </span>
      </section>
      {/* TAG LINE SECTION */}
      <section>
        <h2>Fuel Your Brand with Social Media Success!</h2>
      </section>
      {/* WHAT WE OFFER SECTION */}
      <section></section>
    </div>
  );
}
