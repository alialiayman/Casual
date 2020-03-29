import React from 'react';
import './node.scss'

const Node = ({ node }) => {
    if (!node || !node.key) {
        return null;
    }

    const leftNode = node.left && <Node node={node.left} />;
    const rightNode = node.right && <Node node={node.right} />;

    const nodeKey = <div className="node-container">
        <div className="key-container">{node.key}</div>
        <div className="children-container">
            <div className="left-node">
                {leftNode}
            </div>
            <div className="right-node">
                {rightNode}
            </div>
        </div>
    </div>;


    return (
        <React.Fragment>
            {nodeKey}
        </React.Fragment>
    )

}

export default Node;