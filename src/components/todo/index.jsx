import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { toggleCompleted, removeTodo } from "../../store/slices/todo";
import styles from './index.module.css';



export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleCompleted({ id: todo.id }));
  }

    const removeTodoItem = () => {
    dispatch(removeTodo({ id: todo.id }));
  }

  return (

    <div className={styles.container}>
      <li className={styles.item} onClick={toggleTodoItem}>
        {todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx({
            [styles.completed]: todo.completed,
          })}
        >
          {todo.content}
        </span>
      </li>
      <div className={styles.removeTodo} onClick={removeTodoItem}>х</div>
    </div>
  );
};
