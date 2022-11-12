import React from 'react'

const bodyStyle = { 
    backgroundColor : "#C5DfDC",
    margin: "0.5rem"
};

function EmptyList() {
    return (
        <div  style={bodyStyle} className="card">
            <div className="card-body">
                <p align="center">Your list to do is empty! ✅</p>
            </div>
        </div>
    )
}

export default EmptyList
