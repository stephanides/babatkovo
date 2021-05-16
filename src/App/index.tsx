import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import Controls from "./components/THREE/Controls";
import Ground from "./components/THREE/Ground";
import Menu from "./components/UI/Menu";
import Model from "./components/THREE/Model";
import Loader from "./components/UI/Loader";
import {
  ambientLightProps,
  cameraProps,
  controlsProps,
  groundProps,
  modelProps,
  pixelRatio,
  pointLightProps,
} from "./utils/constants";

import * as data from "../assets/data.json";
import styled from "styled-components";
import { Textures } from "./shared/types";

type ModelDataType = {
  modelPath: string;
  textures: Textures;
  title: string;
};

const App: () => JSX.Element | null = () => {
  const [modelData, setModelData] = useState(({} as unknown) as ModelDataType);

  useEffect(() => {
    const handleSetModelData: () => void = () => {
      setModelData(data[0]);
    };

    handleSetModelData();
    return () => handleSetModelData();
  }, [0]);

  return Object.keys(modelData).length > 0 ? (
    <Wrapper>
      <Menu />
      <Canvas
        camera={{ fov: cameraProps.fov, position: cameraProps.position }}
        colorManagement
        invalidateFrameloop
        shadowMap
        pixelRatio={window.devicePixelRatio || pixelRatio}
      >
        <ambientLight intensity={ambientLightProps.intensity} />
        <pointLight
          position={pointLightProps.position}
          castShadow
          decay={pointLightProps.decay}
          shadow-mapSize-height={pointLightProps.shadowMapSize}
          shadow-mapSize-width={pointLightProps.shadowMapSize}
        />
        <Controls
          maxPolarAngle={controlsProps.maxPolarAngle}
          minPolarAngle={controlsProps.minPolarAngle}
          target={controlsProps.target}
          enableKeys
        />
        <Suspense fallback={<Loader />}>
          <Model
            data={{
              modelPath: modelData.modelPath,
              textures: modelData.textures,
            }}
            position={modelProps.position}
            castShadow
          />
        </Suspense>
        <Ground
          name="Ground"
          receiveShadow
          position={groundProps.posiiton}
          rotation={groundProps.rotation}
        />
      </Canvas>
    </Wrapper>
  ) : null;
};

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
