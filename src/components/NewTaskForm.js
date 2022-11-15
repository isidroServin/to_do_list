import React from 'react';
// import { useEffect, useState } from "react";

function NewTaskForm(props) {
    const bodyStyle = { 
        backgroundColor : "#C5DfDC",
        margin: "0.5rem"
    };
    const buttonStyle = { 
        backgroundColor : "#F2C2C2",
        margin: "0.5rem"
    };
    
    return (
        <div  style={bodyStyle} className="card">
            <div className="card-body">
                <label htmlFor="taskDescription" >Enter task text here:</label>
                <input value={props.newTaskDescription} onChange={props.eventHandler} placeholder="i.e. Buy milk " name="taskDescription" type="text" className="form-control form-control-sm"></input> &nbsp;
                <button className="btn" onClick={ () => { props.addTask(props.newTaskDescription)}} style={buttonStyle} >Add task</button>
            </div>
        </div>
    );
}

export default NewTaskForm;