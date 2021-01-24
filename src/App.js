import React from "react";
import './App.css';
import {Country} from './components/Country'

class App extends React.Component {
    state = {
        countries: [
            {name: 'Россия', capital: 'Москва'},
            {name: 'США', capital: 'Вашингтон'},
            {name: 'Канада', capital: 'Октава'},
            {name: 'Кипр', capital: 'Кипр'},
            {name: 'Австралия', capital: 'Канберра'}
        ]
    }

    render() {
        console.log(this.state)
        let countries = this.state.countries

        return (
            <div className="App" style={{display: 'block'}}>
                <h1>Hello React!!!</h1>
                <Country name={countries[0].name} capital={countries[0].capital}/>
                <Country name={countries[1].name} capital={countries[1].capital}/>
                <Country name={countries[2].name} capital={countries[2].capital}/>
                <Country name={countries[3].name} capital={countries[3].capital}/>
                <Country name={countries[4].name} capital={countries[4].capital}/>
            </div>
        )
    }
}

export default App;
