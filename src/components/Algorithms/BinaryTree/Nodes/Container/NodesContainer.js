import React, { useState, useEffect } from 'react';
import Node from '../Node/node';
import { cloneDeep } from 'lodash';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Editor from '../../editor/editor';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const MainContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});


let _rootNode;
const NodesContainer = () => {

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
            <ExpansionPanel square expanded>
                <ExpansionPanelSummary>
                    <Typography >Solution</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <MainContainer>
                        <Editor addNode={addNodeHandler} />
                        <Node node={rootNode} />
                    </MainContainer>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Typography >Problem</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Problem description</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    )
}

export default NodesContainer;