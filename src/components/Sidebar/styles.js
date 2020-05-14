import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  padding: 0 20px;
`;

export const AvatarContainer = styled.label`
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-top: -220px;
  background-color: #fff;
  background-size: cover;
  background-image: ${(props) => (props.preview ? `url(${props.preview})` : "")};

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    padding: 5px;
    border-radius: 15px;
    display: ${(props) => (props.preview ? "none" : "block")};
  }

  input {
    display: none;
  }
`;

export const Name = styled.div`
  margin-top: 10px;
  font-size: 40px;
  font-weight: bold;
`;

export const Username = styled.div`
  font-size: 24px;
  color: #999;
`;

export const Description = styled.div`
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.5em;
`;

export const UserInfo = styled.div`
  font-size: 16px;
  line-height: 1.7em;
`;
