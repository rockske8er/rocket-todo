import { Trash } from "phosphor-react";

import s from "./styles.module.css";

const TaskList = () => {
  return (
    <ul className={s.container}>
      <li className={s.task__list}>
        <div className={s.box}>
          <div className={s.round}>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" />
          </div>
        </div>

        <p className={s.task__description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In rem at,
          magnam labore error molestias, expedita iusto corrupti ipsam ab
          perferendis praesentium excepturi recusandae magni possimus facere
          placeat, maxime aut.
        </p>

        <div className={s.box}>
          <button className={s.task__btn__remove}>
            <Trash width={14} />
          </button>
        </div>
      </li>
    </ul>
  );
};

export { TaskList };
