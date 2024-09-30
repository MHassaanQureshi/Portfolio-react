import React from 'react'
import Style from  "./Landing.module.css"
const Landing = () => {
  return (
    <>
    <div className={Style.container}>
        <div className={Style.container2}>
            <h1>M.Hassaan <span>Qureshi</span></h1>
            <h3>I Built things on the internet</h3>

        </div>
        <button><img src="/images/hero-arrow.png" alt="" /></button>
    </div>
    </>
  )
}

export default Landing