import { useState } from "react";
import { Empty } from "../Empty";
import { TaskList } from "../TaskList";

import s from "./styles.module.css";

const Task = () => {
  const [tasks, settasks] = useState([]);
  return (
    <section className={s.container}>
      <header className={s.task__header}>
        <div className={s.task__created}>
          <p className={s.task__title}> Tarefas criadas</p>
          <span className={s.task__badge}>5</span>
        </div>

        <div className={s.task__completed}>
          <p className={s.task__title}>Concluídas</p>
          <span className={s.task__badge}>5 de 10</span>
        </div>
      </header>
      {tasks.length === 0 ? (
        <>
          <TaskList />
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
};

export { Task };
