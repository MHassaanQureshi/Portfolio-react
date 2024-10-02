import SkillsCard from "../skills-card/SkillsCard"
import Style from "./Skills.module.css"
const Skills = () => {
  return (
   <>
     <div className={Style.main}>
        <div className={Style.Skillshead}>
        <h1 >Skills</h1>
        </div>
        <div className={Style.cardsContainer}>
        <div className={Style.cards1}>
        <SkillsCard img="images/html.png" name="Html" about="I have strong HTML5 skills, demonstrated through projects like a portfolio, eCommerce site, and resume generator. My work focuses on clean, semantic code and responsive design."/>
        <SkillsCard img="images/css-3.png" name="CSS" about="I have strong CSS skills, demonstrated through projects like my portfolio and an eCommerce site. I focus on responsive design using frameworks like Bootstrap and Tailwind."/>
        </div>
        <div className={Style.cards1}>
        <SkillsCard img="images/java-script.png" name="JavaScript" about="I have solid JavaScript skills, showcased in projects like an interactive portfolio and an e-commerce. I excel in creating dynamic user experiences and efficient functionality."/>
        <SkillsCard img="images/typescript.png" name="TypeScript" about="I have strong TypeScript skills, demonstrated through projects like a resume generator and a dynamic web application. I focus on building robust, type-safe code that enhances maintainability and scalability."/>
        </div>
        <div className={Style.cards1}>
        <SkillsCard img="images/bootstrap.png" name="BootStrap" about="I have strong Bootstrap skills, demonstrated through various projects. I excel in creating responsive, mobile-first designs that enhance user experience. My focus is on utilizing Bootstrap's components to streamline development."/>
        <SkillsCard img="images/python.png" name="Python" about="I have solid Python skills, with experience in Tkinter and Pygame. I created an image viewer, focusing on building user-friendly applications and enhancing my problem-solving abilities."/>
        </div>
        <div className={Style.cards1}>
        <SkillsCard img="images/physics.png" name="React-js" about="I am learning React, demonstrated through my portfolio website built with the framework. I focus on creating dynamic, interactive user interfaces and improving my component-based development skills."/>
        <SkillsCard img="images/nextjs-icon.png" name="next-js" about="I am learning Next.js and exploring its features for building server-rendered applications. I focus on understanding dynamic routing and API integration to enhance my web development skills."/>
        </div>
        <div className={Style.cards1}>
        <SkillsCard img="images/Tailwind CSS.png" name="Tailwind-css" about="I have strong Tailwind CSS skills, demonstrated through various projects. I excel in creating responsive designs quickly with utility-first classes, focusing on maintainability and customizability."/>
        <SkillsCard img="images/github-sign.png" name="Github" about="I have solid GitHub skills, demonstrated through effective version control and collaboration on various projects. I focus on maintaining clean commit histories and utilizing branches for efficient workflows."/>
        </div>
        </div>
        </div>
   </>
  )
}

export default Skills