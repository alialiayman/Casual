import React from 'react'
import Color from './components/Color'

const Colors = () => {
    return (
        <React.Fragment>

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
        </React.Fragment>
    )
}

export default Colors;
