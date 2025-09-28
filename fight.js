// The Canvas -------->

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Size of Canvas
canvas.width = 1024
canvas.height = 576

// Background
c.fillRect(0, 0, canvas.width, canvas.height)

// Knights -------->

class Sprite {
  constructor(position){
    this.position = position
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 50, 150)
  }
}

// Player
const player = new Sprite({
  x:0,
  y:0
})

player.draw()

// Enemy
const enemy = new Sprite({
  x:400,
  y:100
})

enemy.draw()

console.log(player)