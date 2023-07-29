const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

function random(min,max){
    const num = Math.floor(Math.random()*(max-min+1))+1
    return num
}
function Shape(x,y,velX,velY,exists){
    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
    this.exists = exists
}

function Ball(x,y,velX,velY,color,size,exists){
    Shape.call(this,x,y,velX,velY,exists)
    this.color = color
    this.size = size
}
Ball.prototype = Object.create(Shape.prototype)
Object.defineProperty(Ball.prototype, 'constructor', {
    value: Ball,
    enumerable: false,
    writable: true
})

Ball.prototype.draw = function (){
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
}

Ball.prototype.update = function (){
    if((this.x + this.size) >= width){
        this.velX = -(this.velX)
    }
    if((this.x - this.size) <= 0 ){
        this.velX = -(this.velX)
    }
    if((this.y + this.size) >= height){
        this.velY = -(this.velY)
    }
    if((this.y - this.size) <= 0){
        this.velY = -(this.velY)
    }

    this.x += this.velX
    this.y += this.velY
}

Ball.prototype.colisionDetect = function(){
    for(let j = 0; j < balls.length; j++){
        if(!(this === balls[j])){
            const dx = this.x - balls[j].x
            const dy = this.y - balls[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if(distance < this.size + balls[j].size){
                balls[j].color = this.color = `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`
            }
        }
    }
}

function EvilCircle(x,y,velX,velY,exists){
    Shape.call(this,x,y,velX,velY,exists)
    this.color = 'white'
    this.size = 10
}
EvilCircle.prototype = Object.create(Shape.prototype)
Object.defineProperty(EvilCircle.prototype, 'constructor', {
    value: EvilCircle,
    enumerable: false,
    writable: true
})

EvilCircle.prototype.draw = function (){
    ctx.beginPath()
    ctx.strokeStyle = this.color
    ctx.lineWidth = 3
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.stroke()
}
EvilCircle.prototype.checkBounds = function (){
    if((this.x + this.size) >= width){
        this.x = -(this.x)
    }
    if((this.x - this.size) <= 0 ){
        this.x = -(this.x)
    }
    if((this.y + this.size) >= height){
        this.y = -(this.y)
    }
    if((this.y - this.size) <= 0){
        this.y = -(this.y)
    }
}
EvilCircle.prototype.setControls = function(){
    var _this = this
    window.onkeydown = function(e){
        if(e.keycode === 65){
            _this.x -= _this.velX
        }else if(e.keycode === 68){
            _this.x += _this.velX
        }else if(e.keycode === 87){
            _this.y -= _this.velY
        }else if(e.keycode === 83){
            _this.y += _this.velY
        }
    }
}
EvilCircle.prototype.colisionDetect = function(){
    for(let j = 0; j < balls.length; j++){
        if(balls[j].exists){
            const dx = this.x - balls[j].x
            const dy = this.y - balls[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if(distance < this.size + balls[j].size){
                balls[j].exists = false
            }
        }
    }
}

let balls = []

while(balls.length < 10){
    let size = random(10,20)
    let ball = new Ball(random(0 + size, width - size), random(0 + size, height - size), random(-7,7), random(-7,7), `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)}`, size, true)
    balls.push(ball)
}

function loop(){
    ctx.fillStyle = 'rgb(0,0,0,.2)'
    ctx.fillRect(0,0,width,height)
    
    let evil = new EvilCircle(20, 20, 20, 20, true)
    evil.draw()
    evil.setControls()
    for(let i = 0; i<balls.length; i++){
        balls[i].draw()
        balls[i].update()
        balls[i].colisionDetect()
    }

    requestAnimationFrame(loop)
}

loop()