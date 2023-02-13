import * as React from "react"
import {AnimationOnScroll} from "react-animation-on-scroll"
import SourceButton from "../components/source-button"
import {
    projectCard, 
    projectImg, 
    projectTitle, 
    projectTech, 
    projectSource, 
    projectDescription, 
    left, 
    right, 
    rightTop, 
    rightBottom
} from "../css/project-card.module.css"

const ProjectCard = ({projectName, projectImgSrc, tech, source, children}) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={50} duration={0.25}>
            <div className={projectCard}>
                <div className={left}>
                    <img className={projectImg} src={"/img/" + projectImgSrc} alt=""></img>
                </div>
                <div className={right}>
                    <div className={rightTop}>
                        <h3 className={projectTitle}>{projectName}</h3>
                        <strong className={projectTech}>Technologies: {tech}</strong>
                        <p className={projectDescription}>{children}</p>
                    </div>
                    <div className={rightBottom}>
                        <SourceButton className={projectSource} link={source.link} icon={source.icon} text={source.text}></SourceButton>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    )
}

export default ProjectCard