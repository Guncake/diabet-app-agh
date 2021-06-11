import React from 'react'
import FormComp from './FormComp'
import AnswersComp from './AnswersComp'

import QUESTIONS from './consts/questions'

class Form extends React.Component {
    state = {
        questions: [],
        rendered: false,
        isFormFilled: true
    }

    addQuestion(q = []){
        const newQuestions = this.state.questions
        q.forEach(element => {
            newQuestions.push({
                id: Math.random(100000,999999).toString(),
                nr: (this.state.questions.length + 1).toString(),
                q: element,
                ans: ''
            })
        });

    }

    changeAnswer(id, ans){
        const index = this.state.questions.findIndex(x => x.id === id)
        const newQuestions = this.state.questions
        newQuestions[index].ans = ans
        this.setState({ questions: newQuestions})
        console.log(`${id} ++ ${ans}`)
    }

    buttonPressed() {
        const index = this.state.questions.findIndex(x => x.ans === '')
        if (index === -1){
            console.log("wysłano")
            this.setState({ isFormFilled: true})
            this.props.gotoResults(this.state.questions)
        }
        else{
            console.log("NIE")
            this.setState({ isFormFilled: false})           
        }
    }

    render() {
        if(!this.state.rendered){
            this.addQuestion(QUESTIONS)
            this.state.rendered = true
        }


        const form_elements = this.state.questions.map(e => {
            return <div><FormComp element = {e} formClicked={this.changeAnswer.bind(this)} /><br></br></div>
        })

        // const ans_elements = this.state.questions.map(e => {
        //     return <ul className="smallText"><AnswersComp element = {e} /></ul>
        // })

        return(
            <div className="App-header" key="elo">
                {form_elements}
                <p>
                    <br />
                </p>
                {/* {ans_elements} */}
                <button className="button" onClick = {this.buttonPressed.bind(this)}>Wyniki</button>
                <p className="redtext">
                    {this.state.isFormFilled ? '' : 'Wypełnij wszystkie pola formularza'}
                </p>
                <p><br /></p>
            </div>
        )
    }
}
export default Form