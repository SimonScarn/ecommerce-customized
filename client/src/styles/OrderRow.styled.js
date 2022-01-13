import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  background-color: white;
`;

const Left = styled.div`
  flex: 0.6;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0 1.5em;
  min-width: 0;

  img {
    height: 50px;
    min-width: 60px;
    object-fit: contain;
  }

  div {
    min-width: 0;
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4em;
  padding-right: 1.5em;

  ${({ theme }) => theme.media.mobile} {
    padding: 0 0.25em;
    flex-direction: column;
  }
`;

const Title = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { Container, Left, Right, Title, ItemLink };
