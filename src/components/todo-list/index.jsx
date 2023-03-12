import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import styles from './index.module.css';
import { filterCompleted, filterNotCompleted } from "../../store/slices/todo";
import { useDispatch } from "react-redux";



export const TodoList = () => {
  
  const todos = useSelector(todosSelector);

  const dispatch = useDispatch();

  const handleCompletedTodos = () => {
    dispatch(filterCompleted(todos));
  };

  const handleNotCompletedTodos = () => {
    dispatch(filterNotCompleted(todos));
  };

  return (
    <div className={styles.list__container}>
      <div className={styles.filter}>
        <button onClick={handleCompletedTodos}>Выполненные</button>
        <button onClick={handleNotCompletedTodos}>Текущие</button>
      </div>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

