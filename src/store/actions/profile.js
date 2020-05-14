export default {
  updateProfile: (profile) => {
    return {
      type: "@PROFILE/UPDATE",
      payload: profile,
    };
  },
};
