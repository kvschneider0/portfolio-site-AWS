import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {

  const Home = () => {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="halla" element={<div>Halla</div>}>
      </Route>
    </Routes>
  );
}

export default App;
