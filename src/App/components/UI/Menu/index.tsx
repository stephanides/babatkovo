import React, { useState } from "react";
import Slider from "react-slick";
import {
  CloseIconHolder,
  MenuButton,
  MenuContent,
  MenuWrapper,
  SliderItem,
  SliderTitle,
} from "./Menu.styled";
import { useStore } from "../../../utils/store";
import { CybexPriamType } from "../../../shared/types";
import { Heading3 } from "../design/typography";
import { CloseIcon } from "./closeIcon";

type MenuProps = {
  data?: {
    color?: string | undefined;
    image?: string | undefined;
    title: string;
  }[];
};

const cybexMaterials = [
  { title: "Koža", image: "../../../../assets/img/cybex/materials/koza.jpg" },
  { title: "Látka", image: "../../../../assets/img/cybex/materials/Latka.jpg" },
  {
    title: "Látka čierna",
    image: "../../../../assets/img/cybex/materials/Latka_black_sprite.png",
  },
  {
    title: "Látka modrá",
    image: "../../../../assets/img/cybex/materials/Latka_blue_sprite.png",
  },
  {
    title: "Látka sivá",
    image: "../../../../assets/img/cybex/materials/Latka_grey_sprite.png",
  },
  {
    title: "Látka kaki",
    image: "../../../../assets/img/cybex/materials/Latka_khaki_sprite.png",
  },
  {
    title: "Látka červená",
    image: "../../../../assets/img/cybex/materials/Latka_red_sprite.png",
  },
  {
    title: "Látka biela",
    image: "../../../../assets/img/cybex/materials/Latka_white2.png",
  },
];

const Menu: (props: MenuProps) => JSX.Element = ({ data }) => {
  const changeCybexModel = useStore((state) => state.changeCybexModel);
  const changeCybexMat = useStore((state) => state.changeCybexMat);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChangeType: (value: CybexPriamType) => void = (value) => {
    changeCybexModel(value);
  };

  const handleChangeMat: (value: number) => void = (value) => {
    changeCybexMat(value);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Upraviť
      </MenuButton>
      <MenuWrapper isOpen={isMenuOpen}>
        <MenuContent>
          <CloseIconHolder onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <CloseIcon />
          </CloseIconHolder>
          <Heading3>CYBEX Priam</Heading3>
          <div>
            <Slider {...sliderSettings}>
              <div onClick={() => handleChangeType("classic")}>
                <SliderItem src="../../../../assets/img/cybex/classic.jpg" />
              </div>
              <div onClick={() => handleChangeType("sport")}>
                <SliderItem src="../../../../assets/img/cybex/sport.jpg" />
              </div>
            </Slider>
          </div>
          <Heading3>Materiál</Heading3>
          <div>
            <Slider {...sliderSettings}>
              {cybexMaterials.map((material, index) => (
                <div onClick={() => changeCybexMat(index)} key={index}>
                  <SliderItem src={material.image} />
                  <SliderTitle>{material.title}</SliderTitle>
                </div>
              ))}
            </Slider>
          </div>
        </MenuContent>
      </MenuWrapper>
    </>
  );
};

export default Menu;
