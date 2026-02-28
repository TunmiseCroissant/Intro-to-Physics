let mass1;
let g = -0.981;
let floor;
let words = ""

function setup() {
    createCanvas(800, 600);
    background("white");
    mass1 = new body(100, 200, 100, 100, 1, g, 20);
    floor = new ground(30)
    
}

function draw() {
    background("white");
    floor.show();
    fill("black")
    strokeWeight(0)
    text(words, 600, 100);
    mass1.show();
    mass1.gravity();
}

class ground {
    constructor(h) {
        this.h = h;
        this.y = height - this.h;
    }

    show() {
        fill("green")
        rect(0, this.y, width, this.h)
    }
}

class body {
    constructor(x, y, w, h, mass, a = g, v =0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.mass = mass;
        this.v = v;
        this.a = a;
        this.f = this.mass * g;
        this.NF = this.f;
        this.vx = 10;
    }

    show() {
        fill("pink")
        stroke("black")
        strokeWeight(2)
        rect(this.x, height - this.y, this.w, this.h)
    }

    gravity() {
        this.a = g * this.mass;
        this.v += this.a
        if (((this.y - this.h) + this.v) <= floor.h) {
            this.v = 0;
            this.a = 0;
            this.y = floor.h + this.h
            this.vx = 0;
        }
        this.y += this.v
        this.NF = this.mass * this.a;
        this.x += this.vx;
        words = `speed = ${this.v.toFixed(2)} m/s`
    }
}
