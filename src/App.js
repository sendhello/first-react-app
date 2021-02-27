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
            number: '',
            showCards: false,
            showDescription: false
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

    showDescriptionHandler = () => {
        this.setState({showDescription: !this.state.showDescription})
    }

    showCardsHandler = () => {
        this.setState({showCards: !this.state.showCards})
    }

    render() {
        console.log(this.state)
        let countries = this.state.countries
        return (
            <div>
                {this.state.showCards ?
                    <div className="App" style={{display: 'block'}}>
                        <h1>{this.state.title}</h1>
                        {countries.map((item, index) => {
                            return <Country name={item.name} capital={item.capital} click={this.onClickHandler}
                                            key={index} showDescr={this.state.showDescription}/>  // нужно передавать уникальный key
                        })}
                    </div>
                    : null
                }
                <button onClick={this.showCardsHandler}>SHOW/HIDE</button>
                <button onClick={this.showDescriptionHandler}>DESCRIPTION</button>
            </div>
        )
    }
}

export default App;
