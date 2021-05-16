export type CybexPriamType = "sport" | "classic" | "none";

export type Textures = {
  wheel: {
    ao: string;
    diffuse: string;
  };
  construction: {
    ao: string;
    diffuse: string;
  }[];
  bag: {
    ao: string;
    diffuse: string[];
  };
};
