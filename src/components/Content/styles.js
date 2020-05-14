import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 15px 0 50px;
  background-color: #fff;
`;

export const NewTweetContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

export const AvatarContainer = styled.div``;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 15px 0 30px;
`;
export const NewTweet = styled.input.attrs({
  placeholder: `What's happening?`,
})`
  flex: 1;
  font-size: 20px;
  line-height: 50px;
  border: 1px solid #eee;
  border-radius: 25px;
  padding: 0 20px;
  background-color: #f6f8fa;
`;

export const TweetsContainer = styled.div``;
