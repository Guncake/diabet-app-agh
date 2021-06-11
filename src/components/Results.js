import React from 'react'

class Results extends React.Component {
    state ={
        percent: 0
    }
    calculatePoints() {
        var points_total = 0
        let answers = [] 
        answers = this.props.answers
        answers.forEach(element => {
            if(element.q.nr === 1){
                points_total = points_total + element.ans?0.3:0.74
            }
            points_total = points_total + element.q.weights[parseInt(element.ans, 10)]/13.67
        });
        this.state.percent = points_total
        console.log(points_total)
    }

    render(){
        this.calculatePoints()
        return (
            <div className="App-header" key="results">
                <div className="center">
                    <p>
                        {`${(this.state.percent * 100).toPrecision(4)}%`}
                    </p>
                </div>
            </div>
        )
    }
}
export default Results