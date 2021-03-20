import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';

const FilesDrawer = ({ isActive }) => {
    return (
        <Styled.FilesDrawer active={isActive} onClick={stopPropagation}>
            <Styled.Shared>Shared Files</Styled.Shared>
            <Styled.Files>
                {/* Template */}
                {/* <Styled.File key={fileId}>
                        <Styled.Link url={downloadURL} download>
                            {fileName}
                        </Styled.Link>
                    </Styled.File> */}
                <Styled.File>
                    <Styled.Link url="/" download>
                        consetetur.txt
                    </Styled.Link>
                </Styled.File>
                <Styled.File>
                    <Styled.Link url="/" download>
                        aliquyam.pdf
                    </Styled.Link>
                </Styled.File>
            </Styled.Files>
        </Styled.FilesDrawer>
    );
};

export default FilesDrawer;
