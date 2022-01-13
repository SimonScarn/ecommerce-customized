import styled from "styled-components";

const Container = styled.div`
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  background: linear-gradient(to right, #2c3e50, #bdc3c7);
  min-height: 90vh;
`;

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 50px;
  min-height: 90vh;
`;

const ProductsSection = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: minmax(400px, 1fr);
  gap: 25px;
  padding: 20px 40px 80px 40px;

  ${({ theme }) => theme.media.mobile} {
    padding: 20px 10px 80px 10px;
  }
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 100;
  margin-bottom: 0.5rem;
  padding: 10px 40px 20px 40px;
  border-bottom: 2px solid lightgrey;
  background-color: lightgrey;

  ${({ theme }) => theme.media.xs} {
    flex-direction: column;
    gap: 10px;

    p {
      display: none;
    }
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 1px;
  }
`;

const Select = styled.select`
  height: 40px !important;
  width: 200px;
  padding: 0 6px;
  font-size: 1.1em;
  background: none;
  outline: none;
  border-radius: 1rem;

  &:active,
  &:focus {
    outline: 3px solid black;
  }

  ${({ theme }) => theme.media.xs} {
    height: 30px;
  }

  option {
    background: whitesmoke;
    border-bottom: 1px solid black;
  }
`;

export {
  Container,
  LoaderContainer,
  ProductsSection,
  Filters,
  Section,
  Select,
};
