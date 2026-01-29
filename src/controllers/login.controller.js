const getLogin = (req, res) => {
  res.json({ message: 'GET login' });
};

const sendCredentials = (req, res) => {
  res.json({ message: 'POST login' });
};

module.exports = {
  getLogin,
  sendCredentials,
};
