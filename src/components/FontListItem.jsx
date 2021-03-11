import React, { useState } from 'react';
const green = '#00ff00';


export const FontListItem = () => {
    const [font, setFont] = useState("")
    const [fontColor, setFontColor] = useState(green)

    return (
        <>
            <h2>Hello you...</h2>
            <label style={{
                background: fontColor,
                border: "4px dotted blue",
                marginTop: "5rem"
            }} >
                This is some more text
            </label>
        </ >
    )
}