let http = require('http')
let express = require('express');
let robot = require('robotjs')
let opentype = require('opentype.js')
let socket = require('socket.io')


//server
let app = express()
var httpServer = http.createServer(app);

httpServer.listen(8080, () => {
  console.log("listening on 8080")
})

app.use('/', express.static('public'))

//socket
var io = socket(httpServer);




let outlineXY = []

//connect to sockets when entering the screen
io.sockets.on('connection', (socket) => {
  console.log("socket connection, new user:" + socket.id)

  //load font
  opentype.load('public/cac_champagne.ttf', function(err, font) {
    if (err) {
      alert('Font could not be loaded: ' + err);
    } else {
      //when pressing d
      socket.on('dpres', () => {
        // Construct a Path object containing the letter shapes of the given text.
        var path = font.getPath('D', 0, 150, 72);

        //get x,y and remove undefined = (letterspacing?)
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 200,
              "y": element.y + 200
            })
          }
        })
        //move mouse to starting x,y position of letter using robot
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        //for each point draw and reset array
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
      })
      //the rest is similar for different letters
      socket.on('epres', () => {
        var path = font.getPath('e', 0, 150, 72);
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 250,
              "y": element.y + 200
            })
          }
        })
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
      })
      socket.on('apres', () => {
        var path = font.getPath('a', 0, 150, 72);
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 275,
              "y": element.y + 200
            })
          }
        })
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
      })
      socket.on('rpres', () => {
        var path = font.getPath('r', 0, 150, 72);
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 300,
              "y": element.y + 200
            })
          }
        })
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
        robot.mouseToggle('up', 'left')
        robot.moveMouse(500, 200)
      })
      socket.on('jpres', () => {
        var path = font.getPath('D', 0, 150, 72);
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 400,
              "y": element.y + 200
            })
          }
        })
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
      })
      socket.on('kpres', () => {
        var path = font.getPath('K', 0, 150, 72);
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 450,
              "y": element.y + 200
            })
          }
        })
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
        robot.mouseToggle('up', 'left')
        robot.moveMouse(200, 300)
      })
      socket.on('enterpres', () => {
        var path = font.getPath('Næsten færdig med eksamener! Vi ses snart.', 0, 150, 72);
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 200,
              "y": element.y + 300
            })
          }
        })
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
      })
      socket.on('hpres', () => {
        var path = font.getPath('- Simon', 0, 150, 72);
        path.commands.forEach(element => {
          if (element.x | element.y == !undefined) {
            outlineXY.push({
              "x": element.x + 200,
              "y": element.y + 400
            })
          }
        })
        robot.moveMouse(outlineXY[0].x, outlineXY[0].y)
        outlineXY.forEach(element => {
          console.log(element.x, element.y)
          robot.mouseToggle("down", "left")
          robot.moveMouseSmooth(element.x, element.y)
          outlineXY = []
        })
      })
    }
  })
})

//
// socket.on('dpres', () => {
//   robot.moveMouse(100, 100)
// })
//
// socket.on('disconnect', () => {
//   console.log('Client has disconnected')
// })
// })
