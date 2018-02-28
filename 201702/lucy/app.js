/**
 * app
 * @author    : yunchen
 * @createdAt : 12/02/2018
 */
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const now = require('moment')()

app.get('/', (req, res) => {
  res.send('Socket.io')
})

// args:socket
io.on('connection', (socket) => {
  console.log(`${now.format('YYYY-MM-DD HH:mm')}: a user connect!`)
  io.emit('notify client', '欢迎xxx入场！')

  socket.on('disconnect', () => {
    io.emit('leave notify client', 'xxx已离开！')
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message for client', msg)
  })
})

http.listen(8000, () => {
  console.log('listening on *:8000')
})
