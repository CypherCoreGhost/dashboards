import "./App.css";
// 2 -  reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./context/Theme";
// 1 - Outlet diz para o componente principal <App/> que parte daquele componente vai ser alterado, ou seja, que vao ser carregadas paginas filhas dentro dele

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Outlet />
    </div>
  );
}

export default App;
