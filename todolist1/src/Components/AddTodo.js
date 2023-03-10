import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Enter your favourite fast food"
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
      </form>
    </>
  );
};

export default AddTodo;
