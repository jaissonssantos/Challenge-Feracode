import styled from "styled-components";

export const CoverPictureContainer = styled.label`
  width: 100%;
  height: 200px;
  border: ${(props) => (props.preview ? "none" : "1px dashed #ccc")}; ;
  border-radius: 5px;
  background-color: #f1f1f1;
  background-size: cover;
  background-image: ${(props) => (props.preview ? `url(${props.preview})` : "")};
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  svg {
      color: #ddd;  
      display: ${(props) => (props.preview ? "none" : "block")};
  }

  span {
    color: #ddd;
    text-align: center;
    font-size: .8rem;
    display: ${(props) => (props.preview ? "none" : "block")};
  }

  input {
    display: none;
  }
`;