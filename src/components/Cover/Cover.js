import React from "react";
import { CoverDiv, CoverTitle } from "./styles";

const Cover = props => (
    <CoverDiv {...props}>
        <CoverTitle>{props.Title}</CoverTitle>
    </CoverDiv>
);

export default Cover;
