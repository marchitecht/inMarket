const express = require('express');

const router = express.Router();
const loginWithhGoogleApi = require('./loginWithGoogle');

router.use(loginWithhGoogleApi);

module.exports = router;
