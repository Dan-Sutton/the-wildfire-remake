"use client";
import Navbar from "../components/navbar";
import styles from "./faqs.module.css";
import FaqItem from "../components/faqItem";

export default function Faqs() {
  return (
    <div className={styles.faqs}>
      <Navbar />

      <section className={styles.info}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p>
          Hopefully your question gets answered here, otherwise please don’t
          hesitate to get in <b>CONTACT</b> with us.
        </p>

        <div className={styles.faqsList}>
          <FaqItem
            question={"HOW LONG DO YOU PLAY FOR?"}
            description={
              "Two sets equating to 2:15 hours, with a break in the middle."
            }
          />
          <FaqItem
            question={"HOW MUCH POWER DO YOU NEED?"}
            description={
              "Two sets equating to 2:15 hours, with a break in the middle."
            }
          />
          <FaqItem
            question={"HOW LONG DOES IT TAKE FOR YOU TO SET UP?"}
            description={
              "Two sets equating to 2:15 hours, with a break in the middle."
            }
          />
          <FaqItem
            question={"DO YOU TAKE SONG REQUESTS?"}
            description={
              "Two sets equating to 2:15 hours, with a break in the middle."
            }
          />
          <FaqItem
            question={"HOW MUCH SPACE DO YOU REQUIRE?"}
            description={
              "Two sets equating to 2:15 hours, with a break in the middle."
            }
          />
          <FaqItem
            question={"OUR VENUE HAS A NOISE LIMITER, IS THAT OKAY?"}
            description={
              "Two sets equating to 2:15 hours, with a break in the middle."
            }
          />
          <FaqItem
            question={"CAN WE SEE YOU PLAY BEFORE BOOKING YOU?"}
            description={
              "Two sets equating to 2:15 hours, with a break in the middle."
            }
          />
        </div>
      </section>
    </div>
  );
}
