import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import FavoriteRow from "./FavoriteRow";
import {BackBtn} from '../../styles/Global.styled';
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Favorites() {
  const navigate = useNavigate();
  const { user, favorites } = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user]);

  return (
    <Container>
      <BackBtn onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </BackBtn>
      <h2>{favorites.length} favorite items</h2>
      <hr />
      {favorites.map((i) => {
        return <FavoriteRow index={i} />;
      })}
    </Container>
  );
}

export default Favorites;

const Container = styled.div`
  min-height: 90vh;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.colors.bgGrey};

  h2 {
    margin-left: 5%;
  }
`;
;
