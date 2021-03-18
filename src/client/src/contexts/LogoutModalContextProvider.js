import { createContext, useState } from 'react';

export const LogoutModalContext = createContext();

const LogoutModalContextProvider = ({ children }) => {
    const [isLogoutModalActive, setIsLogoutModalActive] = useState(false);

    const showLogoutModal = () => {
        setIsLogoutModalActive(true);
    };

    const hideLogoutModal = () => {
        setIsLogoutModalActive(false);
    };

    return (
        <LogoutModalContext.Provider
            value={{ isLogoutModalActive, showLogoutModal, hideLogoutModal }}
        >
            {children}
        </LogoutModalContext.Provider>
    );
};

export default LogoutModalContextProvider;
