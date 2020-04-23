import React from 'react';
import Algorithm from './components/Algorithm';
import bestTrade from './solutions/bestTrade';
import decks from './solutions/decks';
import flatten from './solutions/flatten';
import Container from '@material-ui/core/Container';

const Algorithms = () => {

    return (
        <React.Fragment>
            <Container maxWidth='90%'>
                <a href="https://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/">https://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/</a>
                <Algorithm  {...bestTrade} />
                <Algorithm  {...decks} />
                <Algorithm  {...flatten} />
            </Container>
        </React.Fragment>
    )

}

export default Algorithms;