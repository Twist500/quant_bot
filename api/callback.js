module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('No authorization code received from Deriv.');
  }

  // For now, just display the code so you can copy it manually
  // Later we can add token exchange if needed
  res.send(`
    <h2>Deriv OAuth Callback Success</h2>
    <p><strong>Authorization Code:</strong></p>
    <pre>${code}</pre>
    <p>Copy this code and use it to exchange for token (via Postman or script).</p>
    <p>Redirect URI used: ${req.headers.host}/callback</p>
  `);
};
