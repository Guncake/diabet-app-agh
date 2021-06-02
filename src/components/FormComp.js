import React from 'react'

const FormComp = props => {
    return (
        <div className="center">
            <p>
            {props.element.q}
            </p>
            <form>
                <input type="radio" value="0" id="0" name={props.element.q} 
                onClick={() => props.formClicked(props.element.id, "0")} />
                <label for="0">0</label>

                <input type="radio" value="1" id="1" name={props.element.q}
                onClick={() => props.formClicked(props.element.id, "1")} />
                <label for="1">1</label>

                <input type="radio" value="2" id="2" name={props.element.q}
                onClick={() => props.formClicked(props.element.id, "2")} />
                <label for="2">2</label>
            </form>
        </div>
    )
}

export default FormComp