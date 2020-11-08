const puppeteer = require('puppeteer');
const ColorHelper = require('color-to-name');
const fs = require('fs')
const express = require('express')
const app = new express();
automate();


async function automate(res) {

    const content =  fs.readFileSync('material-colors.html', 'utf-8')



    const codes =  [...content.matchAll(/(#[A-Z0-9]{6})/g)];
    let contentWithNames = content;
    codes.forEach(element => {
       contentWithNames = contentWithNames.replace(element[0],colorName(element[0]) + ' => ' + element[0]) 
    });

    fs.writeFileSync('material-colors-names.html', contentWithNames)

    app.get('/', function(request, response){
        response.sendFile(__dirname + '/material-colors-names.html');
        console.log('%c 🍌 __dirname + /material-colors-names.html: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', __dirname + '/material-colors-names.html');
    });

    app.listen(4000);



console.log("Running at Port 4000");
}

function colorName(input) {
    const closestColor = ColorHelper.findClosestColor(input);
    return `${closestColor.color} ${closestColor.name}`; 
}