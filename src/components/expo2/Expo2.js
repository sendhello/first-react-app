import React from "react";
import {MyContext} from '../../App'

export const Expo2 = () => {
    return (
        <MyContext.Consumer>
            {(value) => <h1>{value.title}</h1>}
        </MyContext.Consumer>
    )
}