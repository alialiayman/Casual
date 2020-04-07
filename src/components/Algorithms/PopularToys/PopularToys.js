import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const PopularToys = () => {
    return (
        <React.Fragment>

       
        <ExpansionPanel expanded>
            <ExpansionPanelSummary>
                <Typography >Solution</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>


            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Typography >Problem</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{problem}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </React.Fragment>
    )
};

export default PopularToys;

function popularNToys(numToys, topToys, toys, numQuotes, quotes){

    const stats = new Map();

    quotes.forEach(x => {
        
        for (let i = 0; i< numToys; i++){
            if (!stats.has(toys[i]))
                stats.set(toys[i],0)
            if (x.includes(toys[i])){
                stats.set(toys[i],  stats.get(toys[i]) + 1);
            }
        }
    });

    const values = Array.from(stats.values());
    const topValues = values.splice(0,topToys);
    
    return topValues;
}


const arr = [
    {name: 'ayman', age: 1},
    {name: 'berry', age: 3},
    {name: 'hamza', age: 2},
];

const ht = new Map();
ht.set('ayman', 1);
ht.set('berry', 3);
ht.set('hamza', 2);

const sorted = arr.sort((a,b)=> {
     return a.age < b.age ? -1 : 1

});

// console.log(sorted);

const sortedHt = [...ht].sort((a,b)=> {
    return a[1] < b[1] ? 1 : -1;
});

console.log(sortedHt.slice(0,2));


popularNToys(6,2,['elmo','elsa'],6,['elmo is good', 'elsa is good']);

const problem = ``;