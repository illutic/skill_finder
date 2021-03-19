import * as Styled from './styled';

const SendButton = ({ ...props }) => {
    return (
        <Styled.Button {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.811"
                height="25.811"
                viewBox="0 0 25.811 25.811"
            >
                <g transform="translate(0.75 1.061)">
                    <path
                        d="M29.787,3,16.5,16.287"
                        transform="translate(-5.787 -3)"
                        fill="none"
                        stroke="#F65B13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M27,3,18.6,27,13.8,16.2,3,11.4Z"
                        transform="translate(-3 -3)"
                        fill="none"
                        stroke="#F65B13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>
        </Styled.Button>
    );
};

export default SendButton;
