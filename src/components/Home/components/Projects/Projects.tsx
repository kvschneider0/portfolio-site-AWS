import { FC } from "react";
import chess_icon from "../../../../assets/chess-board.png";
import games_icon from "../../../../assets/controller.png";
import math_icon from "../../../../assets/matrix-.png";
import styles from "../styles.module.scss";

const Projects: FC = () => {
  const ProjectItem = (imgSrc: string, name: string): JSX.Element => {
    return (
      <div className={styles.ProjectItem}>
        <img 
          src={imgSrc}
          alt={name + " Icon"}
          className={styles.ProjectImage}
        />
        <h3>
          {name}
        </h3>
      </div>
    );
  };

  return (
    <div className={styles.Section}>
      <h1>Projects</h1>
      <div className={styles.FlexBox}>
        {ProjectItem(chess_icon, "Chess Is Hard")}
        {ProjectItem(games_icon, "Gaben's Game Gallery")}
        {ProjectItem(math_icon, "Mathematics Honors Thesis")}
      </div>
    </div>
  );
};

export default Projects;
