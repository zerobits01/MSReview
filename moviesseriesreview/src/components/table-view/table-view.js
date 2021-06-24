import React from 'react';
import { Table, Tbody, Tr} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import TableViewItem from './table-view-item/table-item';


const TableExample = (props) => {
    return (
        <Table style={{
            background: "rgba(0,0,0)",
            padding: "1rem",
            color: "burlywood"
        }}>
            <Tbody>
                {props.table_data.map((item, index) => {
                    return <Tr>
                        <TableViewItem item_data={item}/>
                    </Tr>;

                })}
            </Tbody>
        </Table>
    );
}


export default TableExample;