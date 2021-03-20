import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import useSearchEngine from '../../hooks/useSearchEngine';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import ProfileThumbnail from '../ProfileThumbnail';

const SearchResults = ({ location }) => {
    const { results, query, setQuery } = useSearchEngine();

    useEffect(() => {
        const queryString = location.search.substring(1);
        const searchParams = new URLSearchParams(queryString);
        const decodedQuery = searchParams.get('query');
        setQuery(decodedQuery);
    }, [location.search]);

    return (
        <Container spaced>
            <Styled.Wrapper>
                <Heading underlined>Results for {query}</Heading>
                <Styled.Entries>
                    {results?.length
                        ? results.map((user) => {
                              return (
                                  <Styled.Entry key={user.id}>
                                      <Link to={`/profile/${user.id}`}>
                                          <ProfileThumbnail
                                              name={`${user.firstName} ${user.lastName}`}
                                              title={user.title}
                                              photo=""
                                          />
                                      </Link>
                                      <Styled.Buttons>
                                          <Link to={`/profile/${user.id}`}>
                                              <Button outlined>
                                                  View profile
                                              </Button>
                                          </Link>
                                          <Button>Reach out</Button>
                                      </Styled.Buttons>
                                  </Styled.Entry>
                              );
                          })
                        : 'Nothing found.'}
                </Styled.Entries>
            </Styled.Wrapper>
        </Container>
    );
};

export default withRouter(SearchResults);
