import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
  return (
    <div className={styles.background}>
      {/* LOGO SECTION */}
      <section className={styles.headSection}>
        <h1>madai</h1>
        <h2>social media</h2>
      </section>
      {/* TAG LINE SECTION */}
      <section className={styles.tagSection}>
        <h2>Fuel Your Brand with Social Media Success!</h2>
      </section>
      {/* WHAT WE OFFER SECTION */}
      <section className={styles.offerSection}>
        <h2 className={styles.title}>What we offer...</h2>
        <div>
          <div className={styles.offer}></div>
          <div className={styles.offer}></div>
        </div>
        <div>
          <div className={styles.offer}></div>
          <div className={styles.offer}></div>
        </div>
      </section>

      {/* BUSINESSES WE HELPED*/}
      <section className={styles.offerSection}>
        <h2 className={styles.title}>
          Businesses that we’ve helped level up...
        </h2>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}
