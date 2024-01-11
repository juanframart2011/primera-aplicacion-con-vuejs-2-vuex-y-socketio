const express = require('express');
const http = require('http').Server(app);
const io = require('socketi.io')(http);

app.get('/',(req,res) => {
    res.send('socket.io...');
});