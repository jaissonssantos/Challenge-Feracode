import { uuid } from 'uuidv4';

const INITIAL_STATE = {
  tweets: [
    {
      id: uuid(),
      user: {
        avatar: "https://api.adorable.io/avatars/285/johndoe@gmail.com.png",
        name: "John Doe",
        username: "johndoe",
      },
      text: "Mauris sed eros blandit, consectetur orci vel, pretium enim. ",
      datetime: new Date('2020-05-10 22:12:41')
    },
    { 
      id: uuid(),
      user: {
        avatar: "https://api.adorable.io/avatars/285/janedoe@gmail.com.png",
        name: "Jane Doe",
        username: "janedoe",
      },
      text:
        "Morbi ultricies urna id risus ultricies, eget congue magna egestas. In ac eleifend ante. Donec sed nisl felis. Ut magna mauris, euismod ac porttitor non, vestibulum vitae purus",
      datetime: new Date('2020-05-08 10:39:20')
    },
    { 
      id: uuid(),
      user: {
        avatar: "https://api.adorable.io/avatars/285/jackdoe@gmail.com.png",
        name: "Jack Doe",
        username: "jackdoe",
      },
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac sapien consectetur, semper ipsum at, accumsan dolor. Fusce non maximus nisl. Nullam felis tortor, condimentum id urna ac, consectetur vestibulum odio. Sed ornare pharetra elit, rutrum ornare purus dapibus in.",
      imageURL:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&w=1000&q=80",
      datetime: new Date('2020-05-01 11:01:22')
    },
  ],
};

const tweet = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === "@TWEET/STORE") {
    return {
      ...state,
      tweets: payload,
    };
  }

  return state;
};

export default tweet;
