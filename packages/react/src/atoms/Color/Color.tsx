import React, { FC } from "react";
import spacing from "../../foundation/spacing";

interface ColorProps {
  hexCode: string;
  width?: typeof spacing;
  height?: typeof spacing;
}

const Color: FC<ColorProps> = ({
  hexCode,
  width = spacing.md,
  height = spacing.md,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;
  return (
    <div
      style={{
        backgroundColor: hexCode,
      }}
      className={className}
    />
  );
};

export default Color;
