import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {URLS} from '../../../global/global-vars';

const TableViewItem = (props) => {
    // props.item_item_data
    return (
        <div className="row" style={{
            paddingLeft: "1.5rem"
        }}>
            <img
                src={URLS.media_url + props.item_data.profile}
                alt={props.item_data.alt ? props.item_data.alt : 'alt'}
                className="rounded img-thumbnail"
                style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                    backgroundSize: "cover"

                }}
            />
            <div style={{
                width: "1rem"
            }}></div>
            <div>
                <b className="justify-content-center">username: {props.item_data.user_name ? props.item_data.user_name : 'username'}</b>

                <br />

                <p className="justify-content-center" style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}>
                    {props.item_data.text ? props.item_data.text : 'This is the text'}
                </p>

            </div>
        </div>


    );
}



export default TableViewItem;