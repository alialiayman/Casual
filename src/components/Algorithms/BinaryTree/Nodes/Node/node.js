import React from 'react';
import './node.scss'

const Node = ({ node }) => {
    if (!node || !node.key) {
        return null;
    }

    const nodeKey = <div className="node-container">
        <div className="key-container">{node.key}</div>
        <div className="children-container">
            <div className="left-node">
                {
                    node.left && <Node node={node.left} />
                }
            </div>
            <div className="right-node">
                {
                    node.right && <Node node={node.right} />
                }
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