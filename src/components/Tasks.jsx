import React from "react";
import Event from "./Event";


// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Meeting at School',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: 'Feb 7th at 2:30pm',
//         reminder: false
//     },
// ]

const Tasks = ({ tasks, onDelete , onToggle}) => {


    return (
        <>
        {tasks.map((task) => (<Event key={task.id} task={task} onDelete={() => onDelete(task.id)} onToggle={onToggle} />))}
        </>
    )
}

export default Tasks;