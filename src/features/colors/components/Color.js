import React, { useState } from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import convert from 'color-convert'

const Color = ({ name, code, url, title }) => {
    const hsl = convert.hex.hsl(code);
    const rgb = convert.hex.rgb(code);
    const [saturation, setSaturation] = useState(100);
    const [luminance, setLuminance] = useState(90);

    return (
        <React.Fragment>
            <Card raised={true} style={{ margin: '10px' }}>
                <CardHeader title={name + ' ' + code.substr(1)} subheader={`hsl(${hsl}), rgb(${rgb})`} />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={4} style={{ backgroundColor: code }}></Grid>
                        <Grid item xs={4} style={{ backgroundColor: 'hsl(' + hsl[0] + ',50%,50%)' }}>
                            <div style={{ marign: '0 1rem', color: `hsl(${hsl[0]},${saturation}%,${100 - luminance}%)` }}>{`hsl(${hsl[0]},${saturation},${100 - luminance})=`}{convert.hsl.hex(hsl[0], saturation, 100 - luminance)}</div>
                            <div style={{ marign: '0 1rem', color: `hsl(${hsl[0]},${saturation}%,${luminance}%)` }}>{`hsl(${hsl[0]},${saturation},${luminance})=`}{convert.hsl.hex(hsl[0], saturation, luminance)}</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ marign: '0 1rem', height: '100%', backgroundColor: `hsl(${hsl[0]},${saturation}%, 90%)`, borderLeftStyle: 'solid', borderLeftWidth: '2rem', borderLeftColor: `hsl(${hsl[0]},${saturation}%, 30%)`, borderRightWidth: '2rem', borderRightStyle: 'solid', borderRightColor: `hsl(${hsl[0]},${saturation}%,50%)`, display: 'flex', justifyContent: 'center', alignItems: 'center' , alignContent: 'stretch'}}>
                                <a href={url} target="_blank" style={{color: `hsl(${hsl[0]},${saturation}%, 10%)`}}>
                                    {title}
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
export default Color;