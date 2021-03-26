import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import useFilesSync from '../../hooks/sync/useFileSync';
const FilesDrawer = ({ isActive }) => {
    const { files } = useFilesSync();
    return (
        <Styled.FilesDrawer active={isActive} onClick={stopPropagation}>
            <Styled.Shared>Shared Files</Styled.Shared>
            <Styled.Files>
                {files?.map((file) => {
                    return (
                        <Styled.File key={file.id}>
                            <Styled.Link url={file.uri} download>
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
