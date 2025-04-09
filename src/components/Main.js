import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import "../styles/App.css";

function Main() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("O que esse site faz?");

  // Funções para os botões

  const changeTitle = () => {
    setTitle(title === "O que esse site faz?" ? "Este site explica a si mesmo!" : "O que esse site faz?");
  };

  const resetState = () => {
    setMessage("");
    setTitle("O que esse site faz?");
  };

  return (
    <main className="main">
      <h2>{title}</h2>
      <p className="description">
        Esse site é um exemplo de React e explica a si mesmo! Ele usa componentes reutilizáveis e um design moderno.
      </p>

      <div className="card-container">
        <Card
          title="Componentes Reutilizáveis"
          text="Cada parte desse site foi criada como um componente independente. Isso facilita manutenção e expansão, além de tornar o código mais limpo e organizado."
        />

        <Card
          title="React é poderoso"
          text="O React nos permite criar interfaces dinâmicas e interativas, separando o código em pequenos blocos reutilizáveis. Essa abordagem torna a programação mais eficiente."
        />

        <Card
          title="Estilização Moderna"
          text="Usamos CSS moderno com flexbox e grid para criar um layout responsivo. As animações sutis deixam o site mais agradável e interativo para o usuário."
        />

        <Card
          title="Interatividade"
          text="Podemos adicionar eventos e estados para tornar o site dinâmico. Teste os botões abaixo para ver as mudanças em tempo real!"
        />
      </div>

      <div className="interaction">
        <p>Teste a interatividade clicando nos botões abaixo:</p>
        <Button text="Alterar Título" onClick={changeTitle} />
        <Button text="Redefinir Estado" onClick={resetState} />
        <Button text="Clique aqui!" onClick={() => setMessage("Você clicou! React gerenciou esse estado. 🎉")} />
        {message && <p className="message">{message}</p>}
      </div>
    </main>
  );
}

export default Main;
