import * as Styled from './styled';

const AttachButton = ({ ...props }) => {
    return (
        <Styled.Button {...props}>
            <Styled.SVG
                xmlns="http://www.w3.org/2000/svg"
                width="13.383"
                height="25.55"
                viewBox="0 0 13.383 25.55"
            >
                <path
                    d="M21.308,7.725V21.108a4.867,4.867,0,1,1-9.733,0V7.117a3.042,3.042,0,1,1,6.083,0V21.108a1.217,1.217,0,0,1-2.433,0V9.55H13.4V21.108a3.042,3.042,0,0,0,6.083,0V7.117a4.867,4.867,0,0,0-9.733,0V21.108a6.692,6.692,0,0,0,13.383,0V7.725Z"
                    transform="translate(-9.75 -2.25)"
                />
            </Styled.SVG>
        </Styled.Button>
    );
};

export default AttachButton;
