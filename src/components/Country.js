import React from "react";

export const Country = ({name, capital, click}) => {
    const style = {
        textAlign: 'center',
        width: '200px',
        height: '200px',
        padding: '10px',
        color: 'gray',
        fontWeight: '500',
        border: 'red 1px solid',
        display: 'inline-block',
        margin: '0 5px'
    }

    return (
        <div style={style}>
            <h2 onClick={() => click(name)}>Страна: {name}</h2>
            <h3>Столица: {capital}</h3>
        </div>
    )
}