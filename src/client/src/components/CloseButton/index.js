import * as Styled from './styled';

const CloseButton = () => {
    return (
        <Styled.Button>
            <Styled.SVG
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="9.997"
                viewBox="0 0 10 9.997"
            >
                <path
                    d="M17.47,16.287l3.572-3.572a.837.837,0,1,0-1.184-1.184L16.286,15.1l-3.572-3.572a.837.837,0,1,0-1.184,1.184L15.1,16.287l-3.572,3.572a.837.837,0,1,0,1.184,1.184l3.572-3.572,3.572,3.572a.837.837,0,0,0,1.184-1.184Z"
                    transform="translate(-11.285 -11.289)"
                />
            </Styled.SVG>
        </Styled.Button>
    );
};

export default CloseButton;
