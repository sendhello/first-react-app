import React from "react";

export const Country = () => {
    let a = 56
    let arr = [1, 2, 3, 4]

    return (
        <div>
            <h2>Test view computation</h2>
            <div style={{fontSize: '10px', color: 'gray'}}>
                <h3>Number 1: 12 + 65 = {12 + 65}</h3>
                <h3>Number 3: Math() = {Math.round(Math.random() * 100 / 3)}</h3>
                <h3>Number 3: a = {a}</h3>
                <h3>Number 4: arr[2] = {arr[2]}</h3>
            </div>
        </div>
    )
}