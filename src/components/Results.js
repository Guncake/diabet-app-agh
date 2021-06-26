import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
import Dankmemes from './datavis';
import { throwStatement } from '@babel/types';

class Results extends React.Component{
    state ={
        percent: 0,
        dbURI: "mongodb+srv://nutella:nutella123@diabet-app-agh.ka7zl.mongodb.net/diabet-db?retryWrites=true&w=majority",
        rendered: false,
        ctrlqs:[],
        stats: {}
    }

    calculatePoints() {
        var points_total = 0
        let answers = [] 
        answers = this.props.answers
        answers.forEach(element => {
            points_total = points_total + element.q.weights[parseInt(element.ans, 10)]/18
        });
        this.state.percent = points_total
        console.log(points_total)
    }

    createPOSTobject() {
        let answers = this.props.answers
        let postobject = {
            pytanie1: answers[0].ans,
            pytanie2: answers[1].ans,
            pytanie3: answers[2].ans,
            pytanie4: answers[3].ans,
            pytanie5: answers[4].ans,
            pytanie6: answers[5].ans,
            pytanie7: answers[6].ans,
            pytanie8: answers[7].ans,
            pytanie9: answers[8].ans,
            pytanie10: answers[9].ans,
            pytanie11: answers[10].ans,
            pytanie12: answers[11].ans,
            percent: (this.state.percent * 100).toPrecision(4)
        }
        return postobject
    }

    render(){
        this.calculatePoints()
        console.log("heh1")
        if(!this.state.rendered){
            let postobject = this.createPOSTobject()
            axios.post(`https://diabet-app-agh-api.herokuapp.com/answers`, querystring.stringify(postobject), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then((response) => {console.log("udałosie")})
            .catch((err) => {console.log(err)})
            axios.get(`https://diabet-app-agh-api.herokuapp.com/answers?ctrlq2=${postobject.pytanie2}&ctrlq3=${postobject.pytanie3}`, { headers: {'Content-Type': 'application/x-www-form-urlencoded' }})
            .then((response) => {
                this.state.stats = response.data.stats; 
                this.state.ctrlqs = [postobject.pytanie2, postobject.pytanie3]; 
                this.setState({rendered: true})
            })
            .catch((err) => {console.log(err)})
            
            // this.state.rendered = true
            console.log("heh")
        }

        return (
            <div className="results-header" key="results">
                <div className="results">
                    <p>

                    </p>
                    <br />
                    <br />
                    <br />
                    <p>
                        {`${(this.state.percent * 100).toPrecision(4)}% - szacowana szansa na wystąpienie u Ciebie cukrzycy`}
                    </p>
                </div>
                {this.state.rendered?<Dankmemes data={this.state.stats}/>:''}
                <br />
                <p>
                    {`Średnie szacowane ryzyko cukrzycy u osób mieszkających ${this.state.ctrlqs[1]==='0'?'na wsi':'w mieście'}: ${(this.state.stats.ctrlq3)}`}
                </p>
            </div>
        )
    }
}
export default Results