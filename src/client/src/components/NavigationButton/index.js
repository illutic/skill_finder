import * as Styled from './styled';

const NavigationButton = ({ ...rest }) => {
    return (
        <Styled.Button {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.229"
                height="19.651"
                viewBox="0 0 30.229 19.651"
            >
                <g transform="translate(-1557.202 -30.523)">
                    <path
                        d="M33.47,12.393H5.759A1.209,1.209,0,0,1,4.5,11.259h0a1.209,1.209,0,0,1,1.259-1.134H33.47a1.209,1.209,0,0,1,1.259,1.134h0a1.209,1.209,0,0,1-1.259,1.134Z"
                        transform="translate(1552.702 20.399)"
                    />
                    <path
                        d="M33.47,19.143H5.759A1.209,1.209,0,0,1,4.5,18.009h0a1.209,1.209,0,0,1,1.259-1.134H33.47a1.209,1.209,0,0,1,1.259,1.134h0A1.209,1.209,0,0,1,33.47,19.143Z"
                        transform="translate(1552.702 22.34)"
                    />
                    <path
                        d="M33.47,25.893H5.759A1.209,1.209,0,0,1,4.5,24.759h0a1.209,1.209,0,0,1,1.259-1.134H33.47a1.209,1.209,0,0,1,1.259,1.134h0A1.209,1.209,0,0,1,33.47,25.893Z"
                        transform="translate(1552.702 24.281)"
                    />
                </g>
            </svg>
        </Styled.Button>
    );
};

export default NavigationButton;
