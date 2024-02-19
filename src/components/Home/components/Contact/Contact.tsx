import { FC } from "react";
import styles from "../styles.module.scss";

const Contact: FC = () => {
  return (
    <div className={styles.Section}>
      <h2>Contact Me</h2>
      <div>
        <h3>Email: kylesch115@gmail.com</h3>
        <h3>LinkedIn: https://www.linkedin.com/in/kyle-v-schneider</h3>
      </div>
    </div>
  );
}

export default Contact;