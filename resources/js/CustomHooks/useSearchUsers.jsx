import {useState, useEffect} from 'react';
import axios from 'axios';

export const useSearchUsers = (query) => {
    const [searchUsers, setSearchUsers] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/search-users/${query}`);
            setSearchUsers(response.data);
        })();
    },[query]);

    return searchUsers;
}
