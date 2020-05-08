import React from "react";
import styled from "styled-components";

const Container = styled.div<{ isColor: boolean }>`
  color: ${(props) => (props.isColor ? props.theme.blueColor : "gray")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => {
  return <Container isColor={count >= 10}>{count}</Container>;
};

export default Number;
