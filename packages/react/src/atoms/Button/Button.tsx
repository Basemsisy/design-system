import React, { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button className="Button">{label}</button>;
};

export default Button;
