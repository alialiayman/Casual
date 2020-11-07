const puppeteer = require('puppeteer');
const ColorHelper = require('color-to-name');
const fs = require('fs')

automate();


async function automate(res) {

    const content =  fs.readFileSync('material-colors.html', 'utf-8')



    const codes =  [...content.matchAll(/(#[A-Z0-9]{6})/g)];
    let contentWithNames = content;
    codes.forEach(element => {
       contentWithNames = contentWithNames.replace(element[0],colorName(element[0]) + ' => ' + element[0]) 
    });

    fs.writeFileSync('material-colors-names.html', contentWithNames)


}

function colorName(input) {
    const closestColor = ColorHelper.findClosestColor(input);
    return `${closestColor.color} ${closestColor.name}`; 
}