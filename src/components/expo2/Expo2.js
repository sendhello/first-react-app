import React, {useContext} from "react";
import {HookContext} from "../../context/HookContext";

export const Expo2 = () => {
    const {state} = useContext(HookContext)
    console.log('Expo2', state)

    return (
        <h1>{state.expoTitle}</h1>
    )
}