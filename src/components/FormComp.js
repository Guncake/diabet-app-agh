import React from 'react'

const FormComp = props => {
    return (
        <div className="left" key={props.element.id}>

            <form onChange={(e) => props.formClicked(props.element.id, e.target.value)}>
                {`pytanie ${props.element.nr}: ${props.element.q.text}`}
                <br></br>
                <input type="radio" id="0" name={props.element.nr} value="0"></input>
                <label for="0">{props.element.q.possible_ans[0]}</label>
                <br></br>
                <input type="radio" id ="1" name={props.element.nr} value="1" ></input>
                <label for="1">{props.element.q.possible_ans[1]}</label>
                {props.element.q.third_input?<div><input type="radio" id="2" name={props.element.nr} value="2"></input><label for="2">{props.element.q.possible_ans[2]}</label></div>:''}
                {props.element.q.fourth_input?<div><input type="radio" id="3" name={props.element.nr} value="3"></input><label for="3">{props.element.q.possible_ans[3]}</label></div>:''}
            </form>

        </div>
    )
}

export default FormComp