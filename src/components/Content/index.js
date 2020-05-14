import React from "react";
import { uuid } from 'uuidv4';

import Tweet from "../Tweet";

import {
  Container,
  NewTweetContainer,
  Avatar,
  NewTweet,
  TweetsContainer,
} from "./styles";

import { useSelector, useDispatch } from 'react-redux';
import ActionsTweetRedux from '../../store/actions/tweet';

function Content() {


  const profile = useSelector(state => state.profileReducer.profile);
  const tweets = useSelector(state => state.tweetReducer.tweets);
  const dispatch = useDispatch();

  const handleTweet = (event) => {
    if(event.key === 'Enter'){
      dispatch(ActionsTweetRedux.storeTweet([
        {
          id: uuid(),
          user: {
            avatar: profile.picture,
            name: profile.name,
            username: profile.username,
          },
          text: event.target.value,
          datetime: new Date()
        },
        ...tweets
      ]));

      event.target.value = null;
    }
  }

  return (
    <Container>
      <NewTweetContainer>
        <Avatar src={profile.picture}></Avatar>
        <NewTweet onKeyPress={handleTweet}></NewTweet>
      </NewTweetContainer>
      <TweetsContainer>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} data={tweet} />
        ))}
      </TweetsContainer>
    </Container>
  );
}

export default Content;
