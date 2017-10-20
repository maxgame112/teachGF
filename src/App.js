import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.component';
import Footer from './Components/Footer.component';

class App extends Component {

  constructor(){
    super();

    this.age = "200";
    this.state = {name: "Gift"};
  }
  getVal = () => {
    return "สอบ React";
  }

  changeName(name) {
    this.setState({name: name});
  }


  render() {
    var mmm = [
        <Header />,

    ];



    const myname = "Game";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <p> Hello, my name is {myname} </p>
        <p> calculator 5+5 = {5+5} </p>
        <p> reder with Function on component class: {this.getVal()} </p>
        {this.state.name}
        {this.age}
         {mmm}

        <Header changeName={this.changeName.bind(this)} gg={this.state.name} />
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
