import stopPropagation from '../../utils/stopPropagation';
import * as Styled from './styled';

const FilesDrawer = ({ isActive }) => {
    return (
        <Styled.FilesDrawer active={isActive} onClick={stopPropagation}>
            <Styled.Shared>Shared Files</Styled.Shared>
            <Styled.Files>
                {/* {files?.map((file) => {
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
                })} */}
            </Styled.Files>
        </Styled.FilesDrawer>
    );
};

export default FilesDrawer;
