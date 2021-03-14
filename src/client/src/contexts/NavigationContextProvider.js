import { createContext, useState } from 'react';

export const NavigationContext = createContext('');

const NavigationContextProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavigation = () => {
        setIsActive((previous) => !previous);
    };

    return (
        <NavigationContext.Provider value={{ isActive, toggleNavigation }}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContextProvider;
