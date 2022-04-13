import styled from "styled-components";
import { useSelector } from "react-redux";
import { Profile } from "./Profile";

const Container = styled.div`
  margin: 0;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  height: 100vh;
  gap: 30px;
`;

const GridItem1 = styled.div`
  grid-column: 1/3;
  border: 1px solid red;
`;
const GridItem2 = styled.div`
  grid-column: 3/6;
  border: 1px solid blue;
`;

const GridItem3 = styled.div`
  grid-column: 6/9;
  border: 1px solid green;
`;

const GridItem4 = styled.div`
  grid-column: 9/12;
  border: 1px solid black;
`;

export const Home = () => {
  const { token, username } = useSelector((state) => state.login);

  return (
    <Container>
      <GridItem1>
        <Profile token={token} username={username} />
      </GridItem1>
      <GridItem2>TODO</GridItem2>
      <GridItem3>INPROGRESS</GridItem3>
      <GridItem4>DONE</GridItem4>
    </Container>
  );
};
