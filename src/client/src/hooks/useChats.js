import { useEffect, useContext } from 'react';
import { ChatContext } from '../contexts/ChatContextProvider.js';

export const useChats = () => {
    const { setChats, setIsLoaded } = useContext(ChatContext);
    useEffect(() => {
        const getAsync = async () => {
            fetch('http://localhost:8081/api/chats', {
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
