import React from "react";
import * as styled from "./Button.style"

interface IButton {
    text: string
    onClick: () => void
}

const Button = ({onClick, text}: IButton) => {
            return (
                <styled.Button onClick={onClick}>
                    <span>{text}</span>
                </styled.Button>)
    }


export default Button
