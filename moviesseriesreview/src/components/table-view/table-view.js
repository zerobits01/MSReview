import React from 'react';
import { Table, Tbody, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import TableViewItem from './table-view-item/table-item';


const TableExample = (props) => {
    console.log(props)
    return (
        <div className="justify-content-center" style={{ fontSize: "1rem" }}>
            <div className="float-left" style={{
                paddingLeft: "2rem",
                fontSize: "2.5rem"
            }}>
                Comments:
            </div>
            <Table style={{
                background: "rgba(0,0,0)",
                padding: "1rem",
                color: "burlywood"
            }}>
                <Tbody>
                    {props.table_data.map((item, index) => {
                        return <div>
                            <hr style={{
                                backgroundColor: 'burlywood',
                                height: "0.1rem"
                            }} />
                            <Tr>
                                <TableViewItem item_data={item} />
                            </Tr>
                        </div>
                    })}
                </Tbody>
            </Table>
        </div>
    );
}



export default TableExample;