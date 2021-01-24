import React from "react";
import './App.css';
import {Country} from './components/Country'

class App extends React.Component {
    render() {
        const style = {
            textAlign: 'center',
            color: '#ff0000',
            fontWeight: '500',
            borderBottom: '#f00 1px solid'
        }

        return (
            <div className="App" style={style}>
                <h1>Hello React!!!</h1>
                <div style={{color: '#00f', border: 'none'}}>
                    <Country/>
                </div>
            </div>
        )
    }
}

export default App;
