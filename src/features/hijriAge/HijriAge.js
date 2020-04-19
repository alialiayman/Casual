import React, { useState } from 'react';
import AgeTable from './components/AgeTable';
import AgeDetail from './components/AgeDetail';
import moment from 'moment-hijri';


const HijriAge = () => {

    const [mode, setMode] = useState(0);
    const initialBirthdays = getDefaultBirthdays();
    const [birthdays, setBirthdays] = useState(initialBirthdays);

    const handleOnSave = (newRecord) => {

        setBirthdays([...birthdays, { name: newRecord.name, birthdate: moment(newRecord.birthdate).format('DD MMM YYYY') }]);
        saveLocalStorage(birthdays);
        setMode(0);
    }
    const handleOnAdd = () => {
        setMode(1);
    }
    const handleOnDelete = (rowData) => {
        const remaining = birthdays.filter(r => r.name !== rowData.name);
        setBirthdays(remaining);
        saveLocalStorage(remaining);
    }
    return (
        <React.Fragment>
            {
                mode === 0 ? <AgeTable birthdays={birthdays} onAdd={handleOnAdd} onDelete={handleOnDelete} /> : <AgeDetail onSave={handleOnSave} />
            }

        </React.Fragment>
    )
}

function saveLocalStorage(birthdays) {
    if (birthdays && birthdays.length > 0) {
        localStorage.setItem('birthdays', JSON.stringify(birthdays));
    } else {
        localStorage.setItem('birthdays', null);
    }
}

function getDefaultBirthdays() {
    const birthdateItem = localStorage.getItem('birthdays');
    let data;
    if (birthdateItem) {
        data = JSON.parse(birthdateItem);
    }
    if (!data || data.length === 0) {
        data = defaultData;
    }
    return data;
}

const defaultData = [
    { name: 'Modi', birthdate: '24 Nov 2003' },
    { name: 'Minna', birthdate: '09 Sep 2006' },
    { name: 'Noha', birthdate: '02 Mar 2008' },
    { name: 'Berry', birthdate: '17 Feb 2017' },
    { name: 'Hamza', birthdate: '12 Aug 2019' },
    { name: 'Cherry', birthdate: '12 Aug 2019' },
];

export default HijriAge;