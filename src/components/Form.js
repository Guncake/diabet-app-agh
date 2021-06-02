import React from 'react'
import FormComp from './FormComp'
import AnswersComp from './AnswersComp'

class Form extends React.Component {
    state = {
        questions: [
        ],
        rendered: false
    }

    addQuestion(q = []){
        const newQuestions = this.state.questions
        q.forEach(element => {
            newQuestions.push({
                id: Math.random(10000,99999).toString(),
                nr: (this.state.questions.length + 1).toString(),
                q: element,
                ans: "-1"
            })
        });

    }

    changeAnswer(id, ans){
        const index = this.state.questions.findIndex(x => x.id === id)
        const newQuestions = this.state.questions
        newQuestions[index].ans = ans

        this.setState({ questions: newQuestions})
    }


    render() {
        if(!this.state.rendered){
            this.addQuestion(["czy masz cukrzyce?",
                            "czy umierasz?",
                            "monke?"])
            this.state.rendered = true
        }


        const form_elements = this.state.questions.map(e => {
            return <FormComp element = {e} formClicked={this.changeAnswer.bind(this)} />
        })

        const ans_elements = this.state.questions.map(e => {
            return <ul><AnswersComp element = {e} /></ul>
        })

        return(
            <div className="App-header">
                {form_elements}
                <p>
                    <br /><br />
                </p>
                {ans_elements}
            </div>
        )
    }
}
export default Form