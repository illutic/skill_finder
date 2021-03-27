import { useState, useContext, useEffect } from 'react';
import useRequest from '../../hooks/api/useRequest';
import { RequestsContext } from '../../contexts/RequestsContextProvider';
import * as Styled from './styled';
import Button from '../Button/index';
import REQUEST_STATUS from '../../constants/requestStatus';

const RequestActions = ({ userId }) => {
    const [actionType, setActionType] = useState();
    const [requestId, setRequestId] = useState();
    const { requests } = useContext(RequestsContext);
    const { acceptRequest, denyRequest, sendRequest } = useRequest();

    useEffect(() => {
        if (!userId) {
            return;
        }
        // Connected Button
        const isAccepted = requests?.acceptedRequests?.find((request) => {
            return (
                (request.fromId === userId || request.toId === userId) &&
                request.pending === false &&
                request.accepted === true
            );
        });
        if (isAccepted) {
            setActionType(REQUEST_STATUS.accepted);
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
            setActionType(REQUEST_STATUS.pending);
            setRequestId(isPending.id);
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
            setActionType(REQUEST_STATUS.sent);
            return;
        }

        setActionType(null);
    }, [userId, requests, setActionType]);

    switch (actionType) {
        case REQUEST_STATUS.accepted:
            return (
                <Button outlined fixed disabled>
                    Connected
                </Button>
            );
        case REQUEST_STATUS.pending:
            return (
                <Styled.Buttons>
                    <Button fixed onClick={() => acceptRequest(requestId)}>
                        Accept
                    </Button>
                    <Button
                        outlined
                        fixed
                        onClick={() => denyRequest(requestId)}
                    >
                        Deny
                    </Button>
                </Styled.Buttons>
            );
        case REQUEST_STATUS.sent:
            return (
                <Button outlined fixed disabled>
                    Sent
                </Button>
            );
        default:
            return (
                <Button fixed onClick={() => sendRequest(userId)}>
                    Reach out
                </Button>
            );
    }
};

export default RequestActions;
