import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/opt-form";

export default function OptForm({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProp }) {
  return <Input {...restProp} />;
};

OptForm.Button = function OptFormButton({ children, ...restProp }) {
  return (
    <Button {...restProp}>
      {children} <img src="/images/icons/chevron-right.png" alt="try now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProp }) {
  return <Text {...restProp}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProp }) {
  return <Break {...restProp} />;
};
