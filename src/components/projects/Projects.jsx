
import Style from "./Projects.module.css"
const Projects = ({img,name,about,link}) => {
  return (
    <>
    <div className={Style.projectcontainer}>
                <div className={Style.img}>
                    <img src={img} alt="" />
                </div>
                <div className={Style.head}>
                    <h2>{name}</h2>
                </div>
                <div className={Style.about}>
                    <p>{about}
                    </p>
                </div>
                <div className={Style.Link}>
                    <button><a href={link}>Visit</a></button>
                </div>
            </div>
    </>
  )
}

export default Projects