import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as Styled from './styled';
import ROUTES from '../../constants/routes';

const SearchBar = ({ history, ...props }) => {
    const [query, setQuery] = useState();

    const searchSubmissionHandler = (e) => {
        e.preventDefault();
        if (!query) {
            return;
        }
        const searchParams = new URLSearchParams();
        searchParams.append('query', query);
        const queryString = searchParams.toString();
        history.push(`${ROUTES.search}?${queryString}`);
    };

    const searchQueryHandler = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Styled.Form onSubmit={searchSubmissionHandler} {...props}>
            <Styled.Wrapper>
                <Styled.Input
                    type="text"
                    placeholder="Search for a skill..."
                    onChange={searchQueryHandler}
                />
                <Styled.Button>Search</Styled.Button>
                <Styled.Icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.329"
                        height="16.333"
                        viewBox="0 0 16.329 16.333"
                    >
                        <path
                            d="M20.637,19.644,16.1,15.06a6.472,6.472,0,1,0-.982,1l4.512,4.554a.7.7,0,0,0,.987.026A.7.7,0,0,0,20.637,19.644ZM11.01,16.11a5.11,5.11,0,1,1,3.614-1.5A5.079,5.079,0,0,1,11.01,16.11Z"
                            transform="translate(-4.5 -4.493)"
                        />
                    </svg>
                </Styled.Icon>
            </Styled.Wrapper>
        </Styled.Form>
    );
};

export default withRouter(SearchBar);
