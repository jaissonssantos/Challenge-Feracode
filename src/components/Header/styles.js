import styled from "styled-components";

export const Container = styled.div``;

export const CoverContainer = styled.div.attrs()`
  height: 300px;
  background-color: #0088cc;
  background-size: cover;
  background-image: ${(props) => (props.preview ? `url(${props.preview})` : "")};
  background-position: center center;
`;

export const HeaderMenu = styled.div`
  border-bottom: 1px solid #666;
  background-color: #fff;
`;

export const MenuContainer = styled.div`
  width: 1265px;
  margin: 0 auto;
  height: 60px;
  padding: 0 20px 0 300px;
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
`;

export const RightMenu = styled.div`
  height: 60px;
  display: flex;
  align-items: center;


  button.btn-settings {
    border: none;
    margin-right: 10px;
    
    &:hover {
      outline: none !important;
    }

    &:focus {
      outline: none !important;
    }

    &:hover svg{
      color: #0088cc;
    }
  }

  button svg {
    margin-right: 8px;
  }
`;
