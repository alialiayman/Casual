import React from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const MainContainer = styled(Container)({
    textAlign: 'center',
    borderRadius: '25%',
});



const KeyContainer = styled(Container)({
    fontSize: '1em',
}
);

const ChildrenContainer = styled(Container)({
    display: 'flex',
    justifyItems: 'center',
    justifyContent: 'center',
});

const LeftNode = styled(Container)({
    width: '50%',
    backgroundColor: 'yellow',
});

const RightNode = styled(Container)({
    width: '50%',
    backgroundColor: 'magenta',
}
);


const Node = ({ node }) => {
    if (!node || !node.key) {
        return null;
    }

    const nodeKey = <MainContainer >
        <KeyContainer>{node.key}</KeyContainer>
        <ChildrenContainer >
            <LeftNode >
                {
                    node.left && <Node node={node.left} />
                }
            </LeftNode>
            <RightNode >
                {
                    node.right && <Node node={node.right} />
                }
            </RightNode>
        </ChildrenContainer>
    </MainContainer>;


    return (
        <React.Fragment>
            {nodeKey}
        </React.Fragment>
    )

}


export default Node;