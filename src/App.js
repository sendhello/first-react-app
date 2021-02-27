import React from "react";
import './App.scss';
import {Country} from './components/country/Country'
import {Expo} from "./components/Expo";
import Footer from "./components/footer/Footer";

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
            showCards: true,
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

    // componentWillMount() {
    //     console.log('Run componentWillMount')
    // }
    //
    // componentDidMount() {
    //     console.log('Run componentDidMount')
    // }

    render() {
        // console.log(this.state)
        let countries = this.state.countries
        return (
            <div>
                {this.state.showCards ?
                    <div className="App" style={{display: 'block'}}>
                        <h1>{this.state.title}</h1>
                        <Expo />
                        {countries.map((item, index) => {
                            return <Country name={item.name} capital={item.capital} click={this.onClickHandler}
                                            key={index} showDescr={this.state.showDescription}/>  // нужно передавать уникальный key
                        })}
                    </div>
                    : null
                }
                <button onClick={this.showCardsHandler}>SHOW/HIDE</button>
                <button onClick={this.showDescriptionHandler}>DESCRIPTION</button>

                <Footer />
            </div>
        )
    }
}

export default App;
