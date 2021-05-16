import styled from "styled-components";
import { PrimaryButton } from "../design/buttons";
import { colors } from "../design/colors";

interface MenuItemProps extends React.ComponentPropsWithoutRef<"li"> {
  color?: string | undefined;
  image?: string | undefined;
}

type MenuWrapperProps = {
  isOpen: boolean;
};

export const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  width: 400px;
  height: 100%;
  display: flex;
  align-items: start;
  transition: transform 0.4s ease-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0px)" : "translateX(-100%)"};
  z-index: 999;
  background: white;
  box-shadow: 5px 1px 11px 0px #acacac78;
  overflow-y: auto;
  padding: 16px;
`;

export const MenuContent = styled.div`
  width: 100%;
`;

export const MenuButton = styled(PrimaryButton)`
  position: absolute;
  left: 20px;
  top: 20px;
  border-radius: 4px;
  z-index: 998;
`;

export const CloseIconHolder = styled.div`
  width: 32px;
  height: 32px;
  margin-left: auto;
  cursor: pointer;
`;

export const SliderItem = styled.img`
  width: 70%;
  margin: 0 auto;
  cursor: pointer;
`;

export const SliderTitle = styled.h6`
  text-align: center;
`;
