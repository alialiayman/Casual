import React, { useState } from 'react'
import { Grid, Slider, Checkbox, FormControlLabel } from '@material-ui/core';
import convert, { rgb } from 'color-convert'



const ColorCalculator = () => {

    const [userColor, setUserColor] = useState({
        r: 0,
        g: 0,
        b: 0,
        h: 0,
        s: 0,
        l: 0,
        hex: '000000'
    });


    const handleUserColorChange = (channel, val) => {
        const newColor = { r: userColor.r, g: userColor.g, b: userColor.b, h: userColor.h, s: userColor.s, l: userColor.l };
        let difference = 0;

        switch (channel) {
            case 'r':

                    newColor.r = val;
                
                break;
            case 'g':

                    newColor.g = val;
                
                break;
            case 'b':

                    newColor.b = val;
                break;
            case 'h':
                const rgbColorh = convert.hsl.rgb(val, newColor.s, newColor.l);
                newColor.r = rgbColorh[0];
                newColor.g = rgbColorh[1];
                newColor.b = rgbColorh[2];
                break;
            case 's':
                const rgbColors = convert.hsl.rgb(newColor.h, val, newColor.l);
                newColor.r = rgbColors[0];
                newColor.g = rgbColors[1];
                newColor.b = rgbColors[2];
                break;
            case 'l':
                const rgbColorl = convert.hsl.rgb(newColor.h, newColor.s, val);
                newColor.r = rgbColorl[0];
                newColor.g = rgbColorl[1];
                newColor.b = rgbColorl[2];
                break;
        }


        const hsl = convert.rgb.hsl(newColor.r, newColor.g, newColor.b);
        const hex = convert.rgb.hex(newColor.r, newColor.g, newColor.b);
        newColor.h = hsl[0];
        newColor.s = hsl[1];
        newColor.l = hsl[2];
        newColor.hex = hex;
        setUserColor(newColor);

    }
    return (
        <Grid container spacing={2} justify="center" style={{ padding: '1rem' }}>

            <Grid item xs={3}>
                <div style={{ textAlign: 'center' }}>{`hsl(${userColor.h},${userColor.s},${userColor.l})`}</div>

            </Grid>


            <Grid item xs={3} style={{ backgroundColor: `rgb(${userColor.r},${userColor.g},${userColor.b})` }}>

            </Grid>


            <Grid item xs={3}>
                <div style={{ textAlign: 'center' }}>{`rgb(${userColor.r},${userColor.g},${userColor.b})`}</div>
                <div style={{ textAlign: 'center' }}>{`hex(${userColor.hex})`}</div>

            </Grid>
            <Grid container style={{ height: '200px', padding: '1rem' }} justify="center" spacing={2}>
                <Grid item xs={4}>
                    <Grid container style={{ height: '300px', padding: '1rem' }}>
                        <Grid item>
                            H
                    <Slider
                                orientation="vertical"
                                value={userColor.h}
                                max={360}
                                min={0}
                                onChange={(e, val) => handleUserColorChange('h', val)}
                            />
                        </Grid>
                        <Grid item>
                            S
                    <Slider
                                orientation="vertical"
                                value={userColor.s}
                                max={100}
                                min={0}
                                onChange={(e, val) => handleUserColorChange('s', val)}
                            />

                        </Grid>
                        <Grid item>
                            L
                    <Slider
                                orientation="vertical"
                                value={userColor.l}
                                max={100}
                                min={0}
                                onChange={(e, val) => handleUserColorChange('l', val)}
                            />

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <Grid container style={{ height: '300px', padding: '1rem' }}>
                        <Grid item>
                            R
                    <Slider
                                orientation="vertical"
                                value={userColor.r}
                                max={255}
                                min={0}
                                onChange={(e, val) => handleUserColorChange('r', val)}
                            />
                        </Grid>
                        <Grid item>
                            G
                    <Slider
                                orientation="vertical"
                                value={userColor.g}
                                max={255}
                                min={0}
                                onChange={(e, val) => handleUserColorChange('g', val)}
                            />

                        </Grid>
                        <Grid item>
                            B
                    <Slider
                                orientation="vertical"
                                value={userColor.b}
                                max={255}
                                min={0}
                                onChange={(e, val) => handleUserColorChange('b', val)}
                            />

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    )

}

export default ColorCalculator;