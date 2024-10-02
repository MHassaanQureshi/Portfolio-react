import Projects from "../projects/Projects"
import Style from "./Portfolio.module.css"
const Portfolio = () => {
  return (
    <>
    <div className={Style.container}>
        <div className={Style.head}>
            <h1>Portfolio</h1>
        </div>
        <div className={Style.projectcontainer}>
            <div className={Style.projectscard1}>
                <Projects img="images/exclusiveshop.png" name="Exclusive Shop" about="This eCommerce website, built with HTML, CSS, and JavaScript, offers a user-friendly interface with essential pages like Home, Contact, Login, and Signup. It provides easy navigation for desktop users, though the user profile dropdown is not available on mobile devices." link="https://exclusive-shop-web.vercel.app/"/>
                <Projects img="images/resume-generator.png" name="Resume generator" about="I developed a resume generator using HTML, CSS, and TypeScript that enables users to input their details and create a professional resume. The tool features dynamic form elements for skills, education, and experience, allowing easy customization and PDF export." link="https://hackathon-milestone-500.vercel.app/"/>
            </div>
            <div className={Style.projectscard1}>
                <Projects img="images/amazon.png" name="Amazon Clone" about="I created an Amazon clone featuring a landing page and login functionality using HTML, CSS, and JavaScript. The project showcases a clean design and user-friendly interface, simulating the initial steps of an eCommerce experience." link="https://amazon-clone-j3fv.vercel.app/"/>
                <Projects img="images/singer-portfolio.png" name="Singer Portfolio" about="I created a singer portfolio website using HTML, CSS, and JavaScript to showcase my music. It features a vibrant design with sections for my bio, discography, and upcoming events, providing an engaging platform for fans." link="https://singer-portfolio-kappa.vercel.app/"/>
            </div>
            <div className={Style.projectscard1}>
                <Projects img="images/dice-game.png" name="Dice Game" about="I developed a dice game using React that allows players to roll virtual dice and track scores. The game features a clean interface and responsive design, offering an engaging experience for users of all ages." link="https://dice-game-react-two.vercel.app/"/>
                <Projects img="images/weather.png" name="Weather app" about="I built a weather application using TypeScript that delivers real-time updates based on user input. It features an intuitive interface and utilizes APIs for accurate weather data." link="https://weather-app-neon-chi-32.vercel.app/"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio