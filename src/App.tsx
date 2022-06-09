import { useState } from "react";
import { Header } from "./components/Header";

const App = () => {
  const [count, setCount] = useState(0);

  return <Header />;
};

export { App };
