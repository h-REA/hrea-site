import React from "react";

import "./Button.scss";

import ExternalLink from "../../svgs/external-link.svg";

export type ButtonProps = {
  text: string;
  externalLinkIcon?: boolean;
  semiTransparent?: boolean;
  onClick?: () => void;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  externalLinkIcon,
  semiTransparent,
  onClick = () => {},
  href,
}) => {
  return (
    <button
      className={`button-wrapper ${semiTransparent ? "semi-transparent" : ""}`}
      onClick={onClick}
      data-href={href}
    >
      {text}
      {externalLinkIcon && <ExternalLink />}
    </button>
  );
};

export default Button;
