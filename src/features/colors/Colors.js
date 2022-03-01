import React, { useState } from 'react'
import Color from './components/Color'
import ColorCalculator from './components/ColorCalculator'
import ColorHarmony from './components/ColorHarmony';
import { Tab, Tabs } from '@material-ui/core';
const Colors = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <React.Fragment>
            <Tabs
                value={selectedTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="Favorite" >

                </Tab>
                <Tab label="Calculator" />
            </Tabs>

            {selectedTab === 0 &&
                <div >
                    <div>
                        <a href='%PUBLIC_URL%/material.html'>Material color names</a>
                        <div>Red</div>
                        <ColorHarmony code='Persian Red: #D32F2F' />
                        <ColorHarmony code='Red Orange: #F44336' />
                        <ColorHarmony code='Pink :#FFCDD2' />
                        <p>Blue</p>
                        <ColorHarmony code='Denim: #1976D2' />
                        <ColorHarmony code='Pacific Blue: #0288D1' />
                        <ColorHarmony code='Dodger: #2196F3' />
                        <ColorHarmony code='Deep Skye Blue: #03A9F4' />
                        <ColorHarmony code='Columbia Blue: #BBDEFB' />
                        <div>Cyan</div>
                        <ColorHarmony code='Eastern Blue: #0097A7' />
                        <ColorHarmony code='Dark Turquoise: #00BCD4' />
                        <ColorHarmony code='Pale Turquoise: #B2EBF2' />
                        <p>Teal</p>
                        <ColorHarmony code='Pine Green: #00796B' />
                        <ColorHarmony code='Dark Cyan: #009688' />
                        <ColorHarmony code='Cruise: #B2DFDB' />
                        <p>Green</p>
                        <ColorHarmony code='Sushi: #689F38   ' />
                        <ColorHarmony code='Japanese Laurel: #388E3C' />
                        <ColorHarmony code='Earls Green: #AFB42B' />
                        <ColorHarmony code='Mantis: #8BC34A  ' />
                        <ColorHarmony code='Fruit Salad: #4CAF50' />
                        <ColorHarmony code='Las Palmos: #CDDC39' />
                        <ColorHarmony code='Snowy Mint: #DCEDC8' />
                        <ColorHarmony code='Granny Apple: #C8E6C9' />
                        <ColorHarmony code='Mimosa: #F0F4C3' />
                        <p>Yellow</p>
                        <ColorHarmony code='Sunglow : #FBC02D' />
                        <ColorHarmony code='Gorse: #FFEB3B' />
                        <ColorHarmony code='Lemon Chiffon: #FFF9C4' />
                        <p>Orange</p>
                        <ColorHarmony code='Tangerine: #F57C00' />
                        <ColorHarmony code='Cinnabar: #E64A19' />
                        <ColorHarmony code='Orange Peel: #FF9800' />
                        <ColorHarmony code='Outrageous Orange: #FF5722' />
                        <ColorHarmony code='Moccasin: #FFE0B2' />
                        <ColorHarmony code='Your Pink: #FFCCBC' />
                        <p>Brown</p>
                        <ColorHarmony code='Very Dark Brown: #5D4037' />
                        <ColorHarmony code='Tobacco Brown: #795548' />
                        <ColorHarmony code='Swiss Coffee: #D7CCC8' />
                        <p>Gray</p>
                        <ColorHarmony code='Dim Gray: #616161' />
                        <ColorHarmony code='Dark Gray: #9E9E9E' />
                        <ColorHarmony code='White Smoke: #F5F5F5' />
                        <p>BlueGray</p>
                        <ColorHarmony code='San Juan: #455A64' />
                        <ColorHarmony code='Hoki: #607D8B' />
                        <ColorHarmony code='Link Water: #CFD8DC' />
                    </div>
                    <Color name='Free speech blue - material primary' code='#3F51B5'></Color>
                    <Color name='Razzmatazz - material secondary' code='#F50057' url="https://material-ui.com/customization/default-theme/#default-theme" title="Default theme"></Color>
                    <Color name='Lime' code='#05FF01' url="https://visme.co/blog/color-combinations" title="Some beautiful colors"></Color>
                    <Color name='Olive' code='#818000' url="https://web.njit.edu/~walsh/index.php" title="New Jersy Institute"></Color>
                    <Color name='Skyblue' code='#86CEEB' url="http://hajonsoft.com/html/colors.html" title="HajOnSoft"></Color>
                    <Color name='Navy' code='#000080' url="https://www.color-blindness.com/color-name-hue" title="Color name"></Color>
                    <Color name='Snow' code='#FFFAFA' url="https://websitesetup.org/website-color-schemes/" title="Industries"></Color>
                    <Color name='Chocolate' code='#D2691F' url="https://material.io/design/color/the-color-system.html#color-usage-and-palettes" title="Material.io"></Color>
                    <Color name='Firebrick' code='#B22122' url="https://webflow.com/blog/web-design-101-color-theory" title="Web design color theory"></Color>
                    <Color name='Tan' code='#D2B48C' url="https://material.io/resources/color/#!/?view.left=0&view.right=0" title="Material color tool"></Color>
                    <Color name='Silver' code='#C0C0C0' url="https://material.io/inline-tools/color/" title="Material inline color viewer"></Color>
                    <Color name='Teal' code='#028080' url="https://www.tailorbrands.com/blog/logo-color-combinations" title="Logo harmony"></Color>
                </div>
            }
            {selectedTab === 1 &&
                <div  >
                    <ColorCalculator />
                </div>
            }

        </React.Fragment>
    )
}

export default Colors;
