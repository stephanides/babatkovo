import styled from "styled-components";
import { colors } from "./colors";

export const PrimaryButton = styled.button`
  font-size: 16px;
  background: ${colors.primary};
  transition: background 0.3s ease-out;
  border: none;
  outline: none;
  color: ${colors.text_inverted};
  padding: 16px 48px;
  cursor: pointer;
  &:hover {
    background: ${colors.primaryHover};
  }
`;

export const SecondaryButton = styled.button`
  font-size: 16px;
  background: ${colors.secondary};
  transition: background 0.3s ease-out;
  border: none;
  outline: none;
  color: ${colors.text_inverted};
  padding: 16px 48px;
  cursor: pointer;
  &:hover {
    background: ${colors.secondaryHover};
  }
`;
