import { Link } from 'react-router-dom';
import useSearchEngine from '../../hooks/useSearchEngine';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import ProfileThumbnail from '../ProfileThumbnail';
import { useRequest } from '../../hooks/useRequest';

const SearchResults = () => {
    const { results, query } = useSearchEngine();
    const { setUserId } = useRequest();
    return (
        <Container spaced>
            <Styled.Wrapper>
                <Heading underlined>Results for {query}</Heading>
                <Styled.Entries>
                    {results?.length
                        ? results.map((skill) => {
                              return skill.Users.map((user) => {
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
                                              <Button
                                                  onClick={() => {
                                                      setUserId(user.id);
                                                  }}
                                              >
                                                  Reach out
                                              </Button>
                                          </Styled.Buttons>
                                      </Styled.Entry>
                                  );
                              });
                          })
                        : 'Nothing found'}
                </Styled.Entries>
            </Styled.Wrapper>
        </Container>
    );
};

export default SearchResults;
