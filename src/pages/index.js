import * as React from "react"
import {AnimationOnScroll} from "react-animation-on-scroll"
import SourceButton from "../components/source-button"
import ProjectCard from "../components/project-card"
import "../css/global.css"
import "animate.css/animate.min.css";
import {
    content, 
    banner, 
    welcome, 
    githubButton, 
    topDivider, 
    bottomDivider, 
    main, 
    gridContainer, 
    header, 
    footer
} from "../css/index.module.css"

const IndexPage = () => {
    return (
        <div className={content}>
            <header className={banner}>
                <AnimationOnScroll animateIn="animate__fadeInDownBig" animateOnce={true} offset={0} duration={0.5}>
                    <div className={welcome}>
                        <h1>Tarmo Markkanen</h1>
                        <p>CS Student @ <a href="https://aalto.fi">Aalto University</a></p>
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} offset={0} duration={1} delay={750}>
                            <div className={githubButton}>
                                <SourceButton link="https://github.com/T4TU" icon="github.svg" text="GitHub"></SourceButton>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </AnimationOnScroll>
            </header>
            <div className={topDivider}></div>
            <main className={main}>
                <h2 className={header}>📝Things I've Done</h2>
                <div className={gridContainer}>
                    <ProjectCard projectName="Solar System Simulator" projectImgSrc="img1.png" tech="Scala, Swing"
                        source={{link: "https://version.aalto.fi/gitlab/markkat2/solar-system-simulator", icon: "gitlab.png", text: "Code"}}>
                        This project was built for a univesity course. It is a Swing based desktop application written in Scala, and it can be used to simulate different objects and their movements in space, e.g. planets, stars, satellites etc. The simulation is visualised and the different parametres can be tweaked. A more detailed project document is availabe in the source repository.
                    </ProjectCard>
                    <ProjectCard projectName="Bluetooth App for a Robot" projectImgSrc="img2.png" tech="Java, Android"
                        source={{link: "https://github.com/T4TU/Robottiauto", icon: "github.svg", text: "Code"}}>
                        This very simple Android app was built to control the movements of a small four-wheeled robot, as part of a high school introductory electronics course. The choice of project idea was quite free and guidance was minimal. Our project was done in a group of three, and I was responsible for making the app.
                    </ProjectCard>
                    <ProjectCard projectName="Minecraft Server Project" projectImgSrc="img3.png" tech="Java"
                        source={{link: "https://github.com/T4TU/RK-Story", icon: "github.svg", text: "Code (Snippet)"}}>
                        This was a long project among a couple friends, where I was responsible for modding our Minecraft gaming server by writing plugins for the Bukkit/Spigot server platform with Java. The snippet below is from a quest system that allows server administators to build their own storylines for their players to explore. Since then, I have learned even more about e.g. writing cleaner and more understandable code.
                    </ProjectCard>
                    <ProjectCard projectName="This Website" projectImgSrc="img4.png" tech="JavaScript, React"
                        source={{link: "https://github.com/T4TU/t4tu.github.io", icon: "github.svg", text: "Code"}}>
                        This small web page was built with React to showcase some of my projects.
                    </ProjectCard>
                </div>
            </main>
            <div className={bottomDivider}></div>
            <footer className={footer}>
                <p>tarmo.markkanen@aalto.fi</p>
            </footer>
        </div>
    )
}

export default IndexPage

export const Head = () => <title>t4tu.github.io</title>