import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';

const FilesDrawer = ({ isActive }) => {
    return (
        <Styled.FilesDrawer active={isActive} onClick={stopPropagation}>
            <Styled.Shared>Shared Files</Styled.Shared>
            <Styled.Files>
                <Styled.File>aliquyam.pdf</Styled.File>
                <Styled.File>consetetur.txt</Styled.File>
            </Styled.Files>
        </Styled.FilesDrawer>
    );
};

export default FilesDrawer;
