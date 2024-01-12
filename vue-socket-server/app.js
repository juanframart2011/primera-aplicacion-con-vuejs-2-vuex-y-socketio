const app = require('express')()
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',(req,res) => {
    res.send('socket.io...');
});

io.on('connection',(socket)=>{
    console.log("connect socket");
    socket.on('increment',(counter)=>{
        console.log( "increment" );
        io.sockets.emit('COUNTER_INCREMENT', counter + 1);
    });
    socket.on('decrement',(counter)=>{
        console.log( "decrement" );
        io.sockets.emit('COUNTER_DECREMENT', counter - 1);
    });
});

http.listen(5000,()=>{
    console.log( "listening on *:5000" );
});

module.exports = app;