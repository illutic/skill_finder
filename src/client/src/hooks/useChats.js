import { useEffect, useState } from 'react';
import * as Styled from '../components/Messages/styled.js';

export const useChats = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chats, setChats] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/api/chats', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
            mode: 'cors',
            credentials: 'include',
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setChats(result.chats);
                    console.log(result.chats);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [setChats, setError, setIsLoaded]);

    if (chats.error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Styled.List>
                {chats.map((chat) => (
                    <Styled.List key={chat.id}>
                        {chat.Users.map((user) => (
                            <Styled.Item key={user.id}>
                                {user.firstName}
                            </Styled.Item>
                        ))}
                    </Styled.List>
                ))}
            </Styled.List>
        );
    }
};
