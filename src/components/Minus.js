import React from 'react'

const Minus = (props) => {
    const {countDown} = props

    return (
        <div>
            <button onClick = {countDown}>Decrease Increments</button>
        </div>
    )
}

export default Minus