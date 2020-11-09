import { Card, CardContent, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import convert from 'color-convert';
import ColorScheme from 'color-scheme';
import React from 'react';

const ColorHarmony = ({ code }) => {
    const theCode = code.split('#')[1].trim();
    const theName = code.split('#')[0];
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