import React from 'react'

const AnswersComp = props => {
    return (
        <li key={props.element.id}>
            Twoja odpowiedź na pytanie {props.element.nr} to: {props.element.ans !== '' ? props.element.ans : "nie udzielono" }
        </li>
    )
}

export default AnswersComp