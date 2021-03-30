import { useState, useContext } from 'react';
import { FilesContext } from '../../contexts/FilesContextProvider';
import useDownloadFile from '../../hooks/api/useDownloadFile';
import stopPropagation from '../../utils/stopPropagation';
import * as Styled from './styled';

const FilesDrawer = ({ isActive }) => {
    const [areFilesShown, setAreFilesShown] = useState(false);
    const { files } = useContext(FilesContext);
    const { downloadFile } = useDownloadFile();

    const toggleFiles = () => {
        setAreFilesShown((previous) => !previous);
    };

    return (
        <Styled.FilesDrawer
            active={isActive}
            areFilesShown={areFilesShown}
            onClick={stopPropagation}
        >
            <Styled.Shared onClick={toggleFiles}>
                Shared Files
                <Styled.DisappearingArrowButton areFilesShown={areFilesShown} />
            </Styled.Shared>
            <Styled.Files areFilesShown={areFilesShown}>
                {files?.map((file) => {
                    return (
                        <Styled.File key={file.id}>
                            <Styled.Link
                                onClick={() =>
                                    downloadFile(file.uri, file.fileName)
                                }
                            >
                                {file.fileName}
                            </Styled.Link>
                        </Styled.File>
                    );
                })}
            </Styled.Files>
        </Styled.FilesDrawer>
    );
};

export default FilesDrawer;
