import React from 'react'
import Style from "./Contact.module.css"
import Links from '../links/Links'
const Contact = () => {
  return (
    <>
    <div className={Style.container}>
    <div className={Style.head}>
        <h1>Contact</h1>
    </div>
    <div className={Style.parah}>
        <p>
        I am currently seeking employment, so if you have a job or project offer, or if you need more information, please do not hesitate to contact me.
        </p>
    </div>
    <div className={Style.conBtn}>
        <button>Contact</button>
    </div>
    <div className={Style.links}>
    <Links link="https://github.com/MHassaanQureshi" logo="images/github-sign (1).png"/>
    <Links link="https://www.linkedin.com/in/muhammad-hassaan-qureshi-2202a9257/" logo="images/linkedin (1).png"/>
    <Links link="https://www.facebook.com/hassaan.haroon.568?mibextid=ZbWKwL" logo="images/facebook.png"/>
    <Links link="https://www.instagram.com/muhammad_.hassaan_?igsh=MXFsOHZkNTFlMDd3ZQ==" logo="images/instagram.png"/>
    </div>

    </div>
    </>
  )
}

export default Contact