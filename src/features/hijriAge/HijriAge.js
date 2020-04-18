import React from 'react';
import AgeTable from './components/AgeTable';


const HijriAge = () => {

    const data = [
        { name: 'Modi', birthdate: '24 Nov 2003' },
        { name: 'Minna', birthdate: '09 Sep 2006' },
        { name: 'Noha', birthdate: '02 Mar 2008' },
        { name: 'Berry', birthdate: '17 Feb 2017' },
        { name: 'Hamza', birthdate: '12 Aug 2019' },
        { name: 'Cherry', birthdate: '12 Aug 2019' },
    ];

    return (
       <AgeTable records= {data}/>
    )
}


export default HijriAge;