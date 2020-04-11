import React, { useState, useEffect } from 'react';
import Node from './components/Node/Node';
import { cloneDeep } from 'lodash';
import Editor from './components/Editor/Editor';

let _rootNode;
const BinaryTree = () => {

    let [rootNode, setRootNode] = useState({ key: null, left: null, right: null });
    useEffect(() => {
        const savedRootNode = localStorage.getItem('rootNode');
        if (savedRootNode) {
            setRootNode(JSON.parse(savedRootNode));
        }
    }, []);

    const addNode = (node, nodeValue) => {

        // duplicate nodevalue not allowd
        if (node.key === nodeValue) return;

        if (node.key === null) {
            node.key = nodeValue;
            node.left = null;
            node.right = null;
            localStorage.setItem('rootNode', JSON.stringify(_rootNode));
            return setRootNode(_rootNode);
        }
        // insert to the right
        if (parseInt(nodeValue) > parseInt(node.key)) {
            if (node.right) {
                // continue searching
                addNode(node.right, nodeValue);
            } else {
                // right node is terminus: initialize right node, next iteration is the last one.
                node.right = { key: null };
                addNode(node.right, nodeValue);
            }
        } else {
            if (node.left) {
                addNode(node.left, nodeValue);
            } else {
                node.left = { key: null };
                addNode(node.left, nodeValue);
            }
        }
    }

    const addNodeHandler = (keyValue) => {
        _rootNode = cloneDeep(rootNode);
        addNode(_rootNode, keyValue);
    }

    return (
        <React.Fragment>
            <Editor addNode={addNodeHandler} />
            <Node node={rootNode} />
        </React.Fragment>
    )
}

export default BinaryTree;