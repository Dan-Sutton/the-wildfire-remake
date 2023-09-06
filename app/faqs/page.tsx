import Navbar from "../components/navbar";
import styles from "./faqs.module.css";
import FaqItem from "../components/faqItem";
import Footer from "../components/footer";

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
              "Two sets equating to two hours, with a break in the middle. Generally our first set will be 45 minutes, and the second set at 75 minutes."
            }
          />
          <FaqItem
            question={"HOW MUCH POWER DO YOU NEED?"}
            description={
              "2 x 13-amp sockets are generally fine for our system, however the more, the better!"
            }
          />
          <FaqItem
            question={"HOW LONG DOES IT TAKE FOR YOU TO SET UP?"}
            description={
              "Up to 120 minutes. We can have background music playing within around 30 minutes of load in."
            }
          />
          <FaqItem
            question={"DO YOU TAKE SONG REQUESTS?"}
            description={
              "Generally we don’t take song requests but this can be discussed."
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
              "Yes, we regularly work at venues with noise limiters. We are happy to contact the venue in advance of the event to make sure we have all the required information to enable us to plan accordingly."
            }
          />
          <FaqItem
            question={"CAN WE SEE YOU PLAY BEFORE BOOKING YOU?"}
            description={
              "As a professional function band our bookings tend to be weddings and private events that unfortunately we are unable to invite guests to. We do play some public gigs, so keep an eye on our social media! You can also check out our testimonials page to see what previous clients have said about their experience with the band."
            }
          />
        </div>
      </section>
      <Footer dark={true} />
    </div>
  );
}
