import React, { useState } from 'react'

function Editor() {
    const [text, setText] = useState('');
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [fontSize, setFontSize] = useState("16px");
    const [fontFamily, setFontFamily] = useState("Arial");
    const [fontColor, setFontColor] = useState("#000000");
    const [darkTheme, setDarkTheme] = useState(false);
    

    function handleBoldClick()
    {
        setBold(!bold);
    };

    function handleItalicClick()
    {
        setItalic(!italic);
    };

    function handleUnderlineClick()
    {
        setUnderline(!underline);
    };

    function handleUpperCaseClick()
    {
        setText(text => text.toUpperCase());
    };

    function getTextStyle()
    {
        let style = {};

        if (bold) 
        {
            style.fontWeight = 'bold';
        }
        if (italic)
        {
            style.fontStyle = 'italic';
        }
        if (underline)
        {
            style.textDecoration = 'underline';
        }
        if(darkTheme)
        {
            style.backgroundColor = "black";;
        }

        style.fontSize = fontSize;
        style.fontFamily = fontFamily;
        style.color = fontColor;

        return style;
    };

    function toggleTheme() {
        setDarkTheme(!darkTheme);
        if(darkTheme)
        {
            setFontColor("#000000");
        }
        else if (!darkTheme)
        {
            setFontColor("#ffffff");
        }
    }

    function handleFontColorChange(e) {
        const color = e.target.value;
        setFontColor(color);
    }

    return (
        <>
            <div style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}>
            <div>
                <button onClick={handleBoldClick} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}>B</button>
                <button onClick={handleItalicClick} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}>I</button>
                <button onClick={handleUnderlineClick} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}>U</button>
                <button onClick={handleUpperCaseClick} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}>Tt</button>
                <select onChange={e => setFontSize(e.target.value)} value={fontSize} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}>
                    <option value="12px">12px</option>
                    <option value="32px">32px</option>
                    <option value="64px">64px</option>
                </select>

                <select onChange={e => setFontFamily(e.target.value)} value={fontFamily} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                </select>
                <input type="color" value={fontColor} onChange={handleFontColorChange} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}/>
                <input type="checkbox" onChange={toggleTheme} style={{ backgroundColor: darkTheme ? "#333333" : "#ffffff", color: darkTheme ? "#ffffff" : "#000000" }}></input>
            </div>
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                style={getTextStyle()}
            />
            </div>           
        </>
    )
}

export default Editor
