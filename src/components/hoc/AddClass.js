import React from "react";

const addClass = (Component, className) => {
    return (props) => {
        return (
            <div className={className}>
                <Component />
            </div>
        )
    }
}

export default addClass
