
const express = require('express'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  rtsp = require('./rtsp-ffmpeg');

	server.listen(6147);
console.log("Server listen on: http://localhost:6147");

  	app.use(express.static('dist'))

      io.on('connection', function(socket) {
        console.log("connect");
        var  stream = new rtsp.FFMpeg({
          input: socket.request._query.link||'rtsp://aab007.selfip.org/media/video1', // stream uri
           rate: 3 // output framerate (optional)
          //, resolution: '640x480' // output resolution in WxH format (optional)
          //, quality: 2 // JPEG compression quality level (optional)
        });

        var pipeStream = function(data){
            socket.emit('data', data.toString('base64'));
        }

        stream.on('data', pipeStream);

        socket.on('disconnect', function() {
          console.log("disconnect")
        stream.removeListener('data', pipeStream);
        });

      });
