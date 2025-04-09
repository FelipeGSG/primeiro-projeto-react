import "../styles/App.css";

function Header({ toggleTheme }) {
  return (
    <header className="header">
      <h1>React Metalinguístico</h1>
      <p>Este site explica a si mesmo enquanto você interage com ele!</p>
      <button className="theme-button" onClick={toggleTheme}>Trocar Tema</button>
    </header>
  );
}

export default Header;
