import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
  <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
    <div className="cardHeading flex-sb">
      <span style={{textTransform : "uppercase", fontWeight: "bold"}} className='color-grey'>{id}</span>
      <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
        <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="UserImage" />
        <div className="showStatus"></div>
      </div>
    </div>
    <div className="cardTitle" style={{fontWeight : 200}} >
      <p style={{fontWeight: "bold"}}>{title}</p>
    </div>
    <div className="cardTags">
    <div className="tags color-grey"> ... </div>
      {
        tag?.map((elem, index) => {
          return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
        })
      }
    </div>
  </div>
  )
}

export default Card;