import React from 'react';
import Algorithm from './components/Algorithm';
import bestTrade from './solutions/bestTrade';
import decks from './solutions/decks';
import flatten from './solutions/flatten';

const Algorithms =()=> {

    return (
        <React.Fragment>
            <Algorithm  {...bestTrade}/>
            <Algorithm  {...decks}/>
            <Algorithm  {...flatten}/>
        </React.Fragment>
    )

}

export default Algorithms;