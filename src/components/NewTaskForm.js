

function NewTaskForm({
  setSlectedcat,
  onTaskFormSubmit,
  userInput,
  setUserInput,
  selectCategory
}) {

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=> setSlectedcat(e.target.value)}>
          {selectCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
