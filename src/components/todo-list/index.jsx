import { useState} from 'react'
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import styles from './index.module.css';
import { filterCompleted, filterNotCompleted } from "../../store/slices/todo";
import { useDispatch } from "react-redux";


let passed, current;

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false)
  const [uncompleted, setUncompleted] = useState(false)
  const [filterStatus, setFilterStatus] = useState(false)

  const handleCompletedTodos = () => {
    setCompleted(true)
    setUncompleted(false)
    setFilterStatus(true)
    dispatch(filterCompleted(todos));
    passed = todos.filter(item => item.completed === true)
    console.log(passed);
    
  };

  const handleNotCompletedTodos = () => {
    setUncompleted(true)
    setCompleted(false)
    setFilterStatus(true)
    dispatch(filterNotCompleted(todos));
    current = todos.filter(item => item.completed === false)
    console.log(current);
    
  };
  
 

  return (
    <div className={styles.list__container}>
      <div className={styles.filter}>
        <button onClick={handleCompletedTodos}>Выполненные</button>
        <button onClick={handleNotCompletedTodos}>Текущие</button>
      </div>
      <ul className={styles.list}>
        {!filterStatus ? todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        )) : null
        
        }

        {
            completed ? passed.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            )) : null 
        }

        {
           uncompleted ? 
           current.map((todo) => (
             <Todo key={todo.id} todo={todo} />
           )) : null 
        }

        
       
      </ul>
    </div>
  );
};

