import React, { FC } from "react";

interface ColorProps {
  hexCode: string;
  width: string;
  height: string;
}

const Color: FC<ColorProps> = ({ hexCode, width, height }) => {
  return <div style={{ backgroundColor: hexCode, width, height }}></div>;
};

export default Color;
