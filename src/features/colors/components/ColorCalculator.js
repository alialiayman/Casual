import { Grid, Slider, TextField } from "@material-ui/core";
import convert from "color-convert";
import ColorHelper from "color-to-name";
import React, { useState } from "react";
import ColorHarmony from "./ColorHarmony";

const ColorCalculator = () => {
  const [userColor, setUserColor] = useState({
    r: 0,
    g: 0,
    b: 0,
    h: 0,
    s: 0,
    l: 0,
    hex: "000000",
  });

  const [hexVal, setHexVal] = useState("000000");

  const handleUserColorChange = (channel, val) => {
    const newColor = {
      r: userColor.r,
      g: userColor.g,
      b: userColor.b,
      h: userColor.h,
      s: userColor.s,
      l: userColor.l,
    };

    switch (channel) {
      case "r":
        newColor.r = val;
        break;
      case "g":
        newColor.g = val;
        break;
      case "b":
        newColor.b = val;
        break;
      case "h":
        const rgbColorh = convert.hsl.rgb(val, newColor.s, newColor.l);
        newColor.r = rgbColorh[0];
        newColor.g = rgbColorh[1];
        newColor.b = rgbColorh[2];
        break;
      case "s":
        const rgbColors = convert.hsl.rgb(newColor.h, val, newColor.l);
        newColor.r = rgbColors[0];
        newColor.g = rgbColors[1];
        newColor.b = rgbColors[2];
        break;
      case "l":
        const rgbColorl = convert.hsl.rgb(newColor.h, newColor.s, val);
        newColor.r = rgbColorl[0];
        newColor.g = rgbColorl[1];
        newColor.b = rgbColorl[2];
        break;
      case "hex":
        if (val.length !== 6) {
          return;
        }
        setHexVal(val);
        const rgbColorHex = convert.hex.rgb(val);
        newColor.r = rgbColorHex[0];
        newColor.g = rgbColorHex[1];
        newColor.b = rgbColorHex[2];
        break;
      default:
        break;
    }
    const hsl = convert.rgb.hsl(newColor.r, newColor.g, newColor.b);
    const hex = convert.rgb.hex(newColor.r, newColor.g, newColor.b);
    newColor.h = hsl[0];
    newColor.s = hsl[1];
    newColor.l = hsl[2];
    newColor.hex = hex;
    setHexVal(hex);
    setUserColor(newColor);
  };
  return (
    <Grid container spacing={2} justify="center" style={{ padding: "1rem" }}>
      <Grid item xs={3}>
        <div
          style={{ textAlign: "center" }}
        >{`hsl(${userColor.h},${userColor.s},${userColor.l})`}</div>
        <div>
          {`cymk(${convert.hsl.cmyk(userColor.h, userColor.s, userColor.l)})`}
        </div>
      </Grid>

      <Grid
        item
        xs={3}
        style={{
          backgroundColor: `rgb(${userColor.r},${userColor.g},${userColor.b})`,
        }}
      ></Grid>

      <Grid item xs={3}>
        <div
          style={{ textAlign: "center" }}
        >{`rgb(${userColor.r},${userColor.g},${userColor.b})`}</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            value={hexVal}
            label="Hex #"
            onChange={(e) => handleUserColorChange("hex", e.target.value)}
          />
        </div>
      </Grid>
      <Grid
        container
        style={{ height: "200px", padding: "1rem" }}
        justify="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Grid container style={{ height: "300px", padding: "1rem" }}>
            <Grid item>
              H
              <Slider
                orientation="vertical"
                value={userColor.h}
                max={360}
                min={0}
                onChange={(e, val) => handleUserColorChange("h", val)}
              />
            </Grid>
            <Grid item>
              S
              <Slider
                orientation="vertical"
                value={userColor.s}
                max={100}
                min={0}
                onChange={(e, val) => handleUserColorChange("s", val)}
              />
            </Grid>
            <Grid item>
              L
              <Slider
                orientation="vertical"
                value={userColor.l}
                max={100}
                min={0}
                onChange={(e, val) => handleUserColorChange("l", val)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <ColorName hex={userColor.hex} />
        </Grid>
        <Grid item xs={4}>
          <Grid container style={{ height: "300px", padding: "1rem" }}>
            <Grid item>
              R
              <Slider
                orientation="vertical"
                value={userColor.r}
                max={255}
                min={0}
                onChange={(e, val) => handleUserColorChange("r", val)}
              />
            </Grid>
            <Grid item>
              G
              <Slider
                orientation="vertical"
                value={userColor.g}
                max={255}
                min={0}
                onChange={(e, val) => handleUserColorChange("g", val)}
              />
            </Grid>
            <Grid item>
              B
              <Slider
                orientation="vertical"
                value={userColor.b}
                max={255}
                min={0}
                onChange={(e, val) => handleUserColorChange("b", val)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ marginTop: "9rem" }}>
        <ColorHarmony code={hexVal} />
      </Grid>
    </Grid>
  );
};

export default ColorCalculator;

const ColorName = ({ hex }) => {
  const closestColor = ColorHelper.findClosestColor("#" + hex);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        {closestColor.color.toLowerCase() === "#" + hex.toLowerCase() &&
          "Exact color"}
      </div>
      <div>
        {closestColor.color.toLowerCase() !== "#" + hex.toLowerCase() &&
          "Closest color"}
      </div>
      <div
        style={{
          height: "50px",
          width: "40%",
          backgroundColor: closestColor.color,
        }}
      ></div>
      <div>
        <div>{closestColor.color}</div>
        {`cymk(${convert.hex.cmyk(closestColor.color)})`}
      </div>
      <div style={{ fontSize: "1.5rem" }}>{closestColor.name}</div>
    </div>
  );
};
