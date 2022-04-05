import React from "react";

import styles from "./styles.module.scss";

const InputField = () => {
  return (
    <form className={styles.input}>
      <input
        className={styles.input_box}
        type="text"
        placeholder="Enter a task"
      />
      <button className={styles.input_submit} type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
