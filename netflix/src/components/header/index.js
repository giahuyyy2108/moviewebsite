import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

export default function Header({ bg = true, children, ...restProp }) {
  return bg ? <Background {...restProp}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProp }) {
  return <ButtonLink {...restProp}>{children}</ButtonLink>;
};
Header.Logo = function HeaderLogo({ to, ...restProp }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProp} />
    </ReactRouterLink>
  );
};
