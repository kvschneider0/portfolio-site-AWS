import { FC } from "react";
import styles from "../styles.module.scss";

import book1 from "../../../../assets/pure_white_and_deadly.jpg";
import book2 from "../../../../assets/forward_the_foundation.jpg";
import book3 from "../../../../assets/the_sign_and_the_seal.jpg";
const books = [book1, book2, book3]

const About: FC = () => {
  return (
    <div className={styles.Section}>
      <h2>About</h2>
      <div>
        <p>
          As a dedicated and self-motivated software developer and researcher, I am constantly seeking out new challenges that allow me to grow and learn. With a strong background in mathematics and science, I am passionate about using technology to solve complex problems and make a positive impact in the world. I thrive on innovation and creativity, and I am committed to pushing the boundaries of what is possible through my work.

          Whether I am conducting research, developing software solutions, or exploring new fields of knowledge, I am always seeking out opportunities to expand my skills and expertise. As someone who thrives on challenge, I am constantly pushing myself to learn and grow in my work. With a keen eye for detail and a results-driven mindset, I am able to deliver exceptional work that meets the needs of my clients and collaborators.

          As a lifelong learner, I am constantly seeking out new ideas and experiences, and I am eager to connect with others who share my passion for intellectual curiosity and personal growth. If you're looking for a dedicated and driven software developer and researcher who is always up for a challenge, then look no further than me.
        </p>
      </div>
      <div>
        <h3>Books I'm Reading</h3>
        <div className={styles.BooksWrapper}>
          {books.map((book, index) => (
            <img
              key={index}
              src={book}
              alt="Book"
              className={styles.BookImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;