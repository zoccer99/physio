import React from 'react'

type welcomeTextProps = {
    heading: string,
    smallText: string,
    lead: string
}

export const WelcomeText = (props: welcomeTextProps) => {
    return (
        <div className='box-color'>
            <h3 className='d-flex flex-column'>
                {props.heading}
                <small className="text-muted">{props.smallText}</small>
            </h3>
                <p className="lead">
                    {props.lead}
                </p>
        </div>
    )
}
