import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const BestTrade = () => {
    const [inputArray, setInputArray] = useState('1,5,6,7,34,10');
    const [result, setResult] = useState([0, 0]);

    const handleInputArrayChange = ({ target }) => {
        setInputArray(target.value);
    }

    const calculate = () => {
        setResult(FindBestDays(inputArray.split(',')));
    }
    return (
        <React.Fragment>
            <ExpansionPanel expanded>
                <ExpansionPanelSummary>
                    <Typography >Solution</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <input value={inputArray} onChange={handleInputArrayChange}></input>
                    <button type="button" onClick={calculate}> Calculate </button>
                    <div>{result}</div>
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
}

export default BestTrade;



const prices = [7];

// loop1 from 0 to end with BuyIndex
// loop2 from index to end sellIndex
// declare MaxProfit, BuyDay, SellDay
// compute profit if greater than MaxProfit, Replace BuyDay,SellDay and overriteMaxProfit

function FindBestDays(prices) {
    if (!prices || prices.length === 0) {
        return [-1, -1];
    }

    if (prices.length === 1) {
        return [0, 0];
    }

    let maxProfit = 0;
    let buyDay = 0;
    let sellDay = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
                buyDay = i;
                sellDay = j
            }
        }
    }

    return [buyDay, sellDay];

}

const testCases = [
    [1, 5, 6, 7, 34, 10],
    [200, 1, 5, 6, 7, 34, 10],
    [1, 5, 6, 7, 34, 10, 300],
    [10, 1, 5, 6, 7, 34, 10, 20],
    [2, 200, 1, 0, 10],
    [7, 10],
    [1]

]
testCases.forEach(x => {
    console.log(`${x}  ==>  ${FindBestDays(x)}`)
});



const problem =
    `Problem 1

Input is an array of Integers which denotes the stock value of company X.

Ex : [1,5,6,7,34,10]

In this case :
1 is the stock value of company X on Day 0.
5 is the stock value of company X on Day 1.
...
10 is the stock value of a comany X on Day 5.

You need to find the day where I can buy the stock and day where I can sell the stock to get the max profit :

In the above case, If I buy the stock at Day 0 (i.e when the value is 1) and sell on Day 4 (when the value is 34). I get the max profit. Profit = 34-1 = 33. So, the output for the above example should be [0,4] (i.e [buy-day, sell-day])

If there is a test case in which any profit is not possible, Print [0,0] (i.e: you're buying and selling the stock on the same day)

Test Cases :
[200, 1,5,6,7,34,10]
[1,5,6,7,34,10,300]
[10,1,5,6,7,34,10,20]
[2,200,1,0,10]
[7,10]
[1] //Output: [0,0] You buy and sell on the same day because there's only one number.

If an emty array or null is passed as an input return [-1,-1].`