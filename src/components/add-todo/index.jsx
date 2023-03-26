import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todo";

import styles from "./index.module.css";



export const AddTodo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };


  return (
    <div className="wrapper">
       <button className={styles.addButton} onClick={handleAddTodo}>
        Добавить задачу
      </button>
      <input type="text" value={value} onChange={onInputChange} />
     
    </div>
  );
};
