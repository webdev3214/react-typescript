import React, { useRef } from "react";

import styles from "./styles.module.scss";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  //also you can use const InputField:React.FC<Props>
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles.input}
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className={styles.input_box}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
      />
      <button className={styles.input_submit} type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
