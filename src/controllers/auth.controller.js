const getToken = (req, res) => {
  res.json({ message: 'GET token' });
};

const sendToken = (req, res) => {
  res.json({ message: 'POST token' });
};

module.exports = {
  getToken,
  sendToken,
};
