"use client";
import styles from "./page.module.css";
import bandImage from "../public/band-header-image.png";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <section className={styles.headerTitle}>
        <div className={styles.headerH1}>
          <p className={styles.the}>THE</p>
          <p className={styles.wildfire}>WILDFIRE</p>
        </div>
        <img className={styles.bandImage} src={bandImage.src} alt="" />
      </section>

      <section className={styles.about}>
        <h2>ELEVATE YOUR EVENT</h2>
        <p>
          The Wildfire are a fresh and energetic function/party band bringing a
          dynamic blend of genres, from timeless classics to modern hits,
          ensuring that every guest finds their groove on the dance floor. We
          provide a professional and unforgettable experience, so that your is
          event is not one to forget.
        </p>
      </section>

      <div className={styles.packagesSpacer} id="packages"></div>

      <section className={styles.packages}>
        <h2>CATERING TO YOUR NEEDS</h2>
        <p>
          We provide a number of packages to cater to your specific needs on the
          day.
        </p>

        <div className={styles.cards}>
          <span className={styles.packageCard}>
            <h3>BAND + BACKGROUND MUSIC</h3>
            <p>
              We’ll play our two live sets, and also provide music between sets.
            </p>
          </span>

          <span className={styles.packageCard}>
            <h3>BAND + DJ</h3>
            <p>
              We’ll play our two live sets, and also provide a DJ who can supply
              music through the rest of the event.
            </p>
          </span>

          <span className={styles.packageCard}>
            <h3>ACOUSTIC BAND SETUP</h3>
            <p>
              We can provide a more stripped back band setup, if that’s your
              preference.
            </p>
          </span>
        </div>
        <div className={styles.packageMessage}>
          <h3>HAD SOMETHING ELSE IN MIND?</h3>
          <p>
            <b>CONTACT</b> us and we’re sure <br></br> we can provide a super
            solution!
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <h2>WHAT ARE PEOPLE SAYING?</h2>
        <div className={styles.quotes}>
          <div className={styles.quote}>
            <h3 className={styles.quoteTitle}>
              “There aren’t enough words to say how fabulous The Wildfire were
              at our Tipi wedding celebrations.
            </h3>
            <p>
              As soon as we saw them play live locally, a few months beforehand,
              we knew they were the ones for us and supporting local talent was
              so important to us too. They literally rocked the tipi and the
              forest, had everyone up on their feet and were simply brilliant.
              True professionalism, great song covers, great lads. You certainly
              have a lot more fans now. Thank you so much!“
            </p>
            <h4>Nicky Conway</h4>
            <p>★★★★★</p>
          </div>

          <div className={styles.quote}>
            <h3 className={styles.quoteTitle}>
              “I cannot thank The Wildfire enough for playing at our wedding
              this week.
            </h3>
            <p>
              They played two sets to cater for the day and the evening - both
              of which were absolutely amazing! So many people commented on how
              talented they were and how fun their music was. People were up
              dancing until the very end! They also got the groom, best man, and
              friends up to sing along too. They were the highlight of the
              wedding and I can’t thank them enough for making our day so
              special.“
            </p>
            <h4>Grace Christine</h4>
            <p>★★★★★</p>
          </div>

          <div className={styles.quote}>
            <h3 className={styles.quoteTitle}>“Wow what a band!</h3>
            <p>
              The Wildfire play a great variety of songs that never fail to get
              people up and dancing The boys are so talented and are definitely
              a must see. Can’t wait to have them back very soon… can’t
              recommend them enough!“
            </p>
            <h4>Royal Fountain Inn</h4>
            <p>★★★★★</p>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <h2>CONTACT</h2>
        <div className={styles.contactInput}>
          <div className={styles.topRowInputs}>
            <input placeholder="FIRST NAME*" required></input>
            <input placeholder="LAST NAME*" required></input>
          </div>
          <div className={styles.bottomRowInputs}>
            <input placeholder="EMAIL*" required></input>
            <input placeholder="PHONE"></input>
          </div>
          <div className={styles.bottomRowInputs}>
            <select name="packages">
              <option value="" selected disabled>
                SELECT PACKAGE
              </option>
              <option value="notSure">Not Sure</option>
              <option value="band">Band + Background Music</option>
              <option value="dj">Band + DJ</option>
              <option value="acoustic">Acoustic Band Setup</option>
            </select>
            <input placeholder="VENUE LOCATION"></input>
          </div>

          <textarea placeholder="MESSAGE*"></textarea>
        </div>

        <p>
          <i>Inputs marked with * are required</i>
        </p>

        <p className={styles.contactInfo}>
          <b>VIEW</b> our <b>FAQs</b> just in case any of
          <br /> your questions are answered there!
        </p>

        <button>SUBMIT</button>
      </section>

      <Footer />
    </div>
  );
}
