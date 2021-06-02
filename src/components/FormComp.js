import React from 'react'

const FormComp = props => {
    return (
        <div className="center" key={props.element.id}>
            <p>
            {props.element.q}
            </p>
            <input type="text" id="0"  
                onChange={(e) => props.formClicked(props.element.id, e.target.value)} />
        </div>
    )
}

export default FormComp