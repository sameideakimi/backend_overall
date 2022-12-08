// @ts-check
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { name: 'tetz' });
});

router.get('/fetch', (req, res) => {
  res.send(JSON.stringify('프론트로부터 요청이 왔습니다!'));
});

module.exports = router;
