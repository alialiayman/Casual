import React from 'react'
import Color from './components/Color'

const Colors = () => {
    return (
        <React.Fragment>
            <Color name='Lime' code='#05FF01'></Color>
            <Color name='Olive' code='#818000'></Color>
            <Color name='Skyblue' code='#86CEEB'></Color>
            <Color name='Navy' code='#000080'></Color>
            <Color name='Snow' code='#FFFAFA'></Color>
            <Color name='Chocolate' code='#D2691F'></Color>
            <Color name='Firebrick' code='#B22122'></Color>
            <Color name='Tan' code='#D2B48C'></Color>
            <Color name='Silver' code='#C0C0C0'></Color>
            <Color name='Teal' code='#028080'></Color>
            <div style={{ textAlign: 'center' }}>
                <a href="https://visme.co/blog/color-combinations" target="_blank">https://visme.co/blog/color-combinations</a>
            </div>

        </React.Fragment>
    )
}

export default Colors;