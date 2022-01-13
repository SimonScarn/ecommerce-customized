
import {
  Container,
ImageContainer,
InfoContainer,
} from '../../styles/Option.styled'
import HomeIcon from "@mui/icons-material/Home";

export default function Option({ imgSrc, text, description }) {
  return (
    <Container>
      <ImageContainer>
        <img alt="option img" src={imgSrc} />
      </ImageContainer>
      <InfoContainer>
        <h2>{text}</h2>
        <p>{description}</p>
      </InfoContainer>
    </Container>
  );
}

