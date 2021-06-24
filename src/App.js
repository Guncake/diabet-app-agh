import './App.css';
import React,{Component} from 'react';
import Form from './components/Form.js'
import Results from './components/Results'
// import './fonts/Montserrat-Light.ttf';
// import './fonts/Montserrat-SemiBold.ttf'
// import './fonts/Montserrat-Black.ttf'




class App extends React.Component{
  
  state = {
    page: 0,
    received_answers: []
  }

  toResults = (questions=[]) => {
    this.setState({page: 1,
                  received_answers: questions})
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
          <h1 className = "center">Cukrzycowa ankieta</h1>
          <p className = "center">
            Udziel odpowiedzi na pytania aby dowiedzieć się jakie masz szacowane ryzyko wystąpienia cukrzycy
            <br />
          </p>
          <Form gotoResults={this.toResults.bind(this)}/>
        </div>
      )
    }
    
  }
}
export default App;