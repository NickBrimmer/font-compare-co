import React, { useState } from 'react';
const white = 'white';
const black = 'black';
const text = "This is some text"
const weight = "100"
const size = "2em"


// we need to pass down, or pull from state
// an object with { font, size, weight }
export const FontListItem = () => {
    const [font, setFont] = useState("Verdana")
    const [backgroundColor, setBackgroundColor] = useState(white)
    const [fontColor, setFontColor] = useState(black)
    const [fontWeight, setFontWeight] = useState(weight)
    const [renderText, setRenderText] = useState(text)
    const [fontSize, setFontSize] = useState(size)

    return (
        <>
            <li style={{ listStyle: 'none' }} >
                <label style={{
                    fontFamily: font,
                    fontWeight: fontWeight,
                    fontSize: fontSize,
                    background: backgroundColor,
                    color: fontColor,

                }} >
                    {renderText}
                </label>
            </li>
        </ >
    )
}