import { useState } from "react";


const  ToDoList = () => {

  const [task, setTask] = useState("");//  State to hold the text entered in the input box
  const [tasks, setTasks] = useState([]); // State to hold the list of all tasks

  // Function to add a new task
  const addTask = () => {
    if (task.trim() === "") return; // If the input is empty, do nothing (avoid adding blank tasks)

    // Add the new task to the existing list using the spread operator (...)
    // This creates a new array (React state should not be changed directly)
    setTasks([...tasks, task]);     // create new array with previous tasks + new one
    setTask("");                  // Clear the input box after adding
  };

   // Delete a task
  const deleteTask = (itemtoDelete) => {
    const newTasks = tasks.filter((element) => element!== itemtoDelete);// _ → means the current element (we’re not using it, so we name it _ as a placeholder).
    setTasks(newTasks);
  };


  return (
    <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
        <br/>
        <br/>
        <br/>

       
        <ul>
        {/* {tasks.length === 0 && <p>No tasks yet!</p>} */}
        {tasks.map((item, index) => (
          <li key={index}>{item}
          <button onClick={() => deleteTask(item)}>Delete</button>{/* Why we need to pass item

When the Delete button is clicked, we want to tell React which task to delete.

That’s why we pass it as an argument: */}
          </li>
        ))}
      </ul>
        </div>
  )
}
export default ToDoList;





/* 🧩 Step 1 — You have a variable in React
const [task, setTask] = useState("");


This means:

task = the text you type in the input box (starts empty "")

setTask() = function to update that text

🧩 Step 2 — You connect this variable to the input
<input value={task} />


Here, value={task} means:
👉 “Show whatever is inside the task variable inside the text box.”

So if:

task = "Learn React"


then the textbox will display:

Learn React

🧩 Step 3 — What happens when you type?

Typing normally would change the textbox on the screen,
but React needs to update the variable too.The variable I’m talking about is the state variable —
👉 task
That’s why we use onChange:

onChange={(e) => setTask(e.target.value)}


So every time you type:

React takes what you typed (e.target.value)

Saves it into the variable task using setTask(...)

Because value={task}, the textbox shows the latest value

🔁 The full loop looks like this:
You type in input → onChange runs → setTask updates state → 
React re-renders → input shows new task value (value={task}) */





// delete explaination

/* Step-by-step — What happens when you click “Delete”

Let’s say your list looks like this:

tasks = ["Learn React", "Buy Milk", "Go Running"]


React will render three list items with three buttons:
1️⃣ “Delete” button next to "Learn React"
2️⃣ “Delete” button next to "Buy Milk"
3️⃣ “Delete” button next to "Go Running"

🖱️ Now, when you click the second Delete button

This line runs:

onClick={() => deleteTask(item)}


At that moment:

item = "Buy Milk"

So it actually calls:

deleteTask("Buy Milk")

🧩 Inside the deleteTask function
const deleteTask = (taskToDelete) => {
  const newTasks = tasks.filter(task => task !== taskToDelete);
  setTasks(newTasks);
};


Here:

taskToDelete = "Buy Milk"

tasks.filter(task => task !== taskToDelete)
means “keep everything except the one that equals 'Buy Milk'”.

So it creates:

newTasks = ["Learn React", "Go Running"]


Then:

setTasks(newTasks);


👉 React updates the UI to show only the remaining two tasks. */
