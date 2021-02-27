import React from "react";
import './App.css';
import {Country} from './components/Country'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                {name: 'Россия', capital: 'Москва'},
                {name: 'США', capital: 'Вашингтон'},
                {name: 'Канада', capital: 'Октава'},
                {name: 'Кипр', capital: 'Кипр'},
                {name: 'Австралия', capital: 'Канберра'}
            ],
            title: 'Города',
            number: ''
        }
    }

    inputHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            title: event.target.value
        })
    }

    optionHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    onClickHandler(x){
        this.setState({title: x})
    }

    onClickHandler2 = (title) => {
        this.setState({title})
    }

    render() {
        console.log(this.state)
        let countries = this.state.countries
        let click = this.onClickHandler.bind(this)  // Для пересылки в другой объект надо биндить к методу сам объект

        return (
            <div>
                <div className="App" style={{display: 'block'}}>
                    <h1>{this.state.title}</h1>
                    <Country name={countries[0].name} capital={countries[0].capital} click={click} />
                    <Country name={countries[1].name} capital={countries[1].capital} click={click} />
                    <Country name={countries[2].name} capital={countries[2].capital} click={click} />
                    <Country name={countries[3].name} capital={countries[3].capital} click={click} />
                    <Country name={countries[4].name} capital={countries[4].capital} click={this.onClickHandler2} />
                </div>
                <div>
                    <select onChange={() => this.onClickHandler('qqq')}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div><button onClick={() => this.onClickHandler('onClick')}>RUN</button></div>
                <input type='text' onChange={this.inputHandler} />
            </div>
        )
    }
}

export default App;
