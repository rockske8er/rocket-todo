import brand from "./../../assets/brand.svg";

import s from "./styles.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <img src={brand} alt="" className={s.brand} />
    </header>
  );
};

export { Header };
