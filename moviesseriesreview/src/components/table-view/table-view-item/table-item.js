import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Td } from 'react-super-responsive-table';


const TableViewItem = (props) => {
    // props.item_item_data
    return (
        <div className="row">
            <img
                src={props.item_data.image}
                alt={props.item_data.alt ? props.item_data.alt : 'This is the alt'}
                className="rounded img-thumbnail"
                style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                    backgroundSize: "cover"

                }}
            />

            <div>
                <b className="justify-content-center">Title: {props.item_data.title ? props.item_data.title : 'This is the title'}</b>

                <br />

                <p className="justify-content-center" style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}>
                    {props.item_data.description ? props.item_data.description : 'This is the description'}
                </p>

            </div>
        </div>


    );
}



export default TableViewItem;