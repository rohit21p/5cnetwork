import React from 'react';

export default function Filters(props) {

    const { handleFilterChange, fetchUser, username } = props;

    return (
        <div className="filterContainer">
            <input type="text" value={username} onChange={e => handleFilterChange(e, 'username')}/>
            <button onClick={fetchUser}>Fetch User</button>
        </div>
    )
}