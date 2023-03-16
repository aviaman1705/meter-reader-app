import MaterialTable from 'material-table';

const data = [{ name: 'Mami', surname: 'Asn', birthYear: 250 }, { name: 'Mami', surname: 'Asn', birthYear: 250 }];
const columns = [{ title: 'Name', field: 'name' }, { title: 'Surname', field: 'surname' }, { title: 'Birth Year', field: 'birthyear', type: "numeric" }];

export const BasicTable = () => {
    return <MaterialTable title="Basic Table" columns={columns} data={data} />
}