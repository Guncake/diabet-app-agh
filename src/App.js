import './App.css';
import React,{Component} from 'react';
import Form from './components/Form.js'
import Results from './components/Results'
// import './fonts/Montserrat-Light.ttf';
// import './fonts/Montserrat-SemiBold.ttf'
// import './fonts/Montserrat-Black.ttf'




class App extends React.Component{
  
  state = {
    toResults: false,
    received_answers: []
  }

  toResults = (questions=[]) => {
    this.setState({toResults: true,
                  received_answers: questions})
  }

  render(){
    if(this.state.toResults){
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
            Udziel odpowiedzi na pytania aby dowiedzieć się jakie masz ryzyko śmierci z powodu cukrzycy w ciągu najbliższych 5 lat
            <br />
          </p>
          <Form gotoResults={this.toResults.bind(this)}/>
        </div>
      )
    }
    
  }
}
export default App;