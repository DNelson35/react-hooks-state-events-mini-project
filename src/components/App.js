import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState('All')
  const [slectedcat, setSlectedcat] = useState('code')
  const [userInput, setUserInput] = useState('')
  // function handleDelete(task){
  //   const newTask = tasks.filter(currentTask =>
  //     (currentTask.text !== task.text ))

  //     setTask(newTask)
  // }

  function handleSubmit(e){
    e.preventDefault()
    setTask([...tasks, {text: userInput, category: slectedcat}])
    setUserInput('')
  }

  function handleDelete(text){
    const newTask = tasks.filter(currentTask => (currentTask.text !== text))
    setTask(newTask)
  }

  const newTaskList = tasks.filter(task => 
    (category === "All" || task.category === category)
  )

  const selectCategory = CATEGORIES.map(cat => (cat !== 'All') ? <option key={cat} value={cat}>{cat}</option> : null)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
       categories={CATEGORIES}
       onCatigoryClick={setCategory}
        curCatigory={category}
       />
      <NewTaskForm onTaskFormSubmit={handleSubmit}
       setSlectedcat={setSlectedcat}
       userInput={userInput}
       setUserInput={setUserInput}
       selectCategory={selectCategory}

        />
      <TaskList handleDelete={handleDelete} newTaskList={newTaskList}/>
    </div>
  );
}

export default App;
