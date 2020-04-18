import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import moment from 'moment-hijri';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const AgeTable = ({ records }) => {

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Birth date', field: 'birthdate', type: 'date' },
        { title: 'Hijri Birth ', field: 'hbirthdate', type: 'date' },
        { title: 'Age', field: 'age', type: 'numeric' },
        { title: 'Hijri Age', field: 'hijriAge', type: 'numeric' },
        { title: 'age 15h on', field: 'hbirthdate15', type: 'date' },
    ];

    const data = records.map(r => {

        const diffTime = Math.abs(new Date() - new Date(r.birthdate));
        const age = (diffTime / (1000 * 60 * 60 * 24 * 365)).toFixed(2);

        const hijriAge = (diffTime / (1000 * 60 * 60 * 24 * 354)).toFixed(2);
        const hbirthdate = moment(r.birthdate).format('iDD, iMMM iYYYY');
        const hbirthdate15 = moment(r.birthdate).add(15, 'iYear').format('DD MMM YYYY');
        const tableRow = { name: r.name, birthdate: r.birthdate, age, hijriAge, hbirthdate, hbirthdate15 };
        return tableRow;
    });
    const today = moment().format('iDD, iMMM iYYYY');

    return (
        <MaterialTable icons={tableIcons}
            title={`How old are you today ${moment().format('DD MMM YYYY')} / ${today}`}
            columns={columns}
            data={data}
            actions={[
                {
                    icon: tableIcons.Add,
                    tooltip: 'Add Birth',
                    isFreeAction: true,
                    onClick: (event) => alert("You want to add a new row")
                },
                {
                    icon: tableIcons.Delete,
                    tooltip: 'Delete Birth',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                }
            ]}
            options={{
                actionsColumnIndex: -1
            }}
        />
    )
}

export default AgeTable;