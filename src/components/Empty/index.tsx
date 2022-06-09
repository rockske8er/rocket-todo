import s from "./styles.module.css";

import empty from "./../../assets/empty.svg";

const Empty = () => {
  return (
    <div className={s.container}>
      <div className={s.empty__icon}>
        <img src={empty} />
      </div>

      <div className={s.empty__description}>
        <p className={s.empty__title}>Você ainda não tem tarefas cadastradas</p>
        <p className={s.empty__subtitle}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
};

export { Empty };
