import React, { useEffect, useState } from 'react';
import axios from './axiosConfig';

const MembershipList = () => {
    const [memberships, setMemberships] = useState([]);

    useEffect(() => {
        axios.get('/memberships')
            .then(response => setMemberships(response.data))
            .catch(error => console.error('There was an error fetching memberships!', error));
    }, []);

    return (
        <div>
            <h2>Membership Plans</h2>
            <ul>
                {memberships.map(membership => (
                    <li key={membership.id}>
                        <h3>{membership.name}</h3>
                        <p>{membership.description}</p>
                        <p>Price: ${membership.price}</p>
                        <p>Duration: {membership.duration_months} months</p>
                        {/* Implement edit and delete functionalities */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MembershipList;
