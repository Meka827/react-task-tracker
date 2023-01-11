import { useState } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
// import Footer from "./components/Footer";
// import About from "./About";

//NOTES==========
//states get passed down
//actions get passed up

function App() {
  const [showAddTask, setShowAddTaks] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 7th at 2:30pm',
        reminder: false
    },
]);

  //==============Add Tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  // =================Delete Tasks
  const deleteEvent = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //==============Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        console.log(task.reminder, !task.reminder)
        return {...task, reminder: !task.reminder}
      } else {
        return task
      }
    }
    ))
    
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTaks(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteEvent} onToggle={toggleReminder}/>) : ("No Events")}
      {/* <Footer /> */}
    </div>
  );
}






//============CLASS EXAMPLE==========
//needs to import react
// class App extends React.Component {
//   render() {
//     return <h1>Hello from Class</h1>
//   }
// }

export default App;
