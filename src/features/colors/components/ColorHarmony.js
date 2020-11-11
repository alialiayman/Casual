import { Card, CardContent, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import convert from 'color-convert';
import ColorScheme from 'color-scheme';
import React from 'react';

const ColorHarmony = ({ code }) => {
    const codeSplit = code.split('#');
    let theCode = '';
    let theName = '';
    if (codeSplit.length > 1) {
         theCode = codeSplit[1].trim();
         theName = codeSplit[0];
    } else {
         theCode = codeSplit[0].trim();
         theName = '';
    }

    const hsl = convert.hex.hsl(theCode);
    const rgb = convert.hex.rgb(theCode);


    const scheme = new ColorScheme();
    scheme.from_hex(theCode).scheme('triade').variation('default');



    return (
        <React.Fragment>
            <Card raised={true} style={{ margin: '10px' }}>
                <CardHeader title={theCode} subheader={` hsl(${hsl}), rgb(${rgb})`} />
                <CardContent>
                    <Grid container spacing={3}>
    <Grid item  style={{ backgroundColor: '#' + theCode }}>{theName + ': #' + theCode}</Grid>

{scheme.colors().map(c=> <Grid item   style={{ backgroundColor: '#' + c }}>{c}</Grid>)}
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
export default ColorHarmony;