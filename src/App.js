import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [theme, setTheme] = useState("light"); // Estado inicial

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("red");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`container ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
