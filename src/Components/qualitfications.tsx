import React from 'react'
import { FileMedical } from 'react-bootstrap-icons'

type QualificationsTypes = {
  qualificationsArr: string[]
}

export const Qualifications = (props: QualificationsTypes) => {
  const qualificationsElements = props.qualificationsArr.map((qualification: string) =>
    <li className="mb-3 d-flex align-items-center justify-content-start"><FileMedical className='mx-3' />{qualification}</li>
  )

  return (
    <div className='item'>

      <div className=" box shadow mb-4 qualificationCard">
        <div className="p-5">
          <h4 className="mb-4">Meine Qualifikationen</h4>
          <ul className="list-unstyled list pl-5">
            {qualificationsElements}
          </ul>
        </div>
      </div>
    </div>
  )
}
