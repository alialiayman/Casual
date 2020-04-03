import React, { useState } from 'react';
import './editor.scss';

const Editor = ({ addNode }) => {

    const [inputValue, setInputValue] = useState(0);

    const pushNode = () => {
        // Math.round(Math.random() * 100)
        addNode(inputValue);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <React.Fragment>
            <div className="editor-container">
                <label>
                    Value:
                <input type="number" value={inputValue} onChange={handleInputChange}></input>
                </label>
                <button type="button" onClick={pushNode}>Add</button>
            </div>
        </React.Fragment>
    )
}

export default Editor;