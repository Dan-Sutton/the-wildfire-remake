import Navbar from "../components/navbar";
import styles from "./songs.module.css";
import Footer from "../components/footer";

export default function Songs() {
  return (
    <div className={styles.songs}>
      <Navbar />

      <section className={styles.info}>
        <h2>OUR SONGS</h2>
        <p>
          Our repertoire is ever evolving, but here are some regulars on our set
          list.
        </p>

        <div className={styles.songsList}>
          <ul className={styles.songListLeft}>
            <li>FOOTLOOSE</li>
            <li>ROCK N ROLL STAR</li>
            <li>ALL STAR</li>
            <li>LONELY BOY</li>
            <li>JUMPING JACK FLASH</li>
            <li>(I CANT GET NO) SATISFACTION</li>
            <li>LIGHTNING BOLT</li>
            <li>USE SOMEBODY</li>
            <li>SHE MOVES IN HER OWN WAY</li>
            <li>CRAZY LITTLE THING CALLED LOVE</li>
            <li>PLACE YOUR HANDS</li>
            <li>NEVER CAN TELL</li>
            <li>SAW HER STANDING THERE</li>
            <li>ALL THE SMALL THINGS</li>
            <li>DREAMS</li>
            <li>STUCK IN THE MIDDLE WITH YOU</li>
          </ul>

          <ul className={styles.songListRight}>
            <li>WHAT I LIKE ABOUT YOU</li>
            <li>NO ROOTS</li>
            <li>DOCTOR DOCTOR</li>
            <li>LAST NITE</li>
            <li>5 COLOURS IN HER HAIR</li>
            <li>SEX ON FIRE</li>
            <li>EX&apos; AND OH&apos;S</li>
            <li>GETTING STARTED</li>
            <li>HOLD BACK THE RIVER</li>
            <li>WHAT YOU KNOW</li>
            <li>DAKOTA</li>
            <li>STACEY&apos;S MOM/ TEENAGE DIRTBAG</li>
            <li>YELLOW</li>
            <li>AS IT WAS</li>
            <li>COME TOGETHER/LOSE YOURSELF</li>
            <li>SEVEN NATION ARMY</li>
          </ul>
        </div>

        <div className={styles.message}>
          <h3>GOT A SONG SUGGESTION?</h3>
          <p>
            <b>CONTACT</b> us and we’ll have a listen<br></br> and maybe even
            add it to the list!
          </p>
        </div>
      </section>
      <Footer dark={true} />
    </div>
  );
}
