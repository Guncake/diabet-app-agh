import './App.css';
import React,{Component} from 'react';
import  Form from './components/Form.js'

function App(){
  return (
  <div className="bkg">
    <h1 className = "center">Cukrzycowa ankieta</h1>
    <p className = "center">
      Odpowiedz na pytania i zobacz se czy cukrzyce masz elo
      <br />
    </p>
    <Form />
  </div>
  
  )
}
export default App;
