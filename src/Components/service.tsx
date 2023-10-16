import React from 'react'

type serviceProps = {
    title: string,
    text: string
}


const service = (props: serviceProps) => {
    return (
        <div className="card w-75">
            <h5 className="card-header" style={{backgroundColor: "#98CBB4"}}>{props.title}</h5>
            <div className="card-body third-color">
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default service;