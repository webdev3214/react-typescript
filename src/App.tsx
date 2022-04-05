import React, { useState } from "react";
import InputField from "./components/InputField";
import styles from "./styles.module.scss";

const App: React.FC = () => {
  //also you can use React.ReactNode -> this supports all of the types
  const [todo, setTodo] = useState<string>(""); //you can also use <string | number> this is union type
  return (
    <div className={styles.container}>
      <span className={styles.header}>Taskify</span>
      <InputField />
    </div>
  );
};

export default App;
