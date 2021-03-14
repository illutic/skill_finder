import { createContext, useState } from 'react';

export const NavigationContext = createContext('');

const NavigationContextProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive((previous) => !previous);
    };

    return (
        <NavigationContext.Provider value={{ isActive, toggle }}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContextProvider;
