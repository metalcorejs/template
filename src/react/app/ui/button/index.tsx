import React, { FC } from "react";

interface IButton {
  children: string;
  className: string;
  href: string;
  style?: any;
}

export const Button: FC<IButton> = ({
  children = "btn",
  className = "",
  href = "#",
  style,
}) => {
  return (
    <a href={href} className={`btn ${className}`} style={style}>
      {children}
    </a>
  );
};
