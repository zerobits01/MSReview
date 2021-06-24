import { data } from 'jquery';
import React, { useState } from 'react';
import TableExample from '../../components/table-view/table-view';

const Profile = () => {
    const {data, dispatchData} = useState({});
    let table_data = [
        {
            title: "Something",
            description: "something else",
            ms_type: "another one",
            genre: "genre",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Greenland_%28film%29.png/220px-Greenland_%28film%29.png"
        },
        {
            title: "Something",
            description: "something else",
            ms_type: "another one",
            genre: "genre",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Greenland_%28film%29.png/220px-Greenland_%28film%29.png"
        },
        {
            title: "Something",
            description: "something else",
            ms_type: "another one",
            genre: "genre",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Greenland_%28film%29.png/220px-Greenland_%28film%29.png"
        }

    ]
    return (
        <div>
            <TableExample table_data={table_data}/>
        </div>

    );
}



export default Profile;