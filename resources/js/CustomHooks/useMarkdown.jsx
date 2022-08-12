import {useState, useEffect} from 'react';
import axios from 'axios';

export const useMarkdown = (value = "") => {
    const [markdown, setMarkdown] = useState("");
    useEffect(() => {
        (async () => {
            const response = await axios.post('api/markdown',{value});
            setMarkdown(response.data);
        })();
    },[value]);

    return markdown;
}
