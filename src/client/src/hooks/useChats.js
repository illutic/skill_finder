import { useEffect, useContext } from 'react';
import ENDPOINTS from '../constants/endpoints.js';
import { ChatContext } from '../contexts/ChatContextProvider.js';

export const useChats = () => {
    const { setChats, setIsLoaded } = useContext(ChatContext);
    useEffect(() => {
        const getAsync = async () => {
            fetch(ENDPOINTS.chats, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': true,
                },
                mode: 'cors',
                credentials: 'include',
            })
                .then((res) => res.json())
                .then((result) => {
                    setChats(result.chats);
                    setIsLoaded(true);
                    console.log(result.chats);
                });
        };
        getAsync();
    }, [setChats, setIsLoaded]);
};
export default useChats;
