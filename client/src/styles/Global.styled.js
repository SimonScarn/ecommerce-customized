import styled from "styled-components";
import { IconButton } from "@mui/material";


const BackBtn = styled(IconButton)`
  && {
    margin-left: 5%;
    margin-top: ${({center}) => center ? "0" : "30px"};
  }
`;


export {BackBtn};