import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { colors } from "styles/colors";
import { FaSpinner } from "react-icons/fa";

export const Button = styled.button<{ variant?: string }>(
  ({ variant = "primary" }) => ({
    padding: "0.5em 1em",
    outline: "none",
    border: "none",
    borderRadius: 3,
    backgroundColor: colors?.[variant]?.background,
    color: colors?.[variant]?.text
  })
);

const rotateAnimation = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

export const Spinner = styled(FaSpinner)({
  animation: `${rotateAnimation} linear 1s infinite`
});

export const Input = styled.input({
  borderRadius: 3,
  padding: "0.5em 1em",
  background: "#f1f2f7",
  border: "1px solid #f1f1f4"
});

export const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: "0.5em"
});
