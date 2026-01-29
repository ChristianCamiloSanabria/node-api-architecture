const path = require('path');

const getLogin = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../views/login.html')
  );
};

const sendCredentials = (req, res) => {
  const { email, password } = req.body;

  // ⚠️ aquí luego validarías contra DB
  res.json({
    message: 'Credenciales recibidas',
    email,
  });
};

module.exports = {
  getLogin,
  sendCredentials,
};
