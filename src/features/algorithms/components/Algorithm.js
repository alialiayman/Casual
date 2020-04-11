import React from 'react';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Algorithm = ({ name, problem, algorithm, method, testCases }) => {

    return (

        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="textPrimary" variant="h5">{name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container spacing={2}>
                    <Grid item xs={12} name="Problem">
                        <Paper elevation={3} rounded={true} style={{ padding: '15px' }}>
                            <Typography color="primary" variant="h6">Problem</Typography>
                            <Typography color="textSecondary" style={{ whiteSpace: 'pre-line' }}>
                                {problem}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} name="Algorithm">
                        <Paper elevantion={3} style={{ padding: '15px' }}>
                            <Typography variant="h6">Algorithm</Typography>
                            <Typography variant="body2" color="textSecondary" style={{ whiteSpace: 'pre-line' }}>
                                {algorithm}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} name="Method">
                        <Paper elevantion={3} style={{ padding: '15px' }}>
                            <Typography variant="h6">Method</Typography>
                            <Typography variant="body2" color="textSecondary" style={{ whiteSpace: 'pre-line' }}>
                                {method.toString()}

                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} name="testcases">
                        <Paper elevantion={3} style={{ padding: '15px' }}>
                            <Typography variant="h6">Test Cases</Typography>
                            {
                                testCases.map(a => (
                                    <div>
                                        {a.toString()}==> { method(a).toString()}
                                    </div>
                                ))
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};

export default Algorithm;