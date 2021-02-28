import React from "react";
import './App.scss';
import {Country} from './components/country/Country'
import {Expo} from "./components/Expo";
import Footer from "./components/footer/Footer";
import {HookContext} from "./context/HookContext";

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
            showDescription: false,
            expoTitle: 'This is ExpoTitle'
        }
        this.headRef = React.createRef()
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

    componentDidMount() {
        console.log('Run componentDidMount')
        console.log('headRef:')
        console.log(this.headRef.current)
    }

    render() {
        // console.log(this.state)
        let countries = this.state.countries
        return (
            <HookContext.Provider value={{state: this.state}}>
            <div>
                {this.state.showCards ?
                    <div className="App" style={{display: 'block'}}>
                        <h1 ref={this.headRef}>{this.state.title}</h1>
                        <Expo/>
                        {countries.map((item, index) => {
                            return <Country name={item.name} capital={item.capital} click={this.onClickHandler}
                                            key={index} showDescr={this.state.showDescription}/>  // нужно передавать уникальный key
                        })}
                    </div>
                    : null
                }
                <button onClick={this.showCardsHandler}>SHOW/HIDE</button>
                <button onClick={this.showDescriptionHandler}>DESCRIPTION</button>

                <Footer/>
            </div>
            </HookContext.Provider>
        )
    }
}

export default App;
