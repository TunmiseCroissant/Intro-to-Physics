let mass1;
let a = -0.981;

function setup() {
    createCanvas(800, 600);
    background("white");
    mass1 = new body(200, 500, 100, 100);
    
}

function draw() {
    background("white");
    fill("green")
    rect(0, height - 30, width, 30)
    mass1.show();
    mass1.gravity();
}

class body {
    constructor(x, y, w, h, mass) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.mass = mass;
        this.v = 0;
    }

    show() {
        fill("pink")
        stroke("black")
        strokeWeight(2)
        rect(this.x, height - this.y, this.w, this.h)
    }

    gravity() {
        this.v += a
        this.y += this.v
    }
}
