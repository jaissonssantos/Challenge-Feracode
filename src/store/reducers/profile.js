const INITIAL_STATE = {
  profile: {
    name: "Jaisson Santos",
    username: "devjs",
    bio: "A developer that is an enthusiast of new technologies and a JavaScript fan. Currently working Angular, Svelte, ReactJS, React Native, Node.js and more :)",
    picture: "https://avatars0.githubusercontent.com/u/12276656?s=460&u=a6a8a98532fa8ad0469dd0f4e3d5142a10e082d2&v=4",
    coverPicture: "https://res.cloudinary.com/ktech-cdn/image/upload/v1589501094/0_evywsz.jpg",
    city: "Rio Branco",
    url: "ktech.mobi",
    joined: new Date('2010-01-12'),
  },
};

const profile = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === "@PROFILE/UPDATE") {
    return {
      ...state,
      profile: payload,
    };
  }

  return state;
};

export default profile;
