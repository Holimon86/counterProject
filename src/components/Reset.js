import React from 'react'

const Reset = (props) => {
    const { reset } = props

    return (
        <div>
            <button onClick = {reset}>Void</button>
        </div>
    )
}

export default Reset