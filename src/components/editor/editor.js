import React from 'react';
import './editor.scss';

const Editor = ({ addNode }) => {

    const pushNode = () => {
        addNode(Math.round(Math.random() * 100));
    }

    return (
        <React.Fragment>
            <div className="editor-container">
                <input></input>
                <button type="button" onClick={pushNode}>Add</button>
            </div>
        </React.Fragment>
    )
}

export default Editor;