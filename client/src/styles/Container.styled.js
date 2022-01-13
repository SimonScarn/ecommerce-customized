import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: grid;
  place-items: center;
  background: ${({theme}) => theme.colors.bgAqua};
`;

