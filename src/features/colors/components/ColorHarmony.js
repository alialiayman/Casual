import { Card, CardContent, CardHeader, Divider } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import convert from "color-convert";
import ColorScheme from "color-scheme";
import ColorHelper from "color-to-name";

const ColorHarmony = ({ code }) => {
  const codeSplit = code.split("#");
  let theCode = "";
  let theName = "";
  if (codeSplit.length > 1) {
    theCode = codeSplit[1].trim();
    theName = codeSplit[0];
  } else {
    theCode = codeSplit[0].trim();
    theName = "";
  }

  const hsl = convert.hex.hsl(theCode);
  const rgb = convert.hex.rgb(theCode);

  const defaultTriadeScheme = new ColorScheme();
  defaultTriadeScheme.from_hex(theCode).scheme("triade").variation("default");

  const hardAnalogicScheme = new ColorScheme();
  hardAnalogicScheme.from_hex(theCode).scheme("analogic").variation("default");

  const defaultTetradScheme = new ColorScheme();
  defaultTetradScheme
    .from_hex(theCode)
    .scheme("tetrade")
    .variation("default");

  return (
    <React.Fragment>
      <Card raised={true} style={{ margin: "10px" }}>
        <CardHeader title={theCode} subheader={` hsl(${hsl}), rgb(${rgb})`} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item style={{ backgroundColor: "#" + theCode }}>
              {theName + " #" + theCode}
            </Grid>
            <Grid item xs={12}>
                Triade
              <Divider />
            </Grid>
            {defaultTriadeScheme.colors().map((c) => (
              <Grid item style={{ backgroundColor: "#" + c }}>
                <div>{c}</div>
                <div>{`hsl(${convert.hex.hsl(c)})`}</div>
                <div>{`rgb(${convert.hex.rgb(c)})`}</div>
                <div>{`${ColorHelper.findClosestColor("#" + c).name}`}</div>
              </Grid>
            ))}
            <Grid item xs={12}>
                Analogic 
              <Divider />
            </Grid>
            {hardAnalogicScheme.colors().map((c) => (
              <Grid item style={{ backgroundColor: "#" + c }}>
                <div>{c}</div>
                <div>{`hsl(${convert.hex.hsl(c)})`}</div>
                <div>{`rgb(${convert.hex.rgb(c)})`}</div>
                <div>{`${ColorHelper.findClosestColor("#" + c).name}`}</div>
              </Grid>
            ))}
            <Grid item xs={12}>
                Tetrade
              <Divider />
            </Grid>
            {defaultTetradScheme.colors().map((c) => (
              <Grid item style={{ backgroundColor: "#" + c }}>
                <div>{c}</div>
                <div>{`hsl(${convert.hex.hsl(c)})`}</div>
                <div>{`rgb(${convert.hex.rgb(c)})`}</div>
                <div>{`${ColorHelper.findClosestColor("#" + c).name}`}</div>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
export default ColorHarmony;
