import styled from "styled-components";
import { ContentOfTheDay, Asteroids } from "../components";

const StyledHome = styled.main`
  color: var(--clr-black);
  max-width: var(--page-max-width);
  padding-inline: var(--page-padding);
  margin-inline: auto;
`;

const Home = () => {
  return (
    <StyledHome>
      <ContentOfTheDay />
      <hr />
      <Asteroids />
    </StyledHome>
  );
};

export default Home;
