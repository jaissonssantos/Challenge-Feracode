import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;

  & + & {
    border-top: 1px solid #ddd;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
  border-radius: 50%;
`;

export const TweetBody = styled.div``;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

export const Username = styled.div`
  font-size: 18px;
  color: #999;
  margin-right: 10px;
`;

export const TimeElapsed = styled.div`
  font-size: 18px;
  color: #999;
`;

export const TweetText = styled.div`
  margin-top: 5px;
  font-size: 18px;
  line-height: 1.5em;
`;

export const TweetImage = styled.img`
  margin-top: 10px;
  width: 100%;
  border-radius: 5px;
`;
