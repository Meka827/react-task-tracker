import React from 'react';
import { FaTimes } from 'react-icons/fa';
// for close out icons

const Event = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`event ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer'  }} onClick={onDelete} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Event;
