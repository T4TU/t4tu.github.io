import * as React from "react"
import {
    sourceButton, 
    sourceButtonIcon, 
    sourceButtonText
} from "../css/source-button.module.css"

const SourceButton = ({link, icon, text}) => {
    return (
        <a className={sourceButton} href={link}>
            <img className={sourceButtonIcon} src={"/img/" + icon} alt="Source code button logo"></img>
            <span className={sourceButtonText}>{text}</span>
        </a>
    )
}

export default SourceButton