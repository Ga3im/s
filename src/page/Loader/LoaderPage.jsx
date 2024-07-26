import {
  Card,
  CardContent,
  CardDate,
  CardGroup,
  CardItem,
} from "../../components/Card/Card.styled";
import {
  Cards,
  ColumnTitle,
  MainColumn,
} from "../../components/Column/Column.styled";
import {
  Main,
  MainBlock,
  MainContent,
} from "../../components/Main/Main.styled";
import { statusList } from "../../date";
import {
  Container,
  Loader1,
  Loader2,
  Loader3,
  Loader4,
} from "../../GlobalStyle.styled";

export const Loader = () => {
  return (
    <>
      <Main>
        <Container>
          <MainBlock>
            <MainContent>
              {statusList.map((status) => {
                return (
                  <MainColumn key={status}>
                    <ColumnTitle>
                      <p>{status}</p>
                    </ColumnTitle>
                    {statusList.map((id) => (
                      <Cards key={id}>
                        <CardItem>
                          <Card>
                            <CardGroup>
                              <Loader1></Loader1>
                              <Loader2></Loader2>
                            </CardGroup>
                            <CardContent>
                              <Loader3></Loader3>
                              <CardDate>
                                <Loader4></Loader4>
                              </CardDate>
                            </CardContent>
                          </Card>
                        </CardItem>
                      </Cards>
                    ))}
                  </MainColumn>
                );
              })}
            </MainContent>
          </MainBlock>
        </Container>
      </Main>
    </>
  );
};
