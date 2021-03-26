import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import useFilesSync from '../../hooks/sync/useFileSync';
import useFilesDownload from '../../hooks/api/useFileDownload';

const FilesDrawer = ({ isActive }) => {
    const { files } = useFilesSync();
    const { downloadFile } = useFilesDownload();
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
