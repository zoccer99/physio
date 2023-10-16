import React from 'react'

type contactProps = {
  name: string,
  address: string,
  telephone: string
  email: string,
  imgSrc: any,
  text: string,
  subtext?: string
}

const Contact = (props: contactProps) => {
  return (
    <>
    <div className="card mb-3 maxwidth540 ">
  <div className="row g-0">
    <div className="col-md-4 d-flex align-items-center">
      <img src={props.imgSrc} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title display-5">{props.name}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text"><small className="text-muted">{props.subtext}</small></p>
      </div>
    </div>
  </div>
</div>
    <div>contact</div>
    <div>{props.email}</div>
    </>
  )
}

export default Contact;