import React, { FC } from "react";

interface IButton {
  children: string;
  className: string;
  href: string;
}

export const Button: FC<IButton> = ({
  children = "btn",
  className = "",
  href = "#",
}) => {
  return (
    <a href={href} className={`btn ${className}`}>
      {children}
    </a>
  );
};
