import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component {
  state = {
    gender:""
  };

  handleChange=(e)=>{
      this.setState({
        gender: e.target.value
      })
  }

render() {
  return (
    <div>
       <form>
          <input type="radio" value="gej" id="male"
            onChange={this.handleChange} name="gender" />            
            <label for="male">Male</label>

          <input type="radio" value="cipa" id="female"
            onChange={this.handleChange} name="gender"/>            
            <label for="female">Female</label>
       </form>

       <p>You gender is: {this.state.gender}</p>      
       </div>
  );
}
}
export default App;
