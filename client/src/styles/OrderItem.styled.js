import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  outline: 3px solid black;
  background-color: lightgray;

  h4 {
    padding-right: 3em;
    padding-bottom: 0.5em;
    text-align: right;
    font-weight: 500;
  }
`;

const Header = styled.div`
  outline: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5em;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }

  span {
    font-weight: 700;
  }

  p:nth-child(2) {
    color: ${({ status }) => (status === "pending" ? "orange" : "green")};
  }
`;

const Body = styled.div``;

export { Container, Header, Body };
