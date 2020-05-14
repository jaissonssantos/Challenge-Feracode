import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 10px; */
  padding: ${(props) => (props.active ? "5px 10px 0" : "0 10px")};
  border-bottom: ${(props) => (props.active ? "5px solid #666" : "none")};
`;

export const Label = styled.div`
  font-size: 15px;
  text-transform: uppercase;
`;

export const Value = styled.div`
  font-size: 22px;
  font-weight: bold;
`;
