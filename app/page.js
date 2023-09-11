"use client";
import styles from "./page.module.css";
import bandImage from "../public/band-header-image.png";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dayjs from "dayjs";
import Link from "next/link";

export default function Home() {
  const form = useRef();
  const eventDate = useRef();

  const [inputDate, setInputDate] = useState("");
  const [selectedPackage, setPackage] = useState();

  const focusDate = () => {
    eventDate.current.showPicker();
  };

  const handleDateTime = (event) => {
    const value = event.target.value;
    setInputDate(dayjs(value).format("dddd MMMM D YYYY h:mma"));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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

      <div className={styles.packagesSpacer}></div>

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
            <Link className={styles.links} href={"/#contact"}>
              <b>CONTACT</b>
            </Link>{" "}
            us and we’re sure <br></br> we can provide a super solution!
          </p>
        </div>
      </section>

      <div className={styles.packagesSpacer}></div>

      <section className={styles.testimonials}>
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

      <div className={styles.packagesSpacer} id="contact"></div>

      <section className={styles.contact}>
        <h2>CONTACT</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.contactInput}>
            <div className={styles.topRowInputs}>
              <input
                type="text"
                name="first_name"
                placeholder="FIRST NAME*"
                required
              ></input>
              <input
                type="text"
                name="last_name"
                placeholder="LAST NAME*"
                required
              ></input>
            </div>
            <div className={styles.bottomRowInputs}>
              <input
                type="text"
                name="email"
                placeholder="EMAIL*"
                required
              ></input>
              <input type="text" name="phone" placeholder="PHONE"></input>
            </div>
            <div className={styles.bottomRowInputs}>
              <div className={styles.datetime}>
                <input
                  className={styles.datetimeText}
                  onClick={focusDate}
                  type="text"
                  name="event_date"
                  placeholder="EVENT DATE TIME"
                  value={inputDate}
                ></input>
                <input
                  className={styles.datetimeInput}
                  type="datetime-local"
                  ref={eventDate}
                  onChange={handleDateTime}
                ></input>
              </div>

              <input
                type="text"
                name="venue_location"
                placeholder="VENUE LOCATION"
              ></input>
            </div>

            <select name="package">
              <option value="" selected disabled>
                SELECT PACKAGE
              </option>
              <option value="Not Sure">Not Sure</option>
              <option value="Band + Background Music">
                Band + Background Music
              </option>
              <option value="Band + DJ">Band + DJ</option>
              <option value="Acoustic Band Setup">Acoustic Band Setup</option>
            </select>

            <textarea name="message" placeholder="MESSAGE*"></textarea>
          </div>

          <p>
            <i>Inputs marked with * are required</i>
          </p>

          <p className={styles.contactInfo}>
            View our{" "}
            <Link className={styles.links} href={"/faqs"}>
              <b>FAQs</b>
            </Link>{" "}
            just in case any of
            <br /> your questions are answered there!
          </p>

          <button type="submit" value="Send">
            SUBMIT
          </button>
        </form>
      </section>

      <div className={styles.packagesSpacer}></div>

      <Footer />
    </div>
  );
}
