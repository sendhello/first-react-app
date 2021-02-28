import React from "react";
import {Auxillary} from "./hoc/Auxillary";
import {Expo2} from "./expo2/Expo2";

export const Expo = () => {
    return(
        <Auxillary>
            <Expo2 />

            <h1>Fragment H1</h1>
            <h2>Fragment H2</h2>
        </Auxillary>
    )
}