import { FC } from "react";
import styles from "../styles.module.scss";
import selfie_jpg from "../../../../assets/selfie.jpg";

const Intro: FC = () => {
  return (
    <div className={styles.Section}>
      <div className={styles.FlexBox}>
        <div>
          <img
            src={selfie_jpg}
            alt="Kyle Schneider"
            className={styles.SelfieImage}
          />
        </div>
        <div style={{ margin: "auto" }}>
          <h1>Kyle Schneider</h1>
          <h2>Software Developer</h2>
          <p>
            I am a software developer with a passion for learning and creating.
            <br />
            I use my background in mathematics and science to solve problems and build applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;