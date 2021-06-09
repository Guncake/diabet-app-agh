import './App.css';
import React,{Component} from 'react';
import Form from './components/Form.js'
import Results from './components/Results'



class App extends React.Component{
  
  state = {
    toResults: false
  }

  toResults = () => {
    this.setState({toResults: true})
    console.log("udałosie")
  }

  render(){
    if(this.state.toResults){
      return(
        <div>
          <Results />
        </div>
      )
    }
    else{
      return (
        <div className="bkg">
          <h1 className = "center">Cukrzycowa ankieta</h1>
          <p className = "center">
            Odpowiedz na pytania i zobacz se czy cukrzyce masz elo
            <br />
          </p>
          <Form gotoResults={this.toResults.bind(this)}/>
        </div>
      )
    }
    
  }
}
export default App;