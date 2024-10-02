import React from 'react'
import Style from "./Links.module.css"
const Links = ({link,logo}) => {
  return (
    <div className={Style.container}>
        <a href={link}><img src={logo} alt=""/></a>
    </div>
  )
}

export default Links