import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import s from "./styles/app.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className={s.container}>
        <div className={s.input__group}>
          <input
            className={s.input__add_todo}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button className={s.btn__create_todo}>
            Criar <PlusCircle width={16} />
          </button>
        </div>

        <Task />
      </main>
    </>
  );
};

export { App };
