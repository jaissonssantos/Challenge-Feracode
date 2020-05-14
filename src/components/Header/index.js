import React, { useState } from "react";
import { MdSettings, MdPersonAdd } from "react-icons/md";
import Button from "react-bootstrap/Button";

import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import ActionsProfileRedux from '../../store/actions/profile';

import MenuItem from "../MenuItem";
import Seetings from '../Settings';

import {
  Container,
  CoverContainer,
  HeaderMenu,
  MenuContainer,
  Menu,
  RightMenu,
} from "./styles";

function Header() {

  const [showSetting, setShowSetting] = useState(false);
  const profile = useSelector(state => state.profileReducer.profile);
  const dispatch = useDispatch();

  const handleModalSettings = () => {
    setShowSetting(!showSetting);
  }

  const handleSettingSubmit = (params) => {
    const { name, username, bio, url, city, cover } = params;
    dispatch(ActionsProfileRedux.updateProfile({
      ...profile,
      coverPicture: cover ? cover : "",
      name,
      username,
      bio,
      url,
      city,
    }));
    toast.success('Profile saved successfully');
  }

  return (
    <Container>
      <Seetings 
        data={profile} 
        show={showSetting} 
        handleClose={handleModalSettings} 
        handleSettingSubmit={handleSettingSubmit} />

      <CoverContainer preview={profile.coverPicture} />
      <HeaderMenu>
        <MenuContainer>
          <Menu>
            <MenuItem label="Tweets" value={3} active />
            <MenuItem label="Photos/Videos" value={1} />
            <MenuItem label="Following" value={234} />
            <MenuItem label="Followers" value={937} />
            <MenuItem label="Favorites" value={1203} />
            <MenuItem label=" " value="More" />
          </Menu>
          <RightMenu>
            <button type="button" className="btn-settings" onClick={handleModalSettings}>
              <MdSettings size={24} />
            </button>
            <Button variant="outline-dark">
              <MdPersonAdd size={24} color="#007bff" />
              Follow
            </Button>
          </RightMenu>
        </MenuContainer>
      </HeaderMenu>
    </Container>
  );
}

export default Header;
