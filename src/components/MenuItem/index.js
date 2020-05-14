import React from "react";

import { Container, Label, Value } from "./styles";

function MenuItem({ label = "", value = "", active = false }) {
  return (
    <Container active={active}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
}

export default MenuItem;
