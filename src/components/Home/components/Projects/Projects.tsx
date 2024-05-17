import { FC } from "react";
import { useNavigate } from "react-router-dom";
import chess_icon from "../../../../assets/chess-board.png";
import math_icon from "../../../../assets/matrix-.png";
import styles from "../styles.module.scss";

const Projects: FC = () => {
  const navigate = useNavigate();

  const ProjectItem = (imgSrc: string, name: string, url: string): JSX.Element => {
    return (
      <div
        className={styles.ProjectItem}
        onClick={() => navigate(url)}
      >
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
        {ProjectItem(chess_icon, "Chess Is Hard", "/chess")}
        {ProjectItem(math_icon, "Mathematics Honors Thesis", "/math")}
      </div>
    </div>
  );
};

export default Projects;
