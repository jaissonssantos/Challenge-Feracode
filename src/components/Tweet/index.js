import React from "react";
import { parseISO, formatDistance } from 'date-fns';

import {
  Container,
  Avatar,
  TweetBody,
  UserContainer,
  Name,
  Username,
  TimeElapsed,
  TweetText,
  TweetImage,
} from "./styles";

function Tweet({ data }) {
  return (
    <Container>
      <Avatar src={data.user.avatar}></Avatar>
      <TweetBody>
        <UserContainer>
          <Name>{data.user.name}</Name>
          <Username>@{data.user.username}</Username>
          <TimeElapsed>{
            formatDistance(
              data.datetime,
              new Date(),
              { addSuffix: false }
            )
          }</TimeElapsed>
        </UserContainer>
        <TweetText>{data.text}</TweetText>
        <TweetImage src={data.imageURL}></TweetImage>
      </TweetBody>
    </Container>
  );
}

export default Tweet;
