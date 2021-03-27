import { useEffect } from 'react';
import useLocationId from '../../hooks/other/useLocationId';
import useFiles from '../../hooks/api/useFiles';
import useFilesDownload from '../../hooks/api/useFileDownload';
import stopPropagation from '../../utils/stopPropagation';
import * as Styled from './styled';

const FilesDrawer = ({ isActive }) => {
    const { locationId } = useLocationId();
    const { files, setFilesFor } = useFiles();
    const { downloadFile } = useFilesDownload();

    useEffect(() => {
        setFilesFor(locationId);
    }, [locationId, setFilesFor]);

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
