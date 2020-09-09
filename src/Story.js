import React from 'react'
import "./Story.css"
import { Avatar } from "@material-ui/core";


function Story({ img, profileSrc, title }) {

  const myStyle = {
    backgroundImage: `url(${img})`, color: 'white'
  }

  return (



    <div style={myStyle} className="story" >


      <Avatar className="story__avatar" src={profileSrc} alt="S" />
      <h4>{title}</h4>
    </div >
  )
}

export default Story
