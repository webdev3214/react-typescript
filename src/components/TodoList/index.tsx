import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../../model";
import SingeTodo from "../SingleTodo";
import styles from "./styles.module.scss";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className={styles.container}>
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className={styles.todos}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className={styles.todos_heading}>Active Tasks</span>
            {todos.map((item, index) => (
              <SingeTodo
                item={item}
                index={index}
                key={item.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className={styles.todos_remove}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className={styles.todos_heading}>Completed Tasks</span>
            {completedTodos.map((item, index) => (
              <SingeTodo
                item={item}
                index={index}
                key={item.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
