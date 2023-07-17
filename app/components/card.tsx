import { any } from "prop-types";
import styles from "./card.module.css";

export default function Card({ details }: any) {
  return (
    <div className={styles.cardBody}>
      <img
        src="https://helloalice.com/wp-content/uploads/2022/06/AdobeStock_415962900-scaled-1.jpg"
        className={styles.image}
      />
      <h2 className={styles.title}>TEST TITLE</h2>
      <div className={styles.content}>
        <h3>Was real good!</h3>
        <p>yeah blah blah blah blah balah</p>
      </div>
    </div>
  );
}
