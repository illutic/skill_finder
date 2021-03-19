import { createContext, useState } from 'react';

export const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavigation = () => {
        setIsActive((previous) => !previous);
    };

    const closeNavigation = () => {
        setIsActive(false);
    };

    return (
        <NavigationContext.Provider
            value={{ isActive, toggleNavigation, closeNavigation }}
        >
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContextProvider;
