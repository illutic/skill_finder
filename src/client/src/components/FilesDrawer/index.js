import { useContext } from 'react';
import { FilesContext } from '../../contexts/FilesContextProvider';
import useFileDownload from '../../hooks/api/useFileDownload';
import stopPropagation from '../../utils/stopPropagation';
import * as Styled from './styled';

const FilesDrawer = ({ isActive }) => {
    const { downloadFile } = useFileDownload();
    const { files } = useContext(FilesContext);

    return (
        <Styled.FilesDrawer active={isActive} onClick={stopPropagation}>
            <Styled.Shared>Shared Files</Styled.Shared>
            <Styled.Files>
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
