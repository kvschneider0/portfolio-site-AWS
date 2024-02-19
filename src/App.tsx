import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Chess from "./components/Chess/Chess";
import Games from "./components/Games/Games";
import Math from "./components/Math/Math";
import styles from "./styles.module.scss";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chess" element={<Chess />} />
        <Route path="/games" element={<Games />} />
        <Route path="/math" element={<Math />} />
      </Routes>  
    </div>
  );
}

export default App;
