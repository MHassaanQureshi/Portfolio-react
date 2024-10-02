import Style from "./About.module.css"
const About = () => {
  return (
    <>
    <div className={Style.main}>
    <div className={Style.container}>
        <h1 className={Style.heading}>About Me</h1>
        <div className={Style.About}>
        <div className={Style.profile}>
            <img src="/images/WhatsApp Image 2024-09-30 at 16.39.22_98f3a8a5.jpg" alt="" />
        </div >
        <div className={Style.container2}>
            <div className={Style.intro}>
                <p>I’m a dedicated learner, passionate about
                acquiring new skills and exploring modern
                technologies.I recently started my journey into
                front-end development and am eager to create
                user-friendly websites.My goal is to become a
                Full Stack Developer, and I’m currently seeking
                opportunities to grow and improve my front-end
                development skills.</p>
            </div>
            <div className={Style.lists}>
                <ul className={Style.list1}>
                    <li>Email:  hassaanharoon03@gmail.com</li>
                    <li>Location:   Karachi,pakistan</li>
                    <li>Age:    21</li>
                </ul>
                <ul className={Style.list2}>
                    <li>Nationality: Pakistan</li>
                    <li>Education: Federal urdu University, Karachi</li>
                    <li>Dgree: Bachelors in Computer Science </li>
                </ul>
            </div>
        </div>
        </div>
      </div>  
    </div>
   
    </>
  )
}

export default About