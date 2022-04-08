import React, { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Todo } from "../../model";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import styles from "./styles.module.scss";
type Props = {
  index: number;
  item: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingeTodo: React.FC<Props> = ({ index, item, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : item))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <form
          className={styles.todo_single}
          onSubmit={(e) => handleEdit(e, item.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => {
                setEditTodo(e.target.value);
              }}
              className={styles.todo_single_text}
            />
          ) : item.isDone ? (
            <s className={styles.todo_single_text}>{item.todo}</s>
          ) : (
            <span className={styles.todo_single_text}>{item.todo}</span>
          )}
          <div className={styles.icons}>
            <span className={styles.icon}>
              <AiFillEdit
                onClick={() => {
                  if (!edit && !item.isDone) {
                    setEdit(!edit);
                  }
                }}
              />
            </span>
            <span className={styles.icon}>
              <AiFillDelete onClick={() => handleDelete(item.id)} />
            </span>
            <span className={styles.icon}>
              <AiOutlineCheck onClick={() => handleDone(item.id)} />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingeTodo;
