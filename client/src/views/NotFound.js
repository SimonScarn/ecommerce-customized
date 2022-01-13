import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <Container>
      <h2>this page does not exist</h2>
      <HomeLink to="/shop">Return to shop</HomeLink>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  display: grid;
  gap: 20px;
  place-content: center;
  min-height: 90vh;
  background: ${({ theme }) => theme.colors.bgPink};
`;

const HomeLink = styled(Link)`
    && {
        color: inherit;
        margin: auto;
    }
` 