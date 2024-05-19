import Image from "react-bootstrap/Image";
import styles from "./PersonalCredentials.module.css";
import profile from "../../../assets/profile.jpeg";

function PersonalCredentials() {
  return (
    <div id="Home" className={styles["personal-cred_container"]}>
      <div className={styles["personal-cred_about-me"]}>About Me</div>
      <div className={styles["personal-cred_image_container"]}>
        <Image
          src={profile}
          roundedCircle
          className={styles["personal-cred_image"]}
          alt="Profile Pic"
        />
      </div>
      <div id="About" className={styles["personal-cred_name-titel"]}>
        <h3> 4E6F aka Zonbi</h3>
        <span>Web Dev, Embedded Dev, FullStack Dev</span>
      </div>
      <div className={styles["personal-cred_description"]}>
        <p>
          I am 4E5F, also known as Zonbi, a dynamic Full-Stack and Embedded
          Developer with a decade of experience. My expertise spans developing
          responsive web applications, engineering backend systems, and
          programming embedded systems for the automotive and smart home
          industries.
        </p>
        <p>
          I am proficient in technologies such as JavaScript, React, Node.js,
          Python, MySQL, and MongoDB. My strength lies in integrating software
          with hardware to create innovative and efficient solutions.
        </p>
      </div>
      <div className={styles["personal-cred_infolist"]}>
        <div className={styles["personal-cred_infolist_left"]}>
          <ul>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Birthday:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  01.07.1990
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Age:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  32
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Address:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  Ave 11, New York, USA
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Email:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  TBack@gmail.com
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Phone:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  + 77 023 187 05 05
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles["personal-cred_infolist_right"]}>
          <ul>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Nationality:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  Afghanistan
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Study
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  Cambridge University
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Degree:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  Master
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Interest:
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  Football, Tennis
                </div>
              </div>
            </li>
            <li>
              <div className={styles["personal-cred-infolist_item"]}>
                <div className={styles["personal-cred-infolist_item_art"]}>
                  Freelance
                </div>
                <div className={styles["personal-cred-infolist_item_w"]}>
                  Available
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonalCredentials;
