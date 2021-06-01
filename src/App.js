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
    <div className = "App-header">
       <form>
          <input type="radio" value="1" id="male"
            onChange={this.handleChange} name="gender" />            
            <label for="male">Male</label>

          <input type="radio" value="2" id="female"
            onChange={this.handleChange} name="gender"/>            
            <label for="female">Female</label>
       </form>

       <p>You gender is: {parseInt(this.state.gender) + 2}</p>      
    </div>
  );
}
}
export default App;
