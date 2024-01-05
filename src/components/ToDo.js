import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



const ToDo = ({ text , updateMode , deleteToDo }) => {

  return (

    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <FaEdit className="icon-e" onClick={updateMode} />
        <MdDelete className="icon-d" onClick={deleteToDo} />
      </div>
    </div>

  )
}

export default ToDo; 