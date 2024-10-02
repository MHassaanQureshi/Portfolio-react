import Style from "./SkillsCard.module.css"

const SkillsCard = ({img,name,about}) => {
  return (
    <>
    <div className={Style.Skillcontainer}>
                <div className={Style.img}>
                    <img src={img} alt="" />
                </div>
                <div className={Style.head}>
                    <h2>{name}</h2>
                </div>
                <div className={Style.about}>
                    <p>{about}</p>
                </div>
            </div>

    </>
  )
}

export default SkillsCard