import React from 'react'

type serviceProps = {
    title: string,
    text: string
}


const service = (props: serviceProps) => {
    return (
        <div className="card shadow">
            <h5 className="card-header" style={{"backgroundColor": "#e1ede7"}} >{props.title}</h5>
            <div className="card-body ">
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default service;