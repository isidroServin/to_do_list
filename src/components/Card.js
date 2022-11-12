import React from 'react';

const bodyStyle = { 
                    backgroundColor : "#C5DfDC",
                    margin: "0.5rem"
                };

function Card(props) {
    return (
        <div  style={bodyStyle} className="card">
            <div className="card-body">
                <input id={props.taskInfo} type="checkbox" className="form-input-check" onClick={props.doIt}></input> &nbsp;
                <label > {props.taskDescription}
                </label>
            </div>
        </div>
    );
}

export default Card;
