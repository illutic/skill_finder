import { useState, useContext, useEffect } from 'react';
import { RequestsContext } from '../../contexts/RequestsContextProvider';
import * as Styled from './styled';
import Button from '../Button/index';

const RequestActions = ({ userId }) => {
    const [actionType, setActionType] = useState();
    const [requestId, setRequestId] = useState();
    const { requests } = useContext(RequestsContext);

    useEffect(() => {
        if (!userId) {
            return;
        }
        // Connected Button
        const isConnected = requests?.acceptedRequests?.find((request) => {
            return (
                (request.fromId === userId || request.toId === userId) &&
                request.pending === false &&
                request.accepted === true
            );
        });
        if (isConnected) {
            setActionType('connected');
            setRequestId(null);
            return;
        }
        // Accept/Deny Buttons
        const isPending = requests?.incomingRequests?.find((request) => {
            return (
                request.fromId === userId &&
                request.pending === true &&
                request.accepted === false
            );
        });
        if (isPending) {
            setActionType('pending');
            return;
        }
        // Sent Button
        const isSent = requests?.sentRequests?.find((request) => {
            return (
                request.toId === userId &&
                request.pending === true &&
                request.accepted === false
            );
        });
        if (isSent) {
            setActionType('sent');
            return;
        }
    }, [userId, requests, setActionType]);

    switch (actionType) {
        case 'connected':
            return <Button outlined>Connected</Button>;
        case 'pending':
            return (
                <Styled.Buttons>
                    <Button>Accept</Button>
                    <Button outlined>Deny</Button>
                </Styled.Buttons>
            );
        case 'sent':
            return <Button outlined>Pending</Button>;
        default:
            return <Button>Reach out</Button>;
    }
};

export default RequestActions;
