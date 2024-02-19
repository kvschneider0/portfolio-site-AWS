import { FC } from "react";
import styles from "../styles.module.scss";
import python_img from '../../../../assets/technologies/python.png';
import flask_img from '../../../../assets/technologies/flask.png';
import javascript_img from '../../../../assets/technologies/javascript.png';
import react_img from '../../../../assets/technologies/react.png';
import html_img from '../../../../assets/technologies/html.png';
import css_img from '../../../../assets/technologies/css.png';
import mui_img from '../../../../assets/technologies/mui.png';
import numpy_img from '../../../../assets/technologies/numpy.png';
import pandas_img from '../../../../assets/technologies/pandas.png';
import github_img from '../../../../assets/technologies/github2.png';
import node_img from '../../../../assets/technologies/node.png';
import render_img from '../../../../assets/technologies/render.png';

const Skills: FC = () => {
  const GridItem = (imgSrc: string, name: string): JSX.Element  => {
    return (
      <td>
        <div className={styles.GridItem}>
          <img 
            src={imgSrc}
            alt={name + " Logo"}
            className={styles.TechImage}
          />
          <span>
            {name}
          </span>
        </div>
      </td>
    );
  };

  return (
    <div className={styles.Section}>
      <div className={styles.GridWrapper}>
        <h1>Skills</h1>
        <table className={styles.TechTable}>
          <tr>
            {GridItem(python_img, "Python")}
            {GridItem(flask_img, "Flask")}
            {GridItem(javascript_img, "Javascript")}
            {GridItem(react_img, "React")}
          </tr>
          <tr>
            {GridItem(html_img, "HTML")}
            {GridItem(css_img, "CSS")}
            {GridItem(mui_img, "Material UI")}
            {GridItem(numpy_img, "NumPy")}
          </tr>
          <tr>
            {GridItem(render_img, "Render")}
            {GridItem(pandas_img, "Pandas")}
            {GridItem(github_img, "GitHub")}
            {GridItem(node_img, "Node JS")}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Skills;
