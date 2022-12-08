// @ts-check
const express = require('express');
const WebSocketServer = require('ws').Server;

const router = express.Router();
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
  // ws.send('저는 서버입니다. 잘 보이십니까?');

  wss.clients.forEach((client) => {
    client.send(`새로운 유저가 접속했습니다. 현재 유저${wss.clients.size}명`);
  });

  ws.on('message', (message) => {
    // console.log(message.toString());
    wss.clients.forEach((client) => {
      client.send(`${message}`);
    });
  });

  ws.on('close', () => {
    wss.clients.forEach((client) => {
      client.send(`유저 한명이 떠났습니다. 현재 유저${wss.clients.size}명`);
    });
  });
});

router.get('/', (req, res) => {
  res.render('chat');
});

module.exports = router;
