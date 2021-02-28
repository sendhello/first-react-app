import React from "react";
import classes from './country.module.scss'
import PropTypes from 'prop-types'

export const Country = ({name, capital, click, showDescr}) => {
    if (showDescr) {
        return (
            <div className = {classes.country}>
                <h2 onClick={() => click(name)}>Страна: {name}</h2>
                <h3>Столица: {capital}</h3>
                <h3>Описание:</h3>
                <p>Тескт описания</p>
            </div>
        )
    } else {
        return (
            <div className = {classes.country}>
                <h2 onClick={() => click(name)}>Страна: {name}</h2>
                <h3>Столица: {capital}</h3>
            </div>
        )
    }
}

Country.propTypes = {
    name: PropTypes.string,
    capital: PropTypes.string,
    click: PropTypes.func,
    showDescr: PropTypes.bool
}
