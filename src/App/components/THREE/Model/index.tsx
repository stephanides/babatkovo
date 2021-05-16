import React, { useEffect, useState } from "react";
import { useLoader, MeshProps } from "react-three-fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import {
  Texture,
  TextureLoader,
  Mesh,
  DoubleSide,
  MeshBasicMaterial,
  Vector2,
} from "three";
import { useStore } from "../../../utils/store";
import { Textures } from "../../../shared/types";

interface ModelProps extends MeshProps {
  data: {
    modelPath: string;
    textures: Textures;
  };
}

const Model: (props: ModelProps) => JSX.Element | null = (props) => {
  const cybexModelType = useStore((state) => state.cybexPriam);
  const cybexMat = useStore((state) => state.cybexMat);
  const {
    data: { modelPath, textures },
  } = props;
  const model = useLoader(FBXLoader, modelPath);
  const diffTexture = useLoader(TextureLoader, textures.bag.diffuse[cybexMat]);
  const aoTexture = useLoader(TextureLoader, textures.bag.ao);
  diffTexture.repeat = new Vector2(0.99, 0.99);
  useEffect(() => {
    const isClassic = cybexModelType === "classic";
    model.traverse((child: any) => {
      if (child.name.toLowerCase().indexOf("vanicka") > -1) {
        child.visible = isClassic;
        child.needsUpdate = true;
      } else if (child.name.toLowerCase().indexOf("sedacka") > -1) {
        child.visible = !isClassic;
        child.needsUpdate = true;
      }
    });
  }, [cybexModelType]);

  useEffect(() => {
    const material: MeshBasicMaterial = new MeshBasicMaterial({
      map: diffTexture,
      aoMap: aoTexture,
      aoMapIntensity: 0.2,
    });
    model.traverse((child: any) => {
      if (child.name.toLowerCase().indexOf("latka") > -1) {
        if (child instanceof Mesh) {
          child.material = material;
          console.log("going update");
          child.material.needsUpdate = true;
        }
      }
    });
  }, [cybexMat]);

  return diffTexture ? (
    <primitive object={model} scale={[0.02, 0.02, 0.02]}>
      <meshStandardMaterial
        bumpScale={0}
        side={DoubleSide}
        attach="material"
      ></meshStandardMaterial>
    </primitive>
  ) : null;
};

export default Model;
