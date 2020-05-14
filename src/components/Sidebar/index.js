import React, { useState } from "react";
import { MdPlace, MdLink, MdSchedule } from "react-icons/md";
import { parseISO, formatDistance } from 'date-fns';

import {
  Container,
  AvatarContainer,
  Name,
  Username,
  Description,
  UserInfo,
} from "./styles";

import { useSelector, useDispatch } from 'react-redux';
import ActionsProfileRedux from '../../store/actions/profile';


function Sidebar() {

  const [thumbnail, setThumbnail] = useState(null);
  const profile = useSelector(state => state.profileReducer.profile);
  const dispatch = useDispatch();

  // create tmp url for object file selected and set thumbnail 
  const handleThumbnail = (event) => {

    if(event.target.files[0]) {
      dispatch(ActionsProfileRedux.updateProfile({
        ...profile,
          picture: URL.createObjectURL(event.target.files[0])
      }));
      setThumbnail(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <Container>
      <AvatarContainer preview={thumbnail}>
        <input type="file" onChange={ event => handleThumbnail(event) } />
        <img src={profile.picture} alt="" />
      </AvatarContainer>
      <Name>{profile.name}</Name>
      <Username>@{profile.username}</Username>
      <Description>
      {profile.bio}
      </Description>
      <UserInfo>
        <MdPlace size={24} />
        {profile.city}
      </UserInfo>
      <UserInfo>
        <MdLink size={24} />
        {profile.url}
      </UserInfo>
      <UserInfo>
        <MdSchedule size={24} />
        Joined at {
          formatDistance(
            profile.joined,
            new Date(),
            { addSuffix: false }
          )
        }
      </UserInfo>
    </Container>
  );
}

export default Sidebar;
