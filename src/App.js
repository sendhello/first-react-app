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
                {name: 'Австралия', capital: 'Канберра'},
                {name: 'Германия', capital: 'Бонн'}
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
            title: 'option ' + event.target.value
        })
    }

    onClickHandler = (title) => {
        this.setState({title})
    }

    render() {
        console.log(this.state)
        let countries = this.state.countries
        return (
            <div>
                <div className="App" style={{display: 'block'}}>
                    <h1>{this.state.title}</h1>
                    {countries.map((item, index) => {
                        return <Country name={item.name} capital={item.capital} click={this.onClickHandler} key={index}/>  // нужно передавать уникальный key
                    })}
                </div>
                <div>
                    <select onChange={this.optionHandler}>
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
