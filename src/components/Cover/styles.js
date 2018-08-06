import styled from "styled-components";

const CoverDiv = styled.div`
    background: ${props => `linear-gradient(
            ${props.Angle || "to right top"},
            ${props.StartColor || "rgba(0, 0, 0, 0.5)"},
            ${props.EndColor || "rgba(0, 0, 0, 0.3)"}
        ),
        url(${props.Background})`};
    background-size: cover;
    position: relative;
    width: 300px;
    height: 300px;
    background-position: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.36);
    }
`;
const CoverTitle = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    max-width: 40%;
    color: white;
    font-weight: bolder;
    font-size: 1.75rem;
    font-family: sans-serif;
`;

export { CoverDiv, CoverTitle };
