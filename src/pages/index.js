import * as React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
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
                        <p>Currently studying computer science at Aalto University</p>
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
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} offset={0} duration={1} delay={250}>
                    <h2 className={header}>Some Things I've Done</h2>
                </AnimationOnScroll>
                <div className={gridContainer}>
                    <ProjectCard projectName="Monitoring Dashboard" projectImgSrc="img0.png" tech="C#, ASP.NET, TypeScript, React, Docker, Ansible">
                        Currently building an internal "engine and tools monitoring dashboard" for <a href="https://www.remedygames.com">Remedy Entertainment</a> in a team of 8 developers, as part of the Software Project course at Aalto University. During the 2-semester course, student teams complete a software project for a real client company from the industry using agile methods.
                    </ProjectCard>
                    <ProjectCard projectName="Temperature Logging with Raspberry Pi" projectImgSrc="img5.png" tech="JavaScript, React, Python"
                        source={{ link: "https://github.com/T4TU/temperature-logging", icon: "github.svg", text: "Code" }}>
                        To measure temperature in my apartment, I set up a Raspberry Pi with a temperature sensor to periodically take and log measurements. I built a web panel using React to show current measurement values and graphs of past values. For comparison, the panel also draws a graph of outside temperature, obtained from the Finnish Meteorological Institute API.
                    </ProjectCard>
                    <ProjectCard projectName="Solar System Simulator" projectImgSrc="img1.png" tech="Scala, Swing"
                        source={{ link: "https://version.aalto.fi/gitlab/markkat2/solar-system-simulator", icon: "gitlab.png", text: "Code" }}>
                        This project was built for a univesity course. It is a Swing based desktop application written in Scala, and it can be used to simulate different objects and their movements in space, e.g. planets, stars, satellites etc. The simulation is visualised and the different parametres can be tweaked. A more detailed project document is availabe in the source repository.
                    </ProjectCard>
                    <ProjectCard projectName="Tower Defense Game" projectImgSrc="img6.png" tech="C++ with SFML">
                        A take on the classic tower defense game genre. This small game was done in a group of 4 during a C++ university course.
                    </ProjectCard>
                    <ProjectCard projectName="Bluetooth App for Controlling a Robot" projectImgSrc="img2.png" tech="Java, Android"
                        source={{ link: "https://github.com/T4TU/Robottiauto", icon: "github.svg", text: "Code" }}>
                        This very simple Android app was built to control the movements of a small four-wheeled robot, as part of a high school introductory electronics course. The choice of project idea was quite free and guidance was minimal. Our project was done in a group of three, and I was responsible for making the app.
                    </ProjectCard>
                    <ProjectCard projectName="Minecraft Server Project" projectImgSrc="img3.png" tech="Java">
                        This was a long-running, since abandoned project among a couple friends, where I was responsible for modding our Minecraft gaming server by writing plugins for the Bukkit/Spigot server platform with Java over a couple of years.
                    </ProjectCard>
                    <ProjectCard projectName="This Website" projectImgSrc="img4.png" tech="JavaScript, React"
                        source={{ link: "https://github.com/T4TU/t4tu.github.io", icon: "github.svg", text: "Code" }}>
                        This simple and small web page was built to learn some React and to showcase some of my projects.
                    </ProjectCard>
                </div>
            </main>
            <div className={bottomDivider}></div>
            <footer className={footer}>
                <p>© 2023 Tarmo Markkanen</p>
                <p>tarmo.markkanen@aalto.fi</p>
                <br></br>
            </footer>
        </div>
    )
}

export default IndexPage

export const Head = () => <title>t4tu.github.io</title>