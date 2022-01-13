import styled from "styled-components";

const Container = styled.div`
  min-height: 90vh;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.colors.bgAqua};

  h2 {
    padding-left: 5%;
    font-size: 1.75em;
    font-weight: 900;
  }
`;

const Select = styled.select`
  height: 40px;
  width: 160px;
  margin-left: 5%;
  margin-bottom: 2rem;
  font-size: 1.1em;
  border-radius: 1rem;
  padding: 0.25em;
`;

export { Container, Select };
