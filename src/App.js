import './App.css';
import React,{Component} from 'react';
import Form from './components/Form.js'
import Results from './components/Results'
// import './fonts/Montserrat-Light.ttf';
// import './fonts/Montserrat-SemiBold.ttf'
// import './fonts/Montserrat-Black.ttf'

import Navbar from './components/Navbar';
import {BiInfoCircle} from 'react-icons/bi'
import {useState} from 'react'


class App extends React.Component{
  
  state = {
    page: 0,
    received_answers: [],
    showNav: false,
  }

  toResults = (questions=[]) => {
    this.setState({page: 1,
                  received_answers: questions,
                  showNav:false})
  }

  render(){
    if(this.state.page === 1){
      return(
        <div>
          <Results answers = {this.state.received_answers}/>
        </div>
      )
    }
    else{
      return (


          <div className="bkg">
            <header><BiInfoCircle onClick={() => this.setState({showNav : !this.state.showNav})} /></header>
            <h1 className = "center">Cukrzycowa ankieta</h1>
            <p className = "center">
              Udziel odpowiedzi na pytania aby dowiedzieć się jakie masz szacowane ryzyko wystąpienia cukrzycy
              <br />
            </p>
            <Navbar show={this.state.showNav}/>
            <Form gotoResults={this.toResults.bind(this)}/>

          </div>

      )
    }
    
  }
}
export default App;