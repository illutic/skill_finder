import { createContext, useState } from 'react';

export const FilesContext = createContext();

const FilesContextProvider = ({ children }) => {
    const [files, setFiles] = useState([]);

    return (
        <FilesContext.Provider value={{ files, setFiles }}>
            {children}
        </FilesContext.Provider>
    );
};

export default FilesContextProvider;
