import styled from "styled-components";

export const StyleText = styled.span`
  ${(props) => props.strikeThrough && "text-decoration: line-through"}
`;
