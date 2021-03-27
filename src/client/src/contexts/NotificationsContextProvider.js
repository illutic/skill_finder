import { createContext, useState } from 'react';

export const NotificationsContext = createContext();

const NotificationsContextProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    return (
        <NotificationsContext.Provider
            value={{ notifications, setNotifications }}
        >
            {children}
        </NotificationsContext.Provider>
    );
};

export default NotificationsContextProvider;
