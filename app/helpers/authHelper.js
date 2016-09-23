import _ from 'lodash';

const isFromXteam = email => {
  const domain = '@x-team.com';
  return email.indexOf(domain) !== -1;
};

const parseEmail = email => email.match(/^([^@]*)@/)[1];

const setUpUnleashUser = userProviderData => ({
  id: userProviderData.uid,
  fullName: userProviderData.displayName,
  isAdmin: false,
  picture: userProviderData.photoURL,
  firstName: _.words(userProviderData.displayName)[0],
  lastName: _.words(userProviderData.displayName)[1],
  email: userProviderData.email,
  username: parseEmail(userProviderData.email)
});

export default {
  isFromXteam,
  parseEmail,
  setUpUnleashUser
};
