import React, { useState } from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import convert from 'color-convert'

const Color = ({ name, code, url, title }) => {
    const hsl = convert.hex.hsl(code);
    const rgb = convert.hex.rgb(code);
    const [saturation, setSaturation] = useState(hsl[1]);
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
                            <div style={{ color: `hsl(${hsl[0]},${saturation}%, 10%)`, backgroundColor: `hsl(${hsl[0]},${saturation}%, 60%)`, padding: '0.5rem' }}>
                                Luminance 10% text on 60% background
                                </div>
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem', backgroundColor: `hsl(${hsl[0]},${saturation}%, 95%)` }}>
                                <span style={{ color: `hsl(${hsl[0]},${saturation}%, 10%)` }} onClick={()=> window.open(url)}>
                                    {title} + ' Luminance 10% text on 95% background'
                                </span>

                            </div>
                            <div style={{ color: `hsl(${hsl[0]},${saturation}%, 95%)`, backgroundColor: `hsl(${hsl[0]},${saturation}%,30%)`, padding: '0.5rem' }}>
                                Luminance 95% text on 30% background
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
export default Color;