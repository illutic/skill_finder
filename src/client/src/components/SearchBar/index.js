import * as Styled from './styled';

const SearchBar = () => {
    return (
        <Styled.Form onSubmit={(e) => e.preventDefault()}>
            <Styled.Input type="text" placeholder="Search for a skill..." />
            <Styled.Button>Search</Styled.Button>
        </Styled.Form>
    );
};

export default SearchBar;
