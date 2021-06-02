import React from 'react'

const AnswersComp = props => {
    return (
        <li>
            Twoja odpowiedź na pytanie {props.element.nr} to: {props.element.ans != "-1" ? props.element.ans : "nie udzielono" }
        </li>
    )
}

export default AnswersComp