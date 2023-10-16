import React from 'react'


type contact2Props = {
    heading: string,
    headingSubText?: string,
    name: string,
    function: string,
    description: string,
    picture: any

}

export const Contact2 = (props: contact2Props) => {
    return (

            <div className="col-md-6 col-lg-4 item">
                <div className="box box-color"><img className="rounded-circle" src={props.picture} />
                    <h3 className="name">{props.name}</h3>
                    <p className="title">{props.function}</p>
                    <p className="description">{props.description}</p>
                    <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                </div>
            </div>
    )
}
